import { useParams } from "react-router-dom"

const UserPage = () => {
  const params = useParams() // { pq: 'abc' }

  return (
    <>My username is {params.pq}</>
  )
}

export { UserPage }
