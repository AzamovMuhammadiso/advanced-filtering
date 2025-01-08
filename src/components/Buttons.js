function Buttons({onclickHandler, value, title}) {
  return (
    <button onClick={onclickHandler} value={value} className="btns">{title}</button>
  )
}

export default Buttons;