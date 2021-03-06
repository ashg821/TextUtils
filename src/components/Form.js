import React, {useState} from "react";
import PropTypes from 'prop-types';

export default function Form(props) {
    let [text, setText]=useState("Enter some text");
    let onChangeHandler=(e)=>{
        setText(e.target.value);
        // console.log(text);
    }
    let onclickButtonHandlerUpper=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("success", "String converted to uppercase.");
    }
    let onclickButtonHandlerLower=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("success", "String converted to lowercase.");
        
    }
    let onClickTextboxHandler=()=>{
        setText("");
        props.showAlert("success", "Text area cleared.");

    }
    let insertComma=()=>{
        let regex=/\s/g;
        setText(text.replace(regex, ","));
    }
    let removeSpaces=()=>{
        let regex=/\s{2,}/g;
        text=text.replace(regex, " ");
        setText(text);
        props.showAlert("success", "Spaces have been removed.");
    }
    let copyText=()=>{
        navigator.clipboard.writeText(text);
        // alert("Text Copied!");
        props.showAlert("success", "Text has been copied!");
        }
  return (
    <>
    <div className="container my-4">
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="textBox" rows="8" value={text} onChange={onChangeHandler} onDoubleClick={onClickTextboxHandler}></textarea>
      </div>
      <button className={`btn btn-primary mx-2 my-2 ${text.split(" ").filter((element)=>element.length!==0).join(" ").length===0?'disabled':""}`} onClick={onclickButtonHandlerUpper}>Convert to Uppercase</button>
      <button className={`btn btn-primary mx-2 my-2 ${text.split(" ").filter((element)=>element.length!==0).join(" ").length===0?'disabled':""}`} onClick={onclickButtonHandlerLower}>Convert to Lowecase</button>
      <button className={`btn btn-primary mx-2 my-2 ${text.split(" ").filter((element)=>element.length!==0).join(" ").length===0?'disabled':""}`} onClick={insertComma}>Replace Space</button>
      <button className={`btn btn-primary mx-2 my-2 ${text.split(" ").filter((element)=>element.length!==0).join(" ").length===0?'disabled':""}`} onClick={removeSpaces}>Remove Spaces</button>
      <button className={`btn btn-primary mx-2 my-2 ${text.split(" ").filter((element)=>element.length!==0).join(" ").length===0?'disabled':""}`} onClick={copyText}>Copy Text</button>
    </div>
    <div className="container my-3">
        <h2>Some other details</h2>
        <ul>
            <li>
                Number of character: {text.split(" ").filter((element)=>element.length!==0).join(" ").length}
            </li>
            <li>
                Number of words: {text.split(/\s/g).filter((element)=>element.length!==0).length}
            </li>
            <li>    
                {/* {console.log(text.split(" ").filter((element)=>element.length!==0))} */}
                Estimated time to read(at speed 300WPM): {text.split(" ").filter((element)=>element.length!==0).length*0.0034} Minutes
            </li>
        </ul>
        <h2>Preview</h2>
        <p>{text.split(" ").filter((element)=>element.length!==0).join(" ").length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  );
}

Form.propTypes={
    heading: PropTypes.string.isRequired
}
Form.defaultProps={
    heading: "MentionHeadingHere"
}
