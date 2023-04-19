import { useState } from 'react'

const TextRow = ({ item, index, updatedTexts, setUpdatedTexts }) => {
  const [text, setText] = useState(item.text)
  const textChange = (e) => {
    setText(e.target.value)
  }

  return (
    <tr>
      <td className="align-text-top p-2">{index + 1}</td>
      <td>
        <textarea className="w-full" value={text} onChange={textChange} />
      </td>
      <td className="align-text-top w-1/6 p-2">{item.created}</td>
    </tr>
  )
}
export default TextRow
