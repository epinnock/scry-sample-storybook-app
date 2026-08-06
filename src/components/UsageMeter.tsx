import React from 'react';

export interface UsageMeterProps {
  /** Metric name shown under the dial, for example "API calls" */
  label: string;
  /** Amount consumed so far */
  used: number;
  /** Total allowance for the period */
  limit: number;
  /** Unit suffix rendered next to the numbers */
  unit?: string;
  /** Diameter of the dial in pixels */
  size?: number;
}

const TRACK_COLOR = '#e5e7eb';

function colorForRatio(ratio: number): string {
  if (ratio >= 0.9) return '#dc2626';
  if (ratio >= 0.7) return '#f59e0b';
  return '#007bff';
}

/**
 * A segmented circular quota dial. The ring fills clockwise and shifts from
 * blue to amber to red as the allowance is consumed.
 */
export const UsageMeter: React.FC<UsageMeterProps> = ({
  label,
  used,
  limit,
  unit = '',
  size = 160,
}) => {
  const ratio = limit > 0 ? Math.min(Math.max(used / limit, 0), 1) : 0;
  const color = colorForRatio(ratio);

  const segments = 40;
  const filled = Math.round(ratio * segments);
  const center = size / 2;
  const radius = center - 14;
  const innerRadius = radius - 12;

  const ticks = Array.from({ length: segments }, (_, index) => {
    // Start at the top of the dial and sweep clockwise.
    const angle = (index / segments) * Math.PI * 2 - Math.PI / 2;
    const x1 = center + Math.cos(angle) * innerRadius;
    const y1 = center + Math.sin(angle) * innerRadius;
    const x2 = center + Math.cos(angle) * radius;
    const y2 = center + Math.sin(angle) * radius;
    return (
      <line
        key={index}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={index < filled ? color : TRACK_COLOR}
        strokeWidth={4}
        strokeLinecap="round"
      />
    );
  });

  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        fontFamily: 'system-ui, sans-serif',
        color: '#111827',
      }}
    >
      <svg width={size} height={size} role="img" aria-label={`${label}: ${used} of ${limit}`}>
        {ticks}
        <text
          x={center}
          y={center - 2}
          textAnchor="middle"
          style={{ fontSize: 28, fontWeight: 700, fill: color }}
        >
          {Math.round(ratio * 100)}%
        </text>
        <text
          x={center}
          y={center + 20}
          textAnchor="middle"
          style={{ fontSize: 12, fill: '#6b7280' }}
        >
          {used.toLocaleString()} / {limit.toLocaleString()} {unit}
        </text>
      </svg>
      <div style={{ fontSize: 14, fontWeight: 600 }}>{label}</div>
    </div>
  );
};
