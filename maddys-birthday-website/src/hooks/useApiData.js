import { useEffect, useState } from 'react'
import { pb } from '../api/pocketBase'

function useApiData(collectionName) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState()
  const [errors, setErrors] = useState()

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await pb.collection(collectionName).getFullList()
        setData(response)
      } catch (error) {
        setErrors(error)
      }
      setLoading(false)
    }

    fetchData()
  }, [])

  return [loading, data, errors]
}
export default useApiData
