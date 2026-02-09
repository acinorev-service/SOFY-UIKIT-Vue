import type { Meta, StoryFn } from '@storybook/vue3-vite';
import SCarousel from './SCarousel.vue';

export default {
    title: 'SCarousel',
    component: SCarousel,
    argTypes: {
        disabled: {
            control: { type: 'boolean' },
            defaultValue: false,
        }
    },
} as Meta<typeof SCarousel>;

const Template: StoryFn<typeof SCarousel> = (args) => ({
    components: { SCarousel },
    setup() {
        return { args };
    },
    template: `
    <SCarousel v-bind="args">
        
    </SCarousel>
  `,
});

export const DefaultInput: StoryFn<typeof SCarousel> = (args) => ({
    components: { SCarousel },
    setup() {
        return { args };
    },
    template: `
    <SCarousel v-bind="args">
        
    </SCarousel>
  `,
});

export const VariantsButton = Template.bind({});