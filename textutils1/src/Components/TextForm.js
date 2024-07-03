import React , {useState} from 'react'

export default function TextForm(props) {
  
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked"  +text)
    let newText= text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = ()=>{
    console.log("Lowercase was clicked"  +text)
    let newText= text.toLowerCase();
    setText(newText)
  }
  const handleOnChange = (event)=>{
    console.log("on Chnage")
    setText(event.target.value)
  }
  const [text, setText] = useState(' ')
  return (
    <>
    <div className="container">
      <h2>{props.heading} </h2>
      <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange}id="MyBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>

    </div>
    <div className="container my-2">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008*text.split(" ").length} </p>
      <h3>{text}</h3>

    </div>
    </>
  )
}
