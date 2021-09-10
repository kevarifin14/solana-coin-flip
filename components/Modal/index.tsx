import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import {
  Fragment, ReactNode, useEffect, useState,
} from 'react';
import * as ReactDOM from 'react-dom';

import ConfirmModal, { ConfirmModalProps } from './ConfirmModal';
import Overlay from './Overlay';

export const confirm = (confirmModalProps: Omit<ConfirmModalProps, 'onCancel'>) => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const destroy = () => {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  };

  ReactDOM.render(
    <ConfirmModal {...confirmModalProps} onCancel={destroy} />,
    div,
  );
};

export type ModalProps = {
  open: boolean,
  onClose?: () => void,
  title?: string,
  children?: ReactNode,
  closable?: boolean
};

export default function Modal({
  open, onClose, title, children, closable = true,
}: ModalProps) {
  const handleClose = () => {
    if (closable && onClose) {
      onClose();
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" static className="fixed z-10 inset-0 overflow-y-auto" open={open} onClose={handleClose}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

          <Overlay />

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg p-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full">

              {(closable || title) && (
                <div className="flex justify-between">

                  <h1>{title}</h1>

                  <button
                    onClick={handleClose}
                    className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                </div>
              )}

              <div className="py-4">
                {children}
              </div>

            </div>
          </Transition.Child>

        </div>
      </Dialog>
    </Transition.Root>
  );
}
