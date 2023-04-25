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
    <label
      forHtml="uploadImage"
      className="mb-2 flex flex-col items-center justify-center bg-gray-300 min-h-[250px] rounded-md border-2 border-gray-500 border-dashed hover:bg-gray-200 hover:cursor-pointer"
      onDragOver={onDragEvent}
      onDrop={onDropEvent}
    >
      <svg
        aria-hidden="true"
        class="w-10 h-10 mb-3 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
        ></path>
      </svg>
      <p class="mb-2 text-sm text-gray-500">
        <span class="font-semibold">Click to upload</span> or drag and drop
      </p>
      <p class="text-xs text-gray-500">SVG, PNG, JPG or GIF</p>
      <input
        className="hidden"
        type="file"
        id="uploadImage"
        onChange={onFileInput}
      />
    </label>
  )
}
export default ImageUpload
