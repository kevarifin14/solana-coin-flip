import { useState } from 'react';

import Alert from 'components/Alert';
import Button from 'components/Button';

import Modal from '.';

export type ConfirmModalProps = {
  title: string,
  onOk: () => void,
  onCancel: () => void,
  okText?: string,
  cancelText?: string,
}

export default function ConfirmModal({
  title, onOk, onCancel, okText = 'Ok', cancelText = 'Cancel',
}: ConfirmModalProps) {
  const [loading, setLoading] = useState(false);

  const handleOk = async () => {
    setLoading(true);
    await onOk();
    setLoading(false);
    onCancel();
  };

  return (
    <Modal closable={false} open>

      <Alert title={title} type="warning" />

      <div className="grid grid-cols-2 space-x-2">
        <Button type="secondary" onClick={onCancel}>
          {cancelText}
        </Button>

        <Button type="primary" onClick={handleOk} loading={loading}>
          {okText}
        </Button>
      </div>

    </Modal>
  );
}
