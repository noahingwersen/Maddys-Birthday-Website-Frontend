import { useContext, useEffect, useState } from 'react'
import TextCollectionContext from '../../../context/TextCollectionContext'

const TextRow = ({ item, index }) => {
  const [text, setText] = useState(item.text)
  const [checked, setChecked] = useState(false)
  const { checkItem, updateItem } = useContext(TextCollectionContext)

  const onCheck = () => {
    checkItem(item, !checked)
    setChecked(!checked)
  }

  useEffect(() => {
    item = updateItem(item, text)
  }, [text])

  return (
    <tr>
      <td className="p-2 align-top border-b border-slate-600">
        <input
          className="rounded-sm hover:cursor-pointer border-2 border-gray-400 hover:border-gray-500"
          type="checkbox"
          checked={checked}
          onChange={onCheck}
        />
      </td>
      <td className="align-text-top p-2 border-b border-slate-600">
        {index + 1}
      </td>
      <td className="border-b border-slate-600 w-2/3">
        <textarea
          className="w-full border-none"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </td>
      <td className="align-text-top p-2 border-b border-slate-600">
        {item.created}
      </td>
    </tr>
  )
}
export default TextRow
