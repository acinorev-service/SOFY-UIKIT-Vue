import type { Meta, StoryFn } from "@storybook/vue3-vite";
import SInput from "./SInput.vue";

export default {
    title: "SInput",
    component: SInput,
    argTypes: {
        disabled: {
            control: { type: "boolean" },
            defaultValue: false,
        },
        variant: {
            control: { type: "radio" },
            options: ["solid", "outline"],
            defaultValue: "solid",
        },
    },
} as Meta<typeof SInput>;

const Template: StoryFn<typeof SInput> = (args) => ({
    components: { SInput },
    setup() {
        return { args };
    },
    template: `
    <div style="display: flex; flex-direction: row; gap: 12px;">
      <SInput v-bind="args" variant="solid"/>
      <SInput v-bind="args" variant="outline"/>
      <SInput v-bind="args" variant="borderless"/>
    </div>
  `,
});

export const DefaultInput: StoryFn<typeof SInput> = (args) => ({
    components: { SInput },
    setup() {
        return { args };
    },
    template: '<SInput v-bind="args"/>',
});

export const VariantsButton = Template.bind({});
