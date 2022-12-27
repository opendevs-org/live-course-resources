import React from "react"
import { Image, Letter } from "./styles"

const colors = [
  "#DA7657",
  "#6ADA57",
  "#5784DA",
  "#AA57DA",
  "#DA5757",
  "#DA5792",
  "#57DACA",
  "#57A5DA",
]

const getColorFromName = (name) => colors[name.toLocaleLowerCase().charCodeAt(0) % colors.length]

const Avatar = ({ className, avatarUrl, name = "", size = 32, ...rest }) => {
  const sharedProps = {
    className,
    size,
    "data-testid": name ? `avatar:${name}` : "avatar",
    ...rest,
  }

  if (avatarUrl) {
    return <Image avatarUrl={avatarUrl} {...sharedProps} />
  }

  return (
    <Letter color={getColorFromName(name)} {...sharedProps}>
      <span>{name.charAt(0)}</span>
    </Letter>
  )
}

export { Avatar }
