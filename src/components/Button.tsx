import React from 'react';

interface ButtonProps {
  label: string;
  primary?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, primary, onClick }) => {
  const style: React.CSSProperties = {
    backgroundColor: primary ? '#007bff' : '#ccc',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <button style={style} onClick={onClick}>
      {label}
    </button>
  );
};
