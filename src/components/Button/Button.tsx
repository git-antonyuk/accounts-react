import { ReactNode } from 'react';
import styles from './Button.module.scss';

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
  children?: ReactNode | ReactNode[],
  /**
   * Additional styles from parent component 
   */
  className?: string
}

const Button = ({
  buttonType = 'primary',
  backgroundColor,
  label,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[styles.btn, styles[`btn--${buttonType}`], className].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label || children}
    </button>
  );
};

export default Button;
