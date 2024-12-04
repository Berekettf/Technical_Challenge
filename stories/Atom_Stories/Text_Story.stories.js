import Text from "~/components/atoms/Text.vue";

const meta = {
  title: 'Atoms/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    customClass: {
      control: { type: 'text' },
      description: 'Custom CSS classes for additional styling',
    },
    text: {
      control: { type: 'text' },
      description: 'Text content to display',
    },
    ContentText: {
      control: { type: 'text' },
      description: 'Additional text content',
    },
  },
};

export default meta;

export const TextStory = {
  args: {
    text: 'Hello, World!', // Default text
    ContentText: 'This is a sample text.', // Default content text
    customClass: 'text-xl', // Default custom class
  },
  render: (args) => ({
    components: { Text },
    setup() {
      return { args };
    },
    template: '<Text v-bind="args" />',
  }),
};