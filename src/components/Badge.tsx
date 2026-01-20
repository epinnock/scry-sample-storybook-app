import React from 'react';

export interface BadgeProps {
  label: string;
  /** Visual style of the badge */
  variant?: 'neutral' | 'success' | 'warning' | 'danger';
}

export const Badge: React.FC<BadgeProps> = ({ label, variant = 'neutral' }) => {
  const stylesByVariant: Record<NonNullable<BadgeProps['variant']>, React.CSSProperties> = {
    neutral: { backgroundColor: '#e5e7eb', color: '#111827' },
    success: { backgroundColor: '#d1fae5', color: '#065f46' },
    warning: { backgroundColor: '#fef3c7', color: '#92400e' },
    danger: { backgroundColor: '#fee2e2', color: '#991b1b' },
  };

  const style: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '2px 8px',
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 1.6,
    ...stylesByVariant[variant],
  };

  return <span style={style}>{label}</span>;
};

