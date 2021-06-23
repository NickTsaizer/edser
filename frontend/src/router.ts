import Home from "@/components/pages/Home.vue";
import News from "@/components/pages/News.vue";
import AboutUs from "@/components/pages/AboutUs.vue";
import NewPost from "@/components/pages/NewPost.vue";

export function getRoutes() {
    return routes;
}

const routes = [
    {
        path: '/',
        components: {
            default: News,
        },
    },
    {
        path: '/about',
        components: {
            default: AboutUs,
        },
    },
    {
        path: '/admin',
        components: {
            default: NewPost,
        },
    },
]