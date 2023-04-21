import { useEffect, useRef, useState } from 'react'
import useApiData from '../../../../../hooks/useApiData'
import { toast } from 'react-toastify'
import { pb } from '../../../../../api/pocketBase'
import ImageTable from './ImageTable'
import ImageUpload from '../../../../../components/ImageUpload'

const ImageCollection = ({ collection }) => {
  const [loading, data, errors] = useApiData(collection.name)
  const [allItems, setAllItems] = useState([])

  const uploadImage = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    console.log(e.target.files[0])
    formData.append('image', e.target.files[0])
    formData.append('user', pb.authStore.model.id)

    try {
      await pb.collection(collection.name).create(formData)
      toast.success('Image uploaded successfully!')
    } catch (error) {
      toast.error('Unable to upload image')
    }

    const newData = await pb.collection(collection.name).getFullList()
    setAllItems(newData)
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
    <div className="h-full overflow-y-scroll w-full p-4">
      <h1 className="text-3xl font-semibold">{collection.title}</h1>
      <div className="p-4">
        <ImageUpload onChange={uploadImage} />
        {loading && <h1 className="text-2xl font-semibold">Loading...</h1>}
        <ImageTable images={allItems} />
      </div>
    </div>
  )
}
export default ImageCollection
