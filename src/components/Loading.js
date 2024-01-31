function Loading({ center }) {
  return (
    <div className="loader-parent">
      <div className={center ? 'loading loading-center' : 'loading'}></div>
    </div>
  )
}

export default Loading
