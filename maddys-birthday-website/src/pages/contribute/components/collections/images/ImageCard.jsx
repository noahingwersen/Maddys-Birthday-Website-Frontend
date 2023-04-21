import { pb } from '../../../../../api/pocketBase'

const ImageCard = ({ entry }) => {
  const size = 250
  const url = pb.getFileUrl(entry, entry.image, { thumb: `${size}x${size}` })

  return (
    <div className="m-2 p-2 border border-gray-400 rounded-md">
      <img
        className="h-[200px] object-contain"
        src={url}
        height={size}
        width={size}
      />
      <p className="my-1 text-sm text-gray-500">{`Uploaded: ${entry.created}`}</p>
      <button className="px-2 py-1 text-sm border-2 rounded-md border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
        Remove
      </button>
    </div>
  )
}
export default ImageCard
