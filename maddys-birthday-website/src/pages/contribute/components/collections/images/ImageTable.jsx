import ImageCard from './ImageCard'

const ImageTable = ({ images, removeImage }) => {
  return (
    <div className="flex flex-row flex-wrap">
      {images &&
        images.map((value, index) => {
          return (
            <ImageCard
              entry={value}
              remove={() => removeImage(value)}
              key={index}
            />
          )
        })}
    </div>
  )
}
export default ImageTable
