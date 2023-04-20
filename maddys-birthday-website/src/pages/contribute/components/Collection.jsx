import { useContext, useEffect, useState } from 'react'
import useApiData from '../../../hooks/useApiData'
import { toast } from 'react-toastify'
import PlusButton from '../../../components/PlusButton'
import TextTable from './TextTable'

const Collection = ({ collection, context }) => {
  const [loading, data, errors] = useApiData(collection.name)
  const [allItems, setAllItems] = useState(data)

  const {
    createItem,
    removeCheckedItems,
    saveChanges,
    changesMade,
    itemsChecked,
  } = useContext(context)

  const addItem = () => {
    const item = createItem()
    setAllItems([...allItems, item])
  }

  useEffect(() => {
    setAllItems(data)
  }, [data])

  useEffect(() => {
    if (errors) {
      toast.error(`Unable to fetch ${collection.name}`)
    }
  }, [errors])

  return (
    <div className="h-full w-full p-4">
      <h1 className="text-3xl font-semibold">{collection.title}</h1>
      <div className="p-4">
        {loading && <h1 className="text-2xl font-semibold">Loading...</h1>}
        {collection.type == 'text' && <TextTable items={allItems} />}
        <div className="flex flex-row mt-4 w-full">
          <PlusButton onClick={addItem} />
          <button
            className="ml-4 py-2 px-3 h-[40px] bg-blue-500 hover:enabled:bg-blue-400 rounded-md text-white disabled:bg-gray-400 disabled:text-gray-600"
            type="button"
            disabled={!changesMade}
            onClick={() => saveChanges(collection.name)}
          >
            Update
          </button>
          <button
            className="ml-auto order-2 py-2 px-3 h-[40px] bg-red-500 hover:enabled:bg-red-400 rounded-md text-white disabled:bg-gray-400 disabled:text-gray-600"
            type="button"
            onClick={() => removeCheckedItems(allItems, setAllItems)}
            disabled={!itemsChecked}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}
export default Collection
