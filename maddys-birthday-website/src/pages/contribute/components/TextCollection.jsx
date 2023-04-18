const TextCollection = ({ items }) => {
  return (
    <div className="p-4 m-2">
      {items &&
        items.map((value, index) => {
          return (
            <div className="outline p-2 my-2" key={index}>
              {value.text}
            </div>
          )
        })}
    </div>
  )
}
export default TextCollection
