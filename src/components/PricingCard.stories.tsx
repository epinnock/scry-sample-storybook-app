import type { Meta, StoryObj } from '@storybook/react';
import { PricingCard } from './PricingCard';

const meta: Meta<typeof PricingCard> = {
  title: 'Components/PricingCard',
  component: PricingCard,
  args: {
    planName: 'Starter',
    price: '$0',
    period: '/month',
    tagline: 'For side projects and evaluation.',
    features: ['1 project', '5k API calls', 'Community support'],
    recommended: false,
    ctaLabel: 'Choose plan',
  },
};

export default meta;
type Story = StoryObj<typeof PricingCard>;

export const Starter: Story = {};

export const Recommended: Story = {
  args: {
    planName: 'Pro',
    price: '$29',
    tagline: 'For teams shipping to production.',
    features: ['Unlimited projects', '500k API calls', 'Priority support', 'SSO'],
    recommended: true,
    ctaLabel: 'Upgrade to Pro',
  },
};

export const Enterprise: Story = {
  args: {
    planName: 'Enterprise',
    price: 'Custom',
    period: '',
    tagline: 'For organizations with compliance needs.',
    features: ['Dedicated capacity', 'SAML and SCIM', 'Audit logs', '99.9% SLA'],
    ctaLabel: 'Contact sales',
  },
};

export const TierRow: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'stretch', padding: 24 }}>
      <PricingCard
        planName="Starter"
        price="$0"
        tagline="For side projects and evaluation."
        features={['1 project', '5k API calls', 'Community support']}
      />
      <PricingCard
        planName="Pro"
        price="$29"
        tagline="For teams shipping to production."
        features={['Unlimited projects', '500k API calls', 'Priority support', 'SSO']}
        recommended
        ctaLabel="Upgrade to Pro"
      />
      <PricingCard
        planName="Enterprise"
        price="Custom"
        period=""
        tagline="For organizations with compliance needs."
        features={['Dedicated capacity', 'SAML and SCIM', 'Audit logs', '99.9% SLA']}
        ctaLabel="Contact sales"
      />
    </div>
  ),
};
