import React from "react"
import { Spinner } from "../Spinner"
import { StyledPageLoader } from "./styles"

const PageLoader = () => (
  <StyledPageLoader>
    <Spinner size={70} />
  </StyledPageLoader>
)

export { PageLoader }
