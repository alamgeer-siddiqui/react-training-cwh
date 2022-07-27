import React, { useState } from "react";

export default function Textarea(props) {
  const [text, setText] = useState("");
  const clearText = () => {
    setText("");
  };
  const upperCase = () => {
    let UpperCase = text.toUpperCase();
    setText(UpperCase);
  };
  const lowerCase = () => {
    let lowerrCase = text.toLowerCase();
    setText(lowerrCase);
  };
  const Capitalize = () => {
    setText(text.replace(/\b\w/g, (l) => l.toUpperCase()));
  };
  const Copy = () => {
    navigator.clipboard.writeText(text);
  };
  const handelOnchange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <h2 className={`text-${props.ThemeMode === "light" ? "dark" : "light"}`}>
        {props.heading}
      </h2>
      <div className="infoText">
        <span className="badge text-bg-info m-2">
          Word {text.trim().length}
        </span>
        <span className="badge text-bg-info m-2">
          Characters {text === "" ? 0 : text.split(" ").length}
        </span>
        <span className="badge text-bg-info m-2">
          Sentence {text.split(". ").length - 1}
        </span>
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myTextBox"
          style={
            props.ThemeMode === "light"
              ? { backgroundColor: "white", color: "grey", zIndex: "-1" }
              : { backgroundColor: "grey", color: "white", zIndex: "-1" }
          }
          onChange={handelOnchange}
          value={text}
          // placeholder="Enter Text Here "
          rows="4"
        ></textarea>
      </div>

      <button className="btn btn-primary m-1" onClick={upperCase}>
        Upper Case
      </button>

      <button className="btn btn-primary m-1" onClick={lowerCase}>
        Lower Case
      </button>
      <button className="btn btn-primary m-1" onClick={Capitalize}>
        Capitalize
      </button>

      <div
        class="btn-group mx-5"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button type="button" class="btn btn-warning" onClick={Copy}>
          Copy
        </button>
        <button type="button" class="btn btn-danger" onClick={clearText}>
          Clear
        </button>
      </div>
    </div>
  );
}
