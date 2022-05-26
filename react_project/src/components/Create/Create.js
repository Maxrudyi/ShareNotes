import React from "react";
import { useState } from "react";
import evn from "../../env.json";

import "./Create.css";

function Create() {
  const [url, setUrl] = useState("");
  const [lineClass, setLineClass] = useState("hide");
  const [formClass, setFormClass] = useState("");

  let sendData = (obj) => {
    setFormClass("hide");
    setLineClass("");
    fetch(evn.urlBackend, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.result) {
          setUrl(evn.url + "/" + response.url);
        }
      });
  };

  let loadDataFromForm = (e) => {
    e.preventDefault();
    let note = e.target.elements.note.value;
    note = note.trim();
    if (note === "") {
      alert("Please, write note");
      return false;
    }

    sendData({ note: note });
  };

  return (
    <div className="create">
      <div className="container__form">
        <form onSubmit={loadDataFromForm} className={formClass}>
          <label htmlFor="">Write a note</label>
          <textarea className="form-control" name="note" id="note"></textarea>
          <button className="form__btn" type="submit">
            Create
          </button>
        </form>
        <div className={lineClass}>
          <div className="create__url">
            <p>{url}</p>
          </div>
          <div>
            <button
              className="create__btn"
              onClick={() => window.location.reload()}
            >
              Create new note
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
