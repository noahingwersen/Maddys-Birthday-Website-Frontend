import ImageCard from './ImageCard'

const ImageTable = ({ images }) => {
  return (
    <div className="flex flex-row flex-wrap">
      {images &&
        images.map((value, index) => {
          return <ImageCard entry={value} key={index} />
        })}
    </div>
  )
}
export default ImageTable
