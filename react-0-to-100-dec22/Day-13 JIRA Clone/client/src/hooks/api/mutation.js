import { useCallback } from "react"
import { api } from "../../utils/api"
import { useMergeState } from "../mergeState"

const isWorkingAlias = {
  post: "isCreating",
  put: "isUpdating",
  patch: "isUpdating",
  delete: "isDeleting",
}

const useMutation = (method, url) => {
  const [state, mergeState] = useMergeState({
    data: null,
    error: null,
    isWorking: false,
  })

  const makeRequest = useCallback(
    (variables = {}) =>
      new Promise((resolve, reject) => {
        mergeState({ isWorking: true })

        api[method](url, variables).then(
          (data) => {
            resolve(data)
            mergeState({ data, error: null, isWorking: false })
          },
          (error) => {
            reject(error)
            mergeState({ error, data: null, isWorking: false })
          }
        )
      }),
    [method, url, mergeState]
  )

  return [
    {
      ...state,
      [isWorkingAlias[method]]: state.isWorking,
    },
    makeRequest,
  ]
}

export { useMutation }
