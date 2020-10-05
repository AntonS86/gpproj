import store from "../store";
import home from "../pages/home";
import notFound from "../pages/notFound";
import group from "../pages/group";


const routes = [

    /**
     * @router home
     * path /
     */
    {
        path: "/",
        name: "Home",
        component: home
    },

    /**
     * @router group
     * path /group/5
     */
    {
        path: "/group/:id",
        name: "group",
        component: group,
        props: (router) => {
            return {
                groupId: +router.params.id,
            }
        },
        /**
         * route protection
         * @param to
         * @param from
         * @param next
         * @returns {*}
         */
        beforeEnter(to, from, next) {
            const id = +to.params.id;
            if (store.getters.isGroupById(id)) return next();
            return next({name: "404"});
        }
    },

    /**
     * @router node
     * path /node/5
     */
    {
        path: "/node/:id",
        name: "node",
        component: home
    },
    /**
     * @router 404
     * path /not-found
     */
    {
        path: "/not-found",
        name: "404",
        component: notFound
    },
    /**
     * redirect all routes
     */
    {
        path: "*",
        redirect: "404",
    }
];

export default {
    routes,
    linkActiveClass: "active",
    mode: "history"
};