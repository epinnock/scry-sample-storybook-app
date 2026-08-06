import React from 'react';

export interface ModalProps {
  /** Controls visibility. The modal renders nothing when false. */
  open: boolean;
  /** Heading shown at the top of the dialog */
  title: string;
  /** Optional supporting line under the title */
  description?: string;
  /** Dialog body */
  children?: React.ReactNode;
  /** Footer content, normally action buttons */
  footer?: React.ReactNode;
  /** Called when the close control or the backdrop is pressed */
  onClose?: () => void;
}

/**
 * A centered dialog with a dimmed backdrop. Compose actions into `footer`
 * rather than hard-coding buttons inside the dialog.
 */
export const Modal: React.FC<ModalProps> = ({
  open,
  title,
  description,
  children,
  footer,
  onClose,
}) => {
  if (!open) return null;

  const backdropStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(17, 24, 39, 0.55)',
    fontFamily: 'system-ui, sans-serif',
  };

  const dialogStyle: React.CSSProperties = {
    width: 420,
    maxWidth: '90%',
    padding: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
    boxShadow: '0 24px 48px rgba(17, 24, 39, 0.24)',
    color: '#111827',
  };

  return (
    <div style={backdropStyle} onClick={onClose} role="presentation">
      <div
        style={dialogStyle}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>{title}</h2>
            {description && (
              <p style={{ margin: '6px 0 0', fontSize: 14, color: '#6b7280' }}>{description}</p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              fontSize: 20,
              lineHeight: 1,
              color: '#6b7280',
            }}
          >
            ×
          </button>
        </div>

        {children && <div style={{ marginTop: 16, fontSize: 14 }}>{children}</div>}

        {footer && (
          <div
            style={{
              marginTop: 24,
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 8,
            }}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
