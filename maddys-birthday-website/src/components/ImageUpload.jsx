const ImageUpload = ({ uploadFile }) => {
  const onFileInput = async (e) => {
    e.preventDefault()
    await uploadFile(e.target.files[0])
  }

  const onDragEvent = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const onDropEvent = (e) => {
    e.preventDefault()
    e.stopPropagation()

    const { files } = e.dataTransfer
    if (files && files.length) {
      uploadFile(files[0])
    }
  }

  return (
    <div
      className="mb-2 flex flex-col items-center justify-center bg-gray-200 min-h-[250px] rounded-md border-2 border-gray-500 border-dashed"
      onDragOver={onDragEvent}
      onDrop={onDropEvent}
    >
      <label
        htmlFor="uploadImage"
        className=" hover:cursor-pointer mb-2 border-2 border-green-500 hover:bg-green-500 text-green-500 hover:text-white p-2 rounded-md"
      >
        {' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-up"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
          />
        </svg>
      </label>
      <input
        className="hidden"
        type="file"
        id="uploadImage"
        onChange={onFileInput}
      />
      <h1>Drag images to upload</h1>
    </div>
  )
}
export default ImageUpload
