import { Overlay, Modal, Message, Buttons, ConfirmBtn, CancelBtn } from './ConfirmModal.styled';

const ConfirmModal = ({ message, onConfirm, onCancel }) => {
  return (
    <Overlay onClick={onCancel}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Message>{message}</Message>
        <Buttons>
          <ConfirmBtn onClick={onConfirm}>Да, удалить</ConfirmBtn>
          <CancelBtn onClick={onCancel}>Нет, оставить</CancelBtn>
        </Buttons>
      </Modal>
    </Overlay>
  );
};

export default ConfirmModal;