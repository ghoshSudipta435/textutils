import { element } from 'prop-types';
import React, { useState } from 'react'


export default function Textform(props) {
    const [text, setText] = useState("");
    //wrong way
    //  text = "new text"

    //correct way

    //setText("new text");
    const handleUpClick = () => {
        // console.log("Upper case was clicked"+ text);
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handleLowClick = () => {
        // console.log("Upper case was clicked"+ text);
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleClearClick = () => {
        // console.log("Upper case was clicked"+ text);
        let newtext = " ";
        setText(newtext);
    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }
    const handleSentenceCase = () => {
        let newText = text
            .toLowerCase()
            .replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
        setText(newText);
    };
    const handleCapitalizedCase = () => {
        let newText = text
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        setText(newText);
    };
    const handleTitleCase = () => {
        let newText = text
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        setText(newText);
    };
    const handleInverseCase = () => {
        let newText = text
            .split('')
            .map(char =>
                char === char.toUpperCase()
                    ? char.toLowerCase()
                    : char.toUpperCase()
            )
            .join('');
        setText(newText);
    };
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        alert("Copied to clipboard!");
    };
    const handleDownload = () => {
        const element = document.createElement("a");
        const file = new Blob([text], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "textutils_output.txt";
        document.body.appendChild(element); // required for Firefox
        element.click();
        document.body.removeChild(element);
    };

    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>

                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
                    Convert to uppercase
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
                    Convert to lowercase
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
                    clear
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSentenceCase}>Sentence Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalizedCase}>Capitalized Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleTitleCase}>Title Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleInverseCase}>Inverse Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDownload}>Download</button>
            </div>
            <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/ ).filter((element)=> {return element.length!==0}).length} words and {text.length} characters </p>
                <p>{0.008 * (text.split(" ").filter((element)=> {return element.length!==0}).length)} minutes read</p>

                <h3>Preview</h3>
                <p>{text.length>0?text:"Nothing something in the text box to preview it here..."}</p>

            </div>

        </>
    )
}
