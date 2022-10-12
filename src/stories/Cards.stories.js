import Card from "./Card.vue";

export default {
    title: 'Card',
    component: Card,
};

export const Primary = () => ({
    components: {Card},
    template: '<Card />'
})
