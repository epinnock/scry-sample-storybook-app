import React from 'react';
import { Button } from './Button';

export interface BillingFormValues {
  fullName: string;
  email: string;
  cardNumber: string;
  billingCountry: string;
}

export interface BillingFormProps {
  /** Current field values */
  values?: Partial<BillingFormValues>;
  /** Per-field validation messages, keyed by field name */
  errors?: Partial<Record<keyof BillingFormValues, string>>;
  /** Disables every field and the submit button */
  busy?: boolean;
  /** Label for the submit button */
  submitLabel?: string;
  /** Called with the field name and its new value on every edit */
  onChange?: (field: keyof BillingFormValues, value: string) => void;
  /** Called when the form is submitted */
  onSubmit?: () => void;
}

const FIELDS: Array<{ name: keyof BillingFormValues; label: string; placeholder: string }> = [
  { name: 'fullName', label: 'Full name', placeholder: 'Ada Lovelace' },
  { name: 'email', label: 'Email', placeholder: 'ada@example.com' },
  { name: 'cardNumber', label: 'Card number', placeholder: '4242 4242 4242 4242' },
  { name: 'billingCountry', label: 'Billing country', placeholder: 'United States' },
];

/**
 * Stacked billing details form with inline validation messages.
 * Fully controlled: pass `values` and handle `onChange`.
 */
export const BillingForm: React.FC<BillingFormProps> = ({
  values = {},
  errors = {},
  busy = false,
  submitLabel = 'Save billing details',
  onChange,
  onSubmit,
}) => {
  const labelStyle: React.CSSProperties = {
    fontSize: 13,
    fontWeight: 600,
    color: '#374151',
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit?.();
      }}
      style={{
        display: 'grid',
        gap: 16,
        width: 360,
        fontFamily: 'system-ui, sans-serif',
        color: '#111827',
      }}
    >
      {FIELDS.map((field) => {
        const error = errors[field.name];
        return (
          <label key={field.name} style={{ display: 'grid', gap: 6 }}>
            <span style={labelStyle}>{field.label}</span>
            <input
              value={values[field.name] ?? ''}
              placeholder={field.placeholder}
              disabled={busy}
              onChange={(event) => onChange?.(field.name, event.target.value)}
              style={{
                padding: '10px 12px',
                fontSize: 14,
                borderRadius: 6,
                border: `1px solid ${error ? '#dc2626' : '#d1d5db'}`,
                outline: 'none',
                backgroundColor: busy ? '#f9fafb' : '#fff',
              }}
            />
            {error && <span style={{ fontSize: 12, color: '#dc2626' }}>{error}</span>}
          </label>
        );
      })}

      <Button label={busy ? 'Saving…' : submitLabel} primary onClick={onSubmit} />
    </form>
  );
};
