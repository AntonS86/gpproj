/**
 * @class Application
 * @property {number} id
 * @property {string} caption
 * @property {Set<number>} nodes
 */
export default class Application {
    /**
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