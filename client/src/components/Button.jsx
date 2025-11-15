import React from 'react';
import classNames from 'classnames';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className,
  onClick,
  ...props
}) => {
  const buttonClass = classNames(
    `btn-${variant}`,
    `btn-${size}`,
    { 'btn-disabled': disabled },
    className
  );

  return (
    <button
      className={buttonClass}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
