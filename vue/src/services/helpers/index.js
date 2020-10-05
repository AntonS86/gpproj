import Node from "../../models/Node";
import Group from "../../models/Group";

/**
 * save node
 * @param {Object.<number, Node>} nodes
 * @param {GroupsWithNodes} node
 * @returns {Node}
 */
const saveNode = (nodes, node) => {
    if (!nodes[node.node_id]) {
        nodes[node.node_id] = new Node(node.node_id, node.node_caption, node.node_status_description, node.node_status_color);
    }
    return nodes[node.node_id];
}

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
}


/**
 * normalizing Groups and nodes
 * @param {GroupsWithNodes[]} nodes
 * @returns {NormalizeGroupsWithNodes}
 */
export const nodesNormalize = (nodes) => {
    const meta = {
        groups: {},
        nodes: {},
        applications: {}
    }

    return nodes.reduce((acc, nd) => {
        const node = saveNode(acc.nodes, nd);
        node.saveGroup(nd.group_id);
        const group = saveGroup(acc.groups, nd);
        group.saveNode(nd.node_id);
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
    }, {})
}