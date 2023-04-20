import CollectionList from './components/CollectionList'
import TextCollection from './components/TextCollection'
import { useState } from 'react'

const ContributePage = () => {
  const collections = [
    { title: 'Messages', name: 'messages', type: 'text' },
    { title: 'Pictures', name: 'pictures', type: 'image' },
  ]

  const [selectedItem, setSelectedItem] = useState(collections[0])

  return (
    <div className="h-full overflow-hidden bg-white flex flex-row">
      <CollectionList
        items={collections}
        setSelected={setSelectedItem}
        selectedValue={selectedItem}
      />
      {selectedItem.type == 'text' && (
        <TextCollection collection={selectedItem} />
      )}
    </div>
  )
}
export default ContributePage
