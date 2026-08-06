import React from 'react';
import { Badge } from './Badge';
import { Button } from './Button';

export interface PricingCardProps {
  /** Name of the plan, for example "Pro" */
  planName: string;
  /** Formatted price, for example "$29" */
  price: string;
  /** Billing period shown next to the price */
  period?: string;
  /** Short line describing who the plan is for */
  tagline?: string;
  /** Feature bullets listed under the price */
  features?: string[];
  /** Highlights this card as the recommended tier */
  recommended?: boolean;
  /** Label for the call-to-action button */
  ctaLabel?: string;
  /** Called when the call-to-action button is pressed */
  onSelect?: (() => void) | undefined;
}

/**
 * A single pricing tier. Set `recommended` to highlight it as the
 * suggested plan inside a row of tiers.
 */
export const PricingCard: React.FC<PricingCardProps> = ({
  planName,
  price,
  period = '/month',
  tagline,
  features = [],
  recommended = false,
  ctaLabel = 'Choose plan',
  onSelect,
}) => {
  const style: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    width: 260,
    padding: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
    border: recommended ? '2px solid #007bff' : '1px solid #e5e7eb',
    boxShadow: recommended
      ? '0 12px 24px rgba(0, 123, 255, 0.16)'
      : '0 1px 2px rgba(17, 24, 39, 0.06)',
    fontFamily: 'system-ui, sans-serif',
    color: '#111827',
  };

  return (
    <div style={style}>
      {recommended && (
        <div style={{ position: 'absolute', top: -12, left: 24 }}>
          <Badge label="Recommended" variant="success" />
        </div>
      )}

      <div style={{ fontSize: 14, fontWeight: 600, color: '#6b7280' }}>{planName}</div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
        <span style={{ fontSize: 36, fontWeight: 700 }}>{price}</span>
        <span style={{ fontSize: 14, color: '#6b7280' }}>{period}</span>
      </div>

      {tagline && <div style={{ fontSize: 13, color: '#6b7280' }}>{tagline}</div>}

      {features.length > 0 && (
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 8 }}>
          {features.map((feature) => (
            <li key={feature} style={{ display: 'flex', gap: 8, fontSize: 14 }}>
              <span style={{ color: '#10b981', fontWeight: 700 }}>✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <div style={{ marginTop: 'auto', paddingTop: 8 }}>
        <Button label={ctaLabel} primary={recommended} onClick={onSelect} />
      </div>
    </div>
  );
};
