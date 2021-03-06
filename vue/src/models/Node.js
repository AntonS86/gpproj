/**
 * @class Node
 * @property {number} id
 * @property {string} caption
 * @property {string} statusDescription
 * @property {string} statusColor
 * @property {number} userId
 * @property {Set<number>} groups
 * @property {Set<number>} applications
 * @property {number} portId
 */
export default class Node {
    /**
     *
     * @param {number} id
     * @param {string} caption
     * @param {string} statusDescription
     * @param {string} statusColor
     * @param {number} userId
     * @param {number} portId
     */
    constructor(id, caption, statusDescription, statusColor, userId, portId) {
        this.id = id;
        this.caption = caption;
        this.statusDescription = statusDescription;
        this.statusColor = statusColor;
        this.userId = userId;
        this.groups = new Set();
        this.applications = new Set();
        this.portId = portId;
    }

    /**
     * save group id
     * @param {number} id - id group
     */
    saveGroup(id) {
        if (this.groups.has(id)) return;
        this.groups.add(id);
    }

    /**
     * save group id
     * @param {number} id - id application
     */
    saveApplication(id) {
        if (this.applications.has(id)) return;
        this.applications.add(id);
    }
}