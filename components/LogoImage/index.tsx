import { classNames } from 'utils/tailwind';

type LogoImageProps = {
  className?: string,
};

export default function LogoImage({ className }: LogoImageProps) {
  return (
    <img
      src="/logo.png"
      alt="logo"
      className={classNames('mx-auto', 'w-auto', className)}
    />
  );
}
