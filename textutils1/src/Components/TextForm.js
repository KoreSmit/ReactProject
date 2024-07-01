import React , {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked"  +text)
    let newText= text.toUpperCase();
    setText(newText)
  }
  const handleOnChange = (event)=>{
    console.log("on Chnage")
    setText(event.target.value)
  }
  const [text, setText] = useState('Enter text here...')
  return (
    <div>
      <h2>{props.heading} </h2>
      <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange}id="MyBox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}
