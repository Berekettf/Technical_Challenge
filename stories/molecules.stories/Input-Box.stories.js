import InputBox from "~/components/molecules/InputBox.vue";

const meta = {
  title: 'Molecules/InputBox',
  component: InputBox,
  tags: ['autodocs'],
  argTypes: {
    iconType: {
      control: {
        type: 'text',
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
    },
    iconClass: {
      control: {
        type: 'text',
      },
    },
    inputType: {
      control: {
        type: 'select',
        options: ['text', 'email', 'password'], // Include input types to choose from
      },
    },
  },
};

export default meta;

// Template function to create a story
const Template = (args) => ({
  components: { InputBox },
  setup() {
    return { args };
  },
  template: '<InputBox v-bind="args" />',
});

// Default Input Box
export const Default = Template.bind({});
Default.args = {
  iconType: "user", // default icon type
  placeholder: "Enter your email", // default placeholder
  iconClass: "fa fa-envelope", // default icon class (FontAwesome example)
  inputType: "email", // default input type
};

// Password Input Box
export const PasswordInput = Template.bind({});
PasswordInput.args = {
  iconType: "lock", // icon type for password
  placeholder: "Enter your password", // password placeholder
  iconClass: "fa fa-lock", // icon class for lock icon
  inputType: "password", // input type for password
};

// Text Input Box
export const TextInput = Template.bind({});
TextInput.args = {
  iconType: "text", // icon type for text input
  placeholder: "Type something...", // text input placeholder
  iconClass: "fa fa-comment", // icon class for text icon
  inputType: "text", // input type for text
};