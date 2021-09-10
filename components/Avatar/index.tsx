import Image from 'next/image';

import { sizeToDimension, classNames, TailwindSize } from 'utils/tailwind';

type AvatarProps = {
  src: string,
  size?: TailwindSize,
  className?: string,
}

export default function Avatar({ src, size = 'md', className }: AvatarProps) {
  const dimension = sizeToDimension[size];
  const sizeClassName = `h-${dimension} w-${dimension} text-${size}`;

  const avatarClassName = classNames(
    'relative', 'rounded-full', 'overflow-hidden', 'flex', 'items-center',
    sizeClassName,
    className,
  );

  return (
    <div className={avatarClassName}>
      <img src={src} alt={src} />
    </div>
  );
}
