import {
    shallowMount,
    mount,
    createLocalVue,
    RouterLinkStub,
} from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import SubjectLink from '@/components/ArticlePage/SubjectLink';
import Resource from '@/components/ArticlePage/Resource';
import Article from './_id.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);

describe('/articles/_id.vue', () => {
    let store, state, routes, router;
    beforeEach(() => {
        state = {
            list: [
                {
                    id: 1,
                    title: 'Title',
                    subjects: [
                        { id: 1, title: 'Sub1' },
                        { id: 2, title: 'Sub2' },
                    ],
                    resources: [
                        { id: 1, link: '' },
                        { id: 2, link: '' },
                        { id: 3, link: '' },
                    ],
                    content: 'Content',
                },
            ],
        };
        store = new Vuex.Store({
            modules: {
                articles: {
                    state,
                    namespaced: true,
                },
            },
        });
        routes = [{ params: { id: 1 }, path: '/articles/1' }];
        router = new VueRouter({ routes });
    });

    it('renders a main on the page', () => {
        const wrapper = shallowMount(Article, {
            store,
            router,
            localVue,
            stubs: {
                NuxtLink: RouterLinkStub,
            },
            data: () => {
                return {
                    id: 1,
                };
            },
        });
        expect(wrapper.get('article')).toBeTruthy();
    });
    it('renders a title', () => {
        const wrapper = shallowMount(Article, {
            store,
            router,
            localVue,
            stubs: {
                NuxtLink: RouterLinkStub,
            },
            data: () => {
                return {
                    id: 1,
                };
            },
        });
        const h1 = wrapper.get('h1');
        expect(h1.text()).toBe(state.list[0].title);
    });
    it('renders a list of SubjectLinks', () => {
        const wrapper = mount(Article, {
            store,
            router,
            localVue,
            stubs: {
                NuxtLink: RouterLinkStub,
            },
            data: () => {
                return {
                    id: 1,
                };
            },
        });
        const subjects = wrapper.findAllComponents(SubjectLink);
        // console.log(subjects);
        expect(subjects).toHaveLength(2);
    });
    it('renders a list of Resources', () => {
        const wrapper = mount(Article, {
            store,
            router,
            localVue,
            stubs: {
                NuxtLink: RouterLinkStub,
            },
            data: () => {
                return {
                    id: 1,
                };
            },
        });
        const resources = wrapper.findAllComponents(Resource);
        expect(resources).toHaveLength(3);
    });
});
