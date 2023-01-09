import axios from "axios"
import { toast } from "./toast"
import { stringify } from "qs"
import { getStoredAuthToken, removeStoredAuthToken } from "./authToken"

const defaults = {
  baseURL: process.env.API_URL || "http://localhost:8080",
  headers: () => ({
    "Content-Type": "application/json",
    Authorization: getStoredAuthToken() ? `Bearer ${getStoredAuthToken()}` : undefined,
  }),
  error: {
    code: "INTERNAL_ERROR",
    message: "Something went wrong. Please check your internet connection or contact our support.",
    status: 503,
    data: {},
  },
}

const makeCall = (method, url, variables) => {
  return new Promise((resolve, reject) => {
    const options = {
      url: `${defaults.baseURL}${url}`,
      method,
      headers: defaults.headers(),
      params: method === "get" ? variables : undefined,
      data: method !== "get" ? variables : undefined,
      paramsSerializer: {
        serialize: stringify,
      },
    }
    axios(options)
      .then(
        (response) => {
          resolve(response.data)
        },
        (error) => {
          if (error.response) {
            if (error.response.data.error.code === "INVALID_TOKEN") {
              removeStoredAuthToken()
              window.location.href = "/authenticate"
            } else {
              reject(error.response.data.error)
            }
          } else {
            reject(defaults.error)
          }
        }
      )
      .catch((error) => {
        console.error(error)
        reject(defaults.error)
      })
  })
}

const optimisticUpdate = async (url, { updatedFields, currentFields, setLocalData }) => {
  try {
    setLocalData(updatedFields)
    await makeCall("put", url, updatedFields)
  } catch (error) {
    setLocalData(currentFields)
    toast.error(error)
  }
}

export const api = {
  get: (...args) => makeCall("get", ...args),
  post: (...args) => makeCall("post", ...args),
  put: (...args) => makeCall("put", ...args),
  patch: (...args) => makeCall("patch", ...args),
  delete: (...args) => makeCall("delete", ...args),
  optimisticUpdate,
}
