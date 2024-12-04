import EmailSignUPForm from "~/components/organisms/EmailSignUPForm.vue";

export default {
  title: 'Organisms/EmailSignUpForm',
  component: EmailSignUPForm,
  tags: ['autodocs'],
  argTypes: {
    namePlaceholder: {
      control: { type: 'text' },
      description: 'Placeholder for the name input field',
      defaultValue: 'Name',
    },
    surnamePlaceholder: {
      control: { type: 'text' },
      description: 'Placeholder for the surname input field',
      defaultValue: 'Surname',
    },
    emailPlaceholder: {
      control: { type: 'text' },
      description: 'Placeholder for the email input field',
      defaultValue: 'test@gmail.com',
    },
    passwordPlaceholder: {
      control: { type: 'text' },
      description: 'Placeholder for the password input field',
      defaultValue: 'Password',
    },
    confirmPasswordPlaceholder: {
      control: { type: 'text' },
      description: 'Placeholder for the confirm password input field',
      defaultValue: 'Confirm password',
    },
    buttonText: {
      control: { type: 'text' },
      description: 'Text for the action button',
      defaultValue: 'Enter',
    },
    termsText: {
      control: { type: 'text' },
      description: 'Text for the Terms & Conditions',
      defaultValue: 'Terms & Conditions',
    },
    isLoading: {
      control: { type: 'boolean' },
      description: 'Loading state for the form',
      defaultValue: false,
    },
    hasError: {
      control: { type: 'boolean' },
      description: 'Displays error state',
      defaultValue: false,
    },
    hasSuccess: {
      control: { type: 'boolean' },
      description: 'Displays success state after form submission',
      defaultValue: false,
    },
  },
};

const Template = (args) => ({
  components: { EmailSignUPForm },
  setup() {
    return { args };
  },
  template: '<EmailSignUPForm v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  namePlaceholder: 'Name',
  surnamePlaceholder: 'Surname',
  emailPlaceholder: 'test@gmail.com',
  passwordPlaceholder: 'Password',
  confirmPasswordPlaceholder: 'Confirm password',
  buttonText: 'Enter',
  termsText: 'Terms & Conditions',
  isLoading: false,
  hasError: false,
  hasSuccess: false,
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  ...Default.args,
  buttonText: 'Loading...',
  isLoading: true,
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  ...Default.args,
  hasError: true,
};

export const SuccessState = Template.bind({});
SuccessState.args = {
  ...Default.args,
  hasSuccess: true,
};