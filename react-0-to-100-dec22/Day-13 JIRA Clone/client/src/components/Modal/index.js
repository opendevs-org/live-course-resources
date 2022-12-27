import React, { Fragment, useState, useRef, useEffect, useCallback } from "react"
import ReactDOM from "react-dom"
import { useOnOutsideClick } from "../../hooks/onOutsideClick"
import { useOnEscapeKeyDown } from "../../hooks/onEscapeKeyDown"
import { ScrollOverlay, ClickableOverlay, StyledModal, CloseIcon } from "./styles"

const Modal = ({
  className,
  testid = "modal",
  variant = "center",
  width = 600,
  withCloseIcon = true,
  isOpen: propsIsOpen,
  onClose: tellParentToClose,
  renderLink,
  renderContent,
}) => {
  const [stateIsOpen, setStateOpen] = useState(false)
  const isControlled = typeof propsIsOpen === "boolean"
  const isOpen = isControlled ? propsIsOpen : stateIsOpen

  const $modalRef = useRef()
  const $clickableOverlayRef = useRef()

  const closeModal = useCallback(() => {
    if (!isControlled) {
      setStateOpen(false)
    } else {
      tellParentToClose()
    }
  }, [isControlled, tellParentToClose])

  useOnOutsideClick($modalRef, isOpen, closeModal, $clickableOverlayRef)
  useOnEscapeKeyDown(isOpen, closeModal)

  useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "visible"
    }
  }, [isOpen])

  return (
    <Fragment>
      {!isControlled && renderLink({ open: () => setStateOpen(true) })}
      {isOpen &&
        ReactDOM.createPortal(
          <ScrollOverlay>
            <ClickableOverlay variant={variant} ref={$clickableOverlayRef}>
              <StyledModal
                className={className}
                variant={variant}
                width={width}
                data-testid={testid}
                ref={$modalRef}
              >
                {withCloseIcon && <CloseIcon type="close" variant={variant} onClick={closeModal} />}
                {renderContent({ close: closeModal })}
              </StyledModal>
            </ClickableOverlay>
          </ScrollOverlay>,
          $root
        )}
    </Fragment>
  )
}

const $root = document.getElementById("root")

export { Modal }
