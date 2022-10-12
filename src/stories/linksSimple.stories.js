import LinkSimple from './LinkSimple.vue'

export default {
    title: 'Links simple',
    component: LinkSimple,
};

export  const Primary = () => ({
    components: {LinkSimple},
    template: '<LinkSimple />',
});

Primary.storyName = 'Links';
