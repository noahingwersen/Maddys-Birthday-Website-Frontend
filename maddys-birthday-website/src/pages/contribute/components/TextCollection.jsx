import { useState } from 'react'
import TextRow from './TextRow'

const TextCollection = ({
  items,
  markChecked,
  updatedItems,
  setUpdatedItems,
}) => {
  return (
    <table className="w-full table-auto">
      <thead>
        <tr>
          <th className="p-2 border-b border-slate-600"></th>
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
                index={index}
                markChecked={markChecked}
                updatedItems={updatedItems}
                setUpdatedItems={setUpdatedItems}
              />
            )
          })}
      </tbody>
    </table>
  )
}
export default TextCollection
