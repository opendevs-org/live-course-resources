import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../utils/api"
import { toast } from "../../utils/toast"
import { getStoredAuthToken, storeAuthToken } from "../../utils/authToken"
import { PageLoader } from "../../components/PageLoader"

const Authenticate = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const createGuestAccount = async () => {
      try {
        const { authToken } = await api.post("/authentication/guest")
        storeAuthToken(authToken)
        navigate("/")
      } catch (error) {
        toast.error(error)
      }
    }

    if (!getStoredAuthToken()) {
      createGuestAccount()
    }
  }, [])

  return <PageLoader />
}

export { Authenticate }
