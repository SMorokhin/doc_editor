import { createRouter, createWebHistory } from 'vue-router';

const moduleRoutesDefinitions = import.meta.glob('~/features/*/routes.js', {
    import: 'default',
    eager: true,
});

export default createRouter({
    history: createWebHistory(),
    routes: Object.values(moduleRoutesDefinitions)
        .reduce((acc, definition) => acc.concat(definition), [{
            path: '',
            name: 'home',
            component: () => import('~/components/DocHome.vue'),
        }]),
});