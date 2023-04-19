import { useEffect, useState } from 'react'
import TextCollection from './TextCollection'
import useApiData from '../../../hooks/useApiData'
import { toast } from 'react-toastify'
import PlusButton from '../../../components/PlusButton'

const Collection = ({ item }) => {
  const [loading, data, errors] = useApiData(item.collection)
  const [allItems, setAllItems] = useState(data)
  const [updatedItems, setUpdatedItems] = useState([])

  useEffect(() => {
    setAllItems(data)
  }, [data])

  useEffect(() => {
    if (errors) {
      toast.error('Unable to fetch messages')
    }
  }, [errors])

  const addItem = () => {
    const now = new Date()
    const newItem = {
      text: '',
      created: now.toISOString(),
    }

    setAllItems([...allItems, newItem])
    setUpdatedItems([...updatedItems, newItem])
  }

  return (
    <div className="h-full w-full p-4">
      <h1 className="text-3xl font-semibold">{item.title}</h1>
      <div className="p-4">
        {loading && <h1 className="text-2xl font-semibold">Loading...</h1>}
        {item.collection == 'messages' && <TextCollection items={allItems} />}
        <div className="flex flex-row items-center mt-4">
          <PlusButton onClick={addItem} />
          <button
            className="ml-4 py-2 px-3 h-[40px] bg-blue-500 hover:enabled:bg-blue-400 rounded-md text-white disabled:bg-gray-400 disabled:text-gray-600"
            type="button"
            disabled={updatedItems.length == 0}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  )
}
export default Collection
