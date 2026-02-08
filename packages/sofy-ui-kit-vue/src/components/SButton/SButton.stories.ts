import type { Meta, StoryFn } from "@storybook/vue3-vite";
import SButton from "./SButton.vue";

export default {
    title: "SButton",
    component: SButton,
    argTypes: {
        disabled: {
            control: { type: "boolean" },
            defaultValue: false,
        },
        variant: {
            control: { type: "radio" },
            options: ["solid", "outline", "borderless"],
            defaultValue: "solid",
        },
    },
} as Meta<typeof SButton>;

const Template: StoryFn<typeof SButton> = (args) => ({
    components: { SButton },
    setup() {
        return { args };
    },
    template: `
    <div style="display: flex; flex-direction: row; gap: 12px;">
      <SButton v-bind="args" variant="solid">Button</SButton>
      <SButton v-bind="args" variant="outline">Button</SButton>
      <SButton v-bind="args" variant="borderless">Button</SButton>
    </div>
    `,
});

export const DefaultButton: StoryFn<typeof SButton> = (args) => ({
    components: { SButton },
    setup() {
        return { args };
    },
    template: '<SButton v-bind="args">Button</Button>',
});

export const VariantsButton = Template.bind({});
