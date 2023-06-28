import { useEffect, useState } from 'react'
import TextTable from './TextTable'
import useApiData from '../../../../../hooks/useApiData'
import { toast } from 'react-toastify'
import PlusButton from '../../../../../components/PlusButton'
import { pb } from '../../../../../api/pocketBase'

const TextCollection = ({ collection }) => {
  const [loading, data, errors] = useApiData(collection.name)
  const [allItems, setAllItems] = useState([])
  const [updatedItems, setUpdatedItems] = useState([])
  const [checkedItems, setCheckedItems] = useState([])
  const [removedItems, setRemovedItems] = useState([])

  const saveChanges = async () => {
    let allItemsSaved = true
    for (let i in updatedItems) {
      const item = updatedItems[i]
      try {
        if ('id' in item) {
          await pb
            .collection(collection.name)
            .update(item.id, { text: item.text })
        } else {
          await pb
            .collection(collection.name)
            .create({ user: pb.authStore.model.id, text: item.text })
        }
        setUpdatedItems(updatedItems.filter((thisItem) => thisItem != item))
      } catch (error) {
        allItemsSaved = false
        toast.error('Unable to update record')
      }
    }

    for (let i in removedItems) {
      const item = removedItems[i]
      if ('id' in item) {
        try {
          await pb.collection(collection.name).delete(item.id)
        } catch (error) {
          allItemsSaved = false
          toast.error('Unable to remove record')
          setAllItems([...allItems, item])
        }
      }
    }
    setRemovedItems([])
    if (allItemsSaved) {
      toast.success('Changes saved!')
    }

    try {
      const updatedData = await pb.collection(collection.name).getFullList()
      setAllItems(updatedData)
    } catch {}
  }

  useEffect(() => {
    setAllItems(data)
  }, [data])

  useEffect(() => {
    if (errors) {
      toast.error(`Unable to fetch ${collection.name}`)
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

  const removeCheckedItems = () => {
    setAllItems(allItems.filter((item) => !checkedItems.includes(item)))
    setUpdatedItems(updatedItems.filter((item) => !checkedItems.includes(item)))

    for (let i in checkedItems) {
      if ('id' in checkedItems[i]) {
        setRemovedItems([...removedItems, checkedItems[i]])
      }
    }

    setCheckedItems([])
  }

  const markChecked = (item, checked) => {
    if (checked) {
      setCheckedItems([...checkedItems, item])
    } else {
      setCheckedItems(checkedItems.filter((value) => value !== item))
    }
  }

  return (
    <div className="h-full w-full p-4 overflow-y-auto">
      <h1 className="text-3xl font-semibold">{collection.title}</h1>
      <div className="p-4 min-w-[450px]">
        {loading && <h1 className="text-2xl font-semibold">Loading...</h1>}
        <TextTable
          items={allItems}
          markChecked={markChecked}
          updatedItems={updatedItems}
          setUpdatedItems={setUpdatedItems}
        />
        <div className="flex flex-row mt-4 w-full">
          <PlusButton onClick={addItem} />
          <button
            className="ml-4 py-2 px-3 h-[40px] bg-blue-500 hover:enabled:bg-blue-400 rounded-md text-white disabled:bg-gray-400 disabled:text-gray-600"
            type="button"
            disabled={updatedItems.length == 0 && removedItems.length == 0}
            onClick={() => saveChanges(collection.name)}
          >
            Update
          </button>
          <button
            className="ml-auto order-2 py-2 px-3 h-[40px] bg-red-500 hover:enabled:bg-red-400 rounded-md text-white disabled:bg-gray-400 disabled:text-gray-600"
            type="button"
            onClick={removeCheckedItems}
            disabled={checkedItems.length == 0}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}
export default TextCollection
