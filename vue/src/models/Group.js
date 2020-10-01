/**
 * @class Group
 */
export default class Group {
    /**
     *
     * @param {number} id
     * @param {string} caption
     */
    constructor(id, caption) {
        this.id = id;
        this.caption = caption;
        this.nodes = new Set();
    }

    /**
     *
     * @param {number} id - id node
     */
    saveNode(id) {
        if (this.nodes.has(id)) return;
        this.nodes.add(id);
    }
}