import PropTypes from 'prop-types'

function Toast({ message }) {
  return (
    <div
      id="toast-default"
      className="flex items-center justify-center max-w-xs p-2 text-green-800 bg-green-100 rounded-lg shadow border border-green-500"
      role="alert"
    >
      {/* <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg"> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="20" fill="green" />
        </svg>
      {/* </div> */}
      <div className="ms-3 text-sm font-normal">{message}</div>
    </div>
  )
}

Toast.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Toast
