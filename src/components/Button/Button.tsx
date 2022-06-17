import { ReactNode } from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  buttonType?: 'primary' | 'danger' | 'secondary'
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Button contents
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * React component
   */
  children?: ReactNode
}

const Button = ({
  buttonType = 'primary',
  backgroundColor,
  label,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[styles.btn, styles[`btn--${buttonType}`]].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label || children}
    </button>
  );
};

export default Button;
