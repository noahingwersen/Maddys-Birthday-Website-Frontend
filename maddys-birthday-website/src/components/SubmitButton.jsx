const SubmitButton = ({ loading, text }) => {
  return (
    <button
      type="submit"
      className="w-full rounded-md text-white bg-zinc-800 hover:bg-zinc-700 px-6 py-2 disabled:bg-zinc-700"
      disabled={loading}
    >
      {!loading ? (
        <>{text}</>
      ) : (
        <svg
          className="animate-spin h-5 w-5 text-white m-auto"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
    </button>
  )
}
export default SubmitButton
