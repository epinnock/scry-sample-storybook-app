import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from './Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', height: 420, backgroundColor: '#f3f4f6' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    open: true,
    title: 'Confirm upgrade',
    description: 'Your card will be charged today and every month after.',
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    children: 'You are switching from Starter to Pro.',
  },
};

export const WithActions: Story = {
  args: {
    children: 'You are switching from Starter to Pro.',
    footer: (
      <>
        <Button label="Cancel" />
        <Button label="Confirm upgrade" primary />
      </>
    ),
  },
};

export const TitleOnly: Story = {
  args: {
    title: 'Session expired',
    description: undefined,
    children: undefined,
    footer: <Button label="Sign in again" primary />,
  },
};
