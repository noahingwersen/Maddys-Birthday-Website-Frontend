import CollectionList from './components/CollectionList'
import Collection from './components/Collection'
import { useState } from 'react'

const ContributePage = () => {
  const items = [
    { title: 'Posts', collection: 'posts' },
    { title: 'Pictures', collection: 'pictures' },
  ]

  const [selectedItem, setSelectedItem] = useState(0)

  return (
    <div className="h-full bg-white flex flex-row">
      <CollectionList
        items={items}
        setSelected={setSelectedItem}
        selectedIndex={selectedItem}
      />
      <Collection item={items[selectedItem]} />
    </div>
  )
}
export default ContributePage
