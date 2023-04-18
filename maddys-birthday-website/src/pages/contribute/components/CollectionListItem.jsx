const CollectionListItem = ({ name, onSelect, selected }) => {
  return (
    <div
      className={`m-2 p-1 min-w-[200px] rounded hover:bg-gray-300 hover:cursor-pointer ${
        selected && 'bg-gray-300'
      }`}
      onClick={onSelect}
    >
      {name}
    </div>
  )
}
export default CollectionListItem
