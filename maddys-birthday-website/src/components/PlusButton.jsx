const PlusButton = ({ disabled, onClick }) => {
  const outerStyle = disabled
    ? ' border border-gray-400'
    : ' bg-green-500 hover:bg-green-400 text-white shadow'
  const innerStyle = disabled && ' text-gray-500'

  return (
    <button
      className="w-auto h-auto mt-2"
      disabled={disabled}
      onClick={onClick}
    >
      <div className="flex-1 h-full">
        <div
          className={
            'flex items-center justify-center flex-1 h-full p-2 rounded-full' +
            outerStyle
          }
        >
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={'h-6 w-6' + innerStyle}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
        </div>
      </div>
    </button>
  )
}
export default PlusButton
