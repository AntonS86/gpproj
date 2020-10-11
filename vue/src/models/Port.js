/**
 * @class Port
 * @property {number} id
 * @property {string} caption
 * @property {string} statusColor
 * @property {string} statusDescription
 */
export default class Port {
    /**
     *
     * @param {number} id
     * @param {string} caption
     * @param {string} statusColor
     * @param {string} statusDescription
     */
    constructor(id, caption, statusColor, statusDescription) {
        this.id = id;
        this.caption = caption;
        this.statusDescription = statusDescription;
        this.statusColor = statusColor;
    }
}