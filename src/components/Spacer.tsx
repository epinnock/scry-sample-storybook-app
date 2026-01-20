import React from 'react';

export interface SpacerProps {
  /** Height in pixels */
  h?: number;
  /** Width in pixels */
  w?: number;
}

/**
 * Simple layout utility used to add whitespace between elements.
 * Intentionally has no Storybook story (to simulate a component without stories).
 */
export const Spacer: React.FC<SpacerProps> = ({ h = 16, w }) => {
  return <div aria-hidden style={{ height: h, width: w }} />;
};

