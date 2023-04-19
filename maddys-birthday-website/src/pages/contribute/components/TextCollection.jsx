import { useState } from 'react'
import TextRow from './TextRow'

const TextCollection = ({ items }) => {
  const [updatedTexts, setUpdatedTexts] = useState([])

  return (
    <table className="p-4 w-full table-auto border-separate">
      <thead>
        <tr>
          <th className="text-left p-2 border-b border-slate-600">ID</th>
          <th className="text-left p-2 border-b border-slate-600">Text</th>
          <th className="text-left p-2 border-b border-slate-600">
            Date Added
          </th>
        </tr>
      </thead>
      <tbody>
        {items &&
          items.map((value, index) => {
            return (
              <TextRow
                key={index}
                item={value}
                updatedTexts={updatedTexts}
                setUpdatedTexts={setUpdatedTexts}
                index={index}
              />
            )
          })}
      </tbody>
    </table>
  )
}
export default TextCollection
