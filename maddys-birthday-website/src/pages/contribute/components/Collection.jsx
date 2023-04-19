import { useEffect, useState } from 'react'
import { pb } from '../../../api/pocketBase'
import TextCollection from './TextCollection'
import useApiData from '../../../hooks/useApiData'
import { toast } from 'react-toastify'

const Collection = ({ item }) => {
  const [loading, data, errors] = useApiData(item.collection)

  useEffect(() => {
    if (errors) {
      toast.error('Unable to fetch messages')
    }
  }, [errors])

  return (
    <div className="h-full w-full p-4">
      <h1 className="text-3xl font-semibold">{item.title}</h1>
      {item.collection == 'messages' && <TextCollection items={data} />}
    </div>
  )
}
export default Collection
