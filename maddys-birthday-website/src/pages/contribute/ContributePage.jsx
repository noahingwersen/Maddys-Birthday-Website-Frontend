import CollectionList from './components/CollectionList'
import Collection from './components/Collection'
import { useContext, useState } from 'react'
import TextCollectionContext, {
  TextCollectionProvider,
} from '../../context/TextCollectionContext'

const ContributePage = () => {
  const collections = [
    { title: 'Messages', name: 'messages', type: 'text' },
    { title: 'Pictures', name: 'pictures', type: 'image' },
  ]
  const [selectedItem, setSelectedItem] = useState(0)

  return (
    <div className="h-full bg-white flex flex-row">
      <CollectionList
        items={collections}
        setSelected={setSelectedItem}
        selectedIndex={selectedItem}
      />
      {collections[selectedItem].type == 'text' && (
        <TextCollectionProvider>
          <Collection
            collection={collections[selectedItem]}
            context={TextCollectionContext}
          />
        </TextCollectionProvider>
      )}
    </div>
  )
}
export default ContributePage
