import {
  CheckCircleIcon, ExclamationIcon, InformationCircleIcon, XCircleIcon,
} from '@heroicons/react/solid';

export type TailwindSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type IAlert = 'success' | 'info' | 'error' | 'warning';

export const classNames = (...classes) => classes.filter(Boolean).join(' ');

export const alertColors = (type: IAlert) => {
  switch (type) {
    case 'success':
      return {
        icon: <CheckCircleIcon className="h-8 w-8 text-green-400" aria-hidden="true" />,
      };
    case 'info':
      return {
        icon: <InformationCircleIcon className="h-8 w-8 text-blue-400" aria-hidden="true" />,
      };
    case 'error':
      return {
        icon: <XCircleIcon className="h-8 w-8 text-red-400" aria-hidden="true" />,
      };
    case 'warning':
      return {
        icon: <ExclamationIcon className="h-8 w-8 text-yellow-400" aria-hidden="true" />,
      };
    default:
      return {
        icon: <InformationCircleIcon className="h-8 w-8 text-blue-400" aria-hidden="true" />,
      };
  }
};

export const sizeToDimension = {
  xs: 6,
  sm: 8,
  md: 10,
  lg: 12,
  xl: 16,
  '2xl': 20,
  '3xl': 24,
  '4xl': 28,
};
