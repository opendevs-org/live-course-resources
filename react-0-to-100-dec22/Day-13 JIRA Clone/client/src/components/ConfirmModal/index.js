import React, { Fragment, useState } from "react"
import { StyledConfirmModal, Title, Message, Actions, StyledButton } from "./styles"

const ConfirmModal = ({
  className,
  variant = "primary",
  title = "Warning",
  message = "Are you sure you want to continue with this action?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  renderLink,
}) => {
  const [isWorking, setWorking] = useState(false)

  const handleConfirm = (modal) => {
    setWorking(true)
    onConfirm({
      close: () => {
        modal.close()
        setWorking(false)
      },
    })
  }

  return (
    <StyledConfirmModal
      className={className}
      testid="modal:confirm"
      withCloseIcon={false}
      renderLink={renderLink}
      renderContent={(modal) => (
        <Fragment>
          <Title>{title}</Title>
          {message && <Message>{message}</Message>}
          <Actions>
            <StyledButton
              variant={variant}
              isWorking={isWorking}
              onClick={() => handleConfirm(modal)}
            >
              {confirmText}
            </StyledButton>
            <StyledButton hollow onClick={modal.close}>
              {cancelText}
            </StyledButton>
          </Actions>
        </Fragment>
      )}
    />
  )
}

export { ConfirmModal }
