/**
 * @class User
 * @property {number} id
 * @property {string} firstname
 * @property {string} lastname
 * @property {string} email
 * @property {Set<number>} nodes
 */
export default class User {
    /**
     *
     * @param {number} id
     * @param {string} firstname
     * @param {string} lastname
     * @param {string} email
     */
    constructor(id, firstname, lastname, email) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.nodes = new Set();
    }

    /**
     * save node id
     * @param {number} id - id node
     */
    saveNode(id) {
        if (this.nodes.has(id)) return;
        this.nodes.add(id);
    }
}