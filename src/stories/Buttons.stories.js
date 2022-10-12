import Button from "./Buttons.vue";
import Overlay from "./Overlay.vue";

export default {
    title: 'Buttons',
    component: Button,
};

export const Primary = () => ({
    components: {Button},
    template: '<Button /><Button variant="blue"/><Button variant="only-icon"/>'
})
Primary.storyName = 'All Buttons';

export const All = () => ({
    components: {Button, Overlay},
    template: '' +
        '<Overlay title="Default"><Button /></Overlay>' +
        '<Overlay title="Blue"><Button variant="blue" /></Overlay>' +
        '<Overlay title="Only Icon"><Button variant="only-icon" /></Overlay>'
})
All.storyName = 'All Buttons Overlay';

export const Default = () => ({
    components: {Button},
    template: '<Button />'
})

export const Blue = () => ({
    components: {Button},
    template: '<Button variant="blue"/>'
})

export const OnlyIcon = () => ({
    components: {Button},
    template: '<Button variant="only-icon"/>'
})
