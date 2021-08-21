import React, { useState } from "react";
import "./css/style.css";

export default function InputForm(props) {
  // State Variable

  const [text, setText] = useState("");
  const [btnText, setBtnText] = useState("Upper");

  console.log(props.mode);
  // Functions
  const handleUpClick = () => {
    let newText;
    if (btnText === "Lower") {
      newText = text.toLowerCase();
      props.showAlert("Converting into Lower Case", "primary");
      setBtnText("Upper");
    } else {
      newText = text.toUpperCase();
      props.showAlert("Converting into Upper Case", "success");
      setBtnText("Lower");
    }
    // console.log('The value of text is :'+newText);
    setText(newText);
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div
      className="container"
      style={{
        backgroundColor: props.mode === "dark" ? "#49535d" : "",
        color: props.mode === "dark" ? "white" : "black",
        transition: "1s",
      }}
    >
      <div className=" my-3">
        <h3 htmlFor="">{props.heading}</h3>
        <textarea
          className="form-control"
          id="textArea"
          rows="3"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#49535d" : "",
            color: props.mode === "dark" ? "white" : "black",
            transition: "1s",
          }}
          // Here above we write javascript inside the javascript object
          placeholder="Enter Text"
        ></textarea>
      </div>
      <button
        className="btn btn-primary"
        style={{ background: props.color, transition: "1s" }}
        onClick={handleUpClick}
      >
        Convert To {btnText} Case
      </button>
      <div
        className="card my-3"
        style={{
          transition: "1s",
          background: props.color,
          opacity: 0.8,
          color: props.mode === 'light'? 'black':'white'
        }}
      >
        <div className="card-body">
          Words :{" "}
          {text.split(" ").length === 1 ? 0 : text.split(" ").length - 1}
        </div>
        <div className="card-body">Character : {text.length}</div>
      </div>
    </div>
  );
}
