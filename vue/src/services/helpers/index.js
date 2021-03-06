import Node from "@/models/Node";
import Group from "@/models/Group";
import User from "@/models/User";
import Application from "@/models/Application";
import Port from "@/models/Port";

/**
 * convert to number
 * @param {?number} value
 * @returns {number}
 */
function convertToNumber(value) {
    return Number(value);
}

/**
 * save node
 * @param {Object.<number, Node>} nodes
 * @param {GroupsWithNodes} node
 * @returns {Node}
 */
const saveNode = (nodes, node) => {
    if (!nodes[node.node_id]) {
        nodes[node.node_id] = new Node(
            node.node_id,
            node.node_caption,
            node.node_status_description,
            node.node_status_color,
            node.user_id,
            convertToNumber(node.interface_id)
        );
    }
    return nodes[node.node_id];
};

/**
 * save group
 * @param {Object.<number, Group>} groups
 * @param {GroupsWithNodes} node
 * @returns {Group}
 */
const saveGroup = (groups, node) => {
    if (!groups[node.group_id]) {
        groups[node.group_id] = new Group(node.group_id, node.group_caption);
    }
    return groups[node.group_id];
};

/**
 * save user
 * @param {Object.<number, User>} users
 * @param {GroupsWithNodes} node
 * @returns {User}
 */
const saveUser = (users, node) => {
    if (!users[node.user_id]) {
        users[node.user_id] = new User(node.user_id, node.firstname, node.lastname, node.email);
    }
    return users[node.user_id];
};

/**
 * save user
 * @param {Object.<number, Application>} applications
 * @param {GroupsWithNodes} node
 * @returns {Application}
 */
const saveApplication = (applications, node) => {
    if (!applications[node.application_id]) {
        applications[node.application_id] = new Application(node.application_id, node.application_caption);
    }
    return applications[node.application_id];
};

/**
 * @param {Object.<number, Port>} ports
 * @param {GroupsWithNodes} node
 * @returns {Port}
 */
const savePort = (ports, node) => {
    const portId = convertToNumber(node.interface_id);
    if (!ports[portId]) {
        if (portId > 0) {
            ports[portId] = new Port(
                portId,
                node.interface_caption,
                node.interface_status_color,
                node.interface_status_description
            );
        } else {
            ports[portId] = new Port(
                portId,
                'Not found',
                'transparent',
                'Not found'
            )
        }
    }
    return ports[portId];
};


/**
 * normalizing Groups and nodes
 * @param {GroupsWithNodes[]} nodes
 * @returns {NormalizeGroupsWithNodes}
 */
export const nodesNormalize = (nodes) => {
    const meta = {
        groups: {},
        nodes: {},
        applications: {},
        users: {},
        ports: {}
    };

    return nodes.reduce((acc, nd) => {
        // create node
        const node = saveNode(acc.nodes, nd);
        node.saveGroup(nd.group_id);

        // create group
        const group = saveGroup(acc.groups, nd);
        group.saveNode(nd.node_id);

        // create user
        const user = saveUser(acc.users, nd);
        user.saveNode(node.id);

        // create application
        const application = saveApplication(acc.applications, nd);
        application.saveNode(node.id);
        node.saveApplication(application.id);

        //port
        savePort(acc.ports, nd);

        return acc;
    }, meta);
};

/**
 * normalizing metric data
 * @param {MetricResponse[]} metrics
 * @returns {Object.<number, Metric[]>}
 */
export const metricsNormalize = (metrics) => {
    return metrics.reduce((acc, el) => {
        const {node_id, ...metric} = el;
        if (acc[node_id]) {
            acc[node_id].push(metric);
        } else {
            acc[node_id] = [metric];
        }
        return acc;
    }, {});
};