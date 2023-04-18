import CollectionListItem from './CollectionListItem'

const CollectionList = ({ items, setSelected, selectedIndex }) => {
  return (
    <div className="p-2 outline h-full w-fit">
      <h1 className="text-xl font-semibold mb-3">Collections</h1>
      {items.map((value, index) => {
        return (
          <CollectionListItem
            key={index}
            name={value.title}
            onSelect={() => setSelected(index)}
            selected={index == selectedIndex}
          />
        )
      })}
    </div>
  )
}
export default CollectionList
