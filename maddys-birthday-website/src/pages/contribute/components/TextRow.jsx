import { useEffect, useState } from 'react'

const TextRow = ({ item, index, onChange }) => {
  const [text, setText] = useState(item.text)

  return (
    <tr>
      <td className="align-text-top p-2">{index + 1}</td>
      <td>
        <textarea
          className="w-full"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </td>
      <td className="align-text-top w-1/6 p-2">{item.created}</td>
    </tr>
  )
}
export default TextRow
