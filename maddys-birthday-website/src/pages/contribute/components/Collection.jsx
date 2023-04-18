import { useEffect, useState } from 'react'
import { pb } from '../../../api/pocketBase'
import TextCollection from './TextCollection'

const Collection = ({ item }) => {
  const [data, setData] = useState()
  const loadData = async () => {
    const results = await pb
      .collection(item.collection)
      .getFullList({ sort: '-created' })

    setData(results)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className="h-full w-full p-4">
      <h1 className="text-3xl font-semibold">{item.title}</h1>
      {item.collection == 'posts' && <TextCollection items={data} />}
    </div>
  )
}
export default Collection
