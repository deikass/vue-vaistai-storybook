import Title from './Title.vue'

export default {
    title: 'Title',
    component: Title,
};

export const Primary = () => ({
    components: {Title},
    template: '<Title />',
});
