import React, { useEffect } from "react"
import { KeyCodes } from "../../../../../../../constants/keyCodes"
import { isFocusedElementEditable } from "../../../../../../../utils/browser"
import { Tip, TipLetter } from "./styles"

const ProjectBoardIssueDetailsCommentsCreateProTip = ({ setFormOpen }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isFocusedElementEditable() && event.keyCode === KeyCodes.M) {
        event.preventDefault()
        setFormOpen(true)
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [setFormOpen])

  return (
    <Tip>
      <strong>Pro tip:</strong>press<TipLetter>M</TipLetter>to comment
    </Tip>
  )
}

export { ProjectBoardIssueDetailsCommentsCreateProTip }
