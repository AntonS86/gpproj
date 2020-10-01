/**
 * @class Node
 */
export default class Node {
    /**
     *
     * @param {number} id
     * @param {string} caption
     * @param {string} statusDescription
     * @param {string} statusColor
     */
    constructor(id, caption, statusDescription, statusColor) {
        this.id = id;
        this.caption = caption;
        this.statusDescription = statusDescription;
        this.statusColor = statusColor;
        this.userId = null;
        this.groups = new Set();
    }

    /**
     *
     * @param {number} id - id group
     */
    saveGroup(id) {
        if (this.groups.has(id)) return;
        this.groups.add(id);
    }
}