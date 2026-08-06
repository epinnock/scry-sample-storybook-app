import type { Meta, StoryObj } from '@storybook/react';
import { UsageMeter } from './UsageMeter';

const meta: Meta<typeof UsageMeter> = {
  title: 'Components/UsageMeter',
  component: UsageMeter,
  args: {
    label: 'API calls',
    used: 18_400,
    limit: 50_000,
    unit: 'calls',
    size: 160,
  },
};

export default meta;
type Story = StoryObj<typeof UsageMeter>;

export const Healthy: Story = {};

export const Warning: Story = {
  args: {
    used: 39_000,
    limit: 50_000,
  },
};

export const NearLimit: Story = {
  args: {
    label: 'Storage',
    used: 47_500,
    limit: 50_000,
    unit: 'MB',
  },
};

export const Dashboard: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 32, padding: 24 }}>
      <UsageMeter label="API calls" used={18_400} limit={50_000} unit="calls" />
      <UsageMeter label="Seats" used={7} limit={10} unit="seats" />
      <UsageMeter label="Storage" used={47_500} limit={50_000} unit="MB" />
    </div>
  ),
};
