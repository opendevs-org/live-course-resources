import { useParams } from "react-router-dom"

const IdEntryPage = () => {
  const params = useParams()
  return <>the id is {params.id}</>
}

export { IdEntryPage }
