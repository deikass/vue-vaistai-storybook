import Link from './Link.vue'

export default {
    title: 'Link',
    component: Link,
};

export  const Primary = () => ({
    components: {Link},
    template: '<Link />',
});

Primary.storyName = 'Links';
