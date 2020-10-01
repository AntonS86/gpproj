/**
 * port
 * @type {number}
 */
const port = 23456;

module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            return {};
        } else {
            return {
                devServer  : {
                    inline : true,
                    proxy: {
                        "/api": {
                            target: `http://127.0.0.1:${port}`,

                        }
                    },
                    overlay: {
                        warnings: true,
                        errors  : true
                    }
                },

            }
        }
    }
}