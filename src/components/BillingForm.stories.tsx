import type { Meta, StoryObj } from '@storybook/react';
import { BillingForm } from './BillingForm';

const meta: Meta<typeof BillingForm> = {
  title: 'Components/BillingForm',
  component: BillingForm,
  args: {
    values: {},
    errors: {},
    busy: false,
    submitLabel: 'Save billing details',
  },
};

export default meta;
type Story = StoryObj<typeof BillingForm>;

export const Empty: Story = {};

export const Filled: Story = {
  args: {
    values: {
      fullName: 'Ada Lovelace',
      email: 'ada@example.com',
      cardNumber: '4242 4242 4242 4242',
      billingCountry: 'United Kingdom',
    },
  },
};

export const WithErrors: Story = {
  args: {
    values: {
      fullName: 'Ada Lovelace',
      email: 'ada@example',
      cardNumber: '4242',
      billingCountry: '',
    },
    errors: {
      email: 'Enter a valid email address.',
      cardNumber: 'Card number must be 16 digits.',
      billingCountry: 'Billing country is required.',
    },
  },
};

export const Busy: Story = {
  args: {
    values: {
      fullName: 'Ada Lovelace',
      email: 'ada@example.com',
      cardNumber: '4242 4242 4242 4242',
      billingCountry: 'United Kingdom',
    },
    busy: true,
  },
};
