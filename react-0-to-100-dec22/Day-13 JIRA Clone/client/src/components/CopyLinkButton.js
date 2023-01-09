import React, { useState } from "react"
import { copyToClipboard } from "../utils/browser"
import { Button } from "./Button"

const CopyLinkButton = (props) => {
  const [isLinkCopied, setLinkCopied] = useState(false)

  const handleLinkCopy = () => {
    setLinkCopied(true)
    setTimeout(() => setLinkCopied(false), 2000)
    copyToClipboard(window.location.href)
  }

  return (
    <Button icon="link" onClick={handleLinkCopy} {...props}>
      {isLinkCopied ? "Link Copied" : "Copy link"}
    </Button>
  )
}

export { CopyLinkButton }
