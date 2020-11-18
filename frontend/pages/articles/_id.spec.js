import { mount } from '@vue/test-utils';
import Article from './_id.vue';

const article = {
    title: 'Test',
    content: 'Testing the component',
    subjects: [],
    resources: [],
};

describe('Article page', () => {
    const wrapper = mount(Article, {
        propsData: {
            article,
        },
    });
    test('Article is rendering a main element', () => {
        expect(wrapper.contains('main')).toBe(true);
    });
});
