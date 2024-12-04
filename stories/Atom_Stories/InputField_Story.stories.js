import InputField from "~/components/atoms/InputField.vue";

const meta = {
  title: 'Atoms/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    maxlength: {
      control: { type: 'number' },
      description: 'Maximum number of characters allowed in the input',
    },
    type: {
      control: { type: 'text' },
      description: 'Type of the input field (e.g., text, password)',
    },
    autocomplete: {
      control: { type: 'text' },
      description: 'Autocompletion behavior for the input',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the input field',
    },
    customClass: {
      control: { type: 'text' },
      description: 'Custom CSS classes for additional styling',
    },
  },
};

export default meta;

export const InputFieldStory = {
  args: {
    maxlength: 100, // Default max length
    type: 'text', // Default type
    autocomplete: 'off', // Default autocomplete
    placeholder: 'Enter your text...', // Default placeholder
    customClass: 'border rounded-md p-2', // Example custom class for styling
  },
  render: (args) => ({
    components: { InputField },
    setup() {
      return { args };
    },
    template: '<InputField v-bind="args" />',
  }),
};