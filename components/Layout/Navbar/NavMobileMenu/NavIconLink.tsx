import Link from 'next/link';

type NavIconLinkProps = {
  href: string,
  title: string,
  icon?: any,
}

export default function NavIconLink({ href, title, icon }: NavIconLinkProps) {
  return (
    <Link href={href}>
      <a className="-m-3 flex items-center p-3 rounded-lg hover:bg-light-200 no-underline">

        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 text-white sm:h-12 sm:w-12">
          {icon({ className: 'text-white h-5 w-5' })}
        </div>

        <div className="ml-3 text-base font-medium text-gray-900">
          {title}
        </div>

      </a>
    </Link>
  );
}
