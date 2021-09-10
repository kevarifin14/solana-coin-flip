import { ExclamationIcon } from '@heroicons/react/solid';

import { alertColors, IAlert } from 'utils/tailwind';

type AlertProps = {
  title: string,
  description?: string,
  type?: IAlert,
};

export default function Alert({ title, description, type = 'info' }: AlertProps) {
  const { icon } = alertColors(type);

  return (
    <div className="p-4">
      <div className="flex">

        <div className="flex-shrink-0 flex items-center">
          {icon}
        </div>

        <div className="ml-3">

          <h3 className="font-medium">{title}</h3>

          {description && (
            <div className="mt-2">
              <p>
                {description}
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
