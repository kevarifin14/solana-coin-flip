import Avatar from 'components/Avatar';
import { classNames, TailwindSize } from 'utils/tailwind';

export type MediaObjectProps = {
  title: string,
  src?: string,
  description?: string,
  size?: TailwindSize,
  className?: string,
}

export default function MediaObject({
  title, src, description, size, className,
}: MediaObjectProps) {
  return (
    <div className={classNames('flex items-center space-x-2', className)}>
      <div className="flex-shrink-0">
        <Avatar size={size} src={src} />
      </div>

      <div className="flex flex-col justify-center overflow-hidden">
        <p className={`font-medium text-${size} truncate`}>
          {title}
        </p>
        <p className="text-xs truncate">
          {description}
        </p>
      </div>
    </div>
  );
}
