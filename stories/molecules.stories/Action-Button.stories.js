import ActionButton from "~/components/molecules/ActionButton.vue";

const meta = {
  title: 'Molecules/ActionButton',
  component: ActionButton,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'The text displayed on the button.',
      defaultValue: 'Click Me',
    },
  },
};

export default meta;

const Template = (args) => ({
  components: { ActionButton },
  setup() {
    return { args };
  },
  template: '<ActionButton v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  text: 'Click Me',
};

export const WithLongText = Template.bind({});
WithLongText.args = {
  text: 'This is a longer text for the action button',
};

export const WithDifferentColor = Template.bind({});
WithDifferentColor.args = {
  text: 'Action Button with Gradient',
};