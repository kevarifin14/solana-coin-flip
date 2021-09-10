import {
  FC, forwardRef, MouseEventHandler, ReactElement, ReactNode,
} from 'react';

import Spin from 'components/Spin';

export type ButtonProps = {
  type: 'primary' | 'secondary',
  children: ReactNode,
  htmlType?: 'submit' | 'button',
  className?: string,
  loading?: boolean,
  disabled?: boolean,
  size?: 'lg',
  onClick?: MouseEventHandler<HTMLButtonElement>,
  block?: boolean,
  icon?: ReactElement,
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((
  {
    type, children, htmlType = 'button', className, loading, disabled, onClick, block, size, icon,
  },
  ref,
) => {
  const primaryClassName = 'text-white bg-primary-600 border-primary-600 hover:bg-primary-700 hover:border-primary-700 focus:outline-none';
  const secondaryClassName = 'text-primary-700 bg-primary-100 border-primary-100 hover:bg-primary-200 hover:border-primary-200 focus:outline-none';

  const disabledClassName = 'opacity-50';
  const blockClassName = 'w-full';

  const buttonClassName = [
    'inline-flex', 'items-center', 'justify-center', 'border',
    'rounded-md', 'shadow-sm', 'focus:outline-none', 'font-medium',
    type === 'primary' ? primaryClassName : '',
    type === 'secondary' ? secondaryClassName : '',
    loading || disabled ? disabledClassName : '',
    block ? blockClassName : '',
    size === 'lg' ? 'px-5 py-3 text-lg' : 'px-4 py-2',
    className,
  ].join(' ');

  return (
    <button
      ref={ref}
      type={htmlType}
      className={buttonClassName}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {icon && (
        <div className="-ml-0.5 mr-2">
          {icon}
        </div>
      )}

      {loading
        && (
          <Spin />
        )}
      {children}
    </button>
  );
});

export default Button;
