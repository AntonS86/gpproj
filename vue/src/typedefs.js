/**
 * @typedef {Object} GroupsWithNodes
 * @property {number} group_id
 * @property {string} group_caption
 * @property {number} node_id
 * @property {string} node_caption
 * @property {string} node_status_description
 * @property {string} node_status_color
 * @property {number} application_id
 * @property {string} application_caption
 * @property {number} user_id
 * @property {string} firstname
 * @property {string} lastname
 * @property {string} email
 * @property {number} interface_id
 * @property {string} interface_caption
 * @property {string} interface_status_color
 * @property {string} interface_status_description
 */

/**
 * @typedef {string} DateString - date in format ISO 8601
 */

/**
 * @typedef {Object} MetricResponse
 * @property {number} id
 * @property {number} node_id
 * @property {number} cpu_utilization
 * @property {number} disk_utilization
 * @property {number} memory_utilization
 * @property {DateString} datetime
 */

/**
 * @typedef {Object} Metric
 * @property {number} id
 * @property {number} cpu_utilization
 * @property {number} disk_utilization
 * @property {number} memory_utilization
 * @property {DateString} datetime
 */

/**
 * @typedef {Object} NormalizeGroupsWithNodes
 * @property {Object.<number, Node>} nodes
 * @property {Object.<number, Group>} groups
 * @property {Object.<number, Application>} applications
 */

/**
 * @typedef GroupsAndMetricsPayload
 * @property {Object.<number, Node>} nodes
 * @property {Object.<number, Group>} groups
 * @property {Object.<number, Application>} applications
 * @property {Object.<number, Metric[]>} metrics
 */