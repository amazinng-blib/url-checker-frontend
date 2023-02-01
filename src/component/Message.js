import React from 'react';

const colors = {
  primary: '#4285F4',
  info: '#0099CC',
  success: 'rgb(32, 177, 32)',
  warning: '#FF8800',
  danger: '#CC0000',
  dark: '#343a40',
};

const Message = ({
  children,
  variant,
  id,
  width,
  noBackground = false,
  noFlex = false,
  margin = 'auto',
}) => {
  return (
    <div
      id={id}
      style={{
        backgroundColor: noBackground
          ? ''
          : colors[variant]
          ? colors[variant]
          : colors.primary,
        width: width ? width : '80%',
        color: 'white',
        margin,
        marginTop: '1rem',
        borderRadius: '0.2rem',
        display: noFlex ? 'block' : 'flex',
        justifyContent: noFlex ? '' : 'center',
        alignItems: noFlex ? '' : 'center',
        padding: '0.2rem 0.5rem',
        fontSize: '1.3rem',
      }}
    >
      {' '}
      {children}
    </div>
  );
};

export default Message;
