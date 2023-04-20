import { createContext, useState } from 'react'
import { pb } from '../api/pocketBase'
import { toast } from 'react-toastify'

const TextCollectionContext = createContext()
export default TextCollectionContext

export const TextCollectionProvider = ({ children }) => {
  const [updatedItems, setUpdatedItems] = useState([])
  const [checkedItems, setCheckedItems] = useState([])
  const [removedItems, setRemovedItems] = useState([])
  const changesMade = updatedItems.length > 0 || removedItems.length > 0
  const itemsChecked = checkedItems.length > 0

  const createItem = () => {
    const now = new Date()
    const item = {
      text: '',
      created: now.toISOString(),
    }

    setUpdatedItems([...updatedItems, item])
    return item
  }

  const updateItem = (item, newText) => {
    if (item in updatedItems) {
      setUpdatedItems(
        updatedItems.map((thisItem) => {
          if (thisItem == item) {
            thisItem.text = newText
          }
          return thisItem
        })
      )
    } else {
      if (item.text != newText) {
        item.text = newText
        setUpdatedItems([...updatedItems, item])
      }
    }

    item.text = newText
    return item
  }

  const checkItem = (item, checked) => {
    if (checked) {
      setCheckedItems([...checkedItems, item])
    } else {
      setCheckedItems(checkedItems.filter((value) => value !== item))
    }
  }

  const removeCheckedItems = (displayItems, setDisplayItems) => {
    setDisplayItems(displayItems.filter((item) => !checkedItems.includes(item)))
    setUpdatedItems(updatedItems.filter((item) => !checkedItems.includes(item)))

    for (let i in checkedItems) {
      if ('id' in checkedItems[i]) {
        setRemovedItems([...removedItems, checkedItems[i]])
      }
    }

    setCheckedItems([])
  }

  const saveChanges = async (collectionName) => {
    let allItemsSaved = true
    for (let i in updatedItems) {
      const item = updatedItems[i]
      try {
        if ('id' in item) {
          await pb
            .collection(collectionName)
            .update(item.id, { text: item.text })
        } else {
          await pb
            .collection(collectionName)
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
          await pb.collection(collectionName).delete(item.id)
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
  }

  const contextData = {
    createItem: createItem,
    updateItem: updateItem,
    checkItem: checkItem,
    removeCheckedItems: removeCheckedItems,
    saveChanges: saveChanges,
    changesMade: changesMade,
    itemsChecked: itemsChecked,
  }

  return (
    <TextCollectionContext.Provider value={contextData}>
      {children}
    </TextCollectionContext.Provider>
  )
}
