import React, { Fragment } from "react"
import { Container, Divider } from "./styles"

const Breadcrumbs = ({ items }) => (
  <Container>
    {items.map((item, index) => (
      <Fragment key={item}>
        {index !== 0 && <Divider>/</Divider>}
        {item}
      </Fragment>
    ))}
  </Container>
)

export { Breadcrumbs }
