import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from "../../env.json";

import "./Note.css";

function Note() {
  let { noteURL } = useParams();
  const [noteText, setNoteText] = useState("");
  const [lineClass, setLineClass] = useState("hide");
  const [formClass, setFormClass] = useState("hide");
  const [errorClass, setErrorClass] = useState("hide");

  useEffect(() => {
    if (noteURL !== undefined) {
      fetch(env.urlBackend, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({ url: noteURL }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          if (response.result) {
            setNoteText(response.note);
            setLineClass("");
            setFormClass("hide");
            setErrorClass("hide");
          } else if (!response.result) {
            setLineClass("hide");
            setFormClass("hide");
            setErrorClass("");
          }
        });
    } else {
      setLineClass("hide");
      setFormClass("");
      setErrorClass("hide");
    }
  }, []);

  function getNote(e) {
    e.preventDefault();
    let url = e.target.elements.url.value;
    url = url.trim();
    if (url === "") {
      alert("Please, write note");
      return false;
    }

    noteURL = url;
    window.location.href = env.url + "/" + url;
  }

  function searchNote() {
    window.location.href = env.url;
  }

  return (
    <div className="note">
      <div className="form">
        <div className={lineClass}>
          <div className="form__container">
            <h4>Note: {noteURL}</h4>
            <div>{noteText}</div>
          </div>
          <div>
            <button className="note__btn" onClick={searchNote}>
              Look for one more note
            </button>
          </div>
        </div>
        <div className={errorClass}>
          <p className="error">Error. Try again</p>
        </div>
        <div className={formClass}>
          <form onSubmit={getNote}>
            <label className="text__form" htmlFor="url">
              Write hash of note
            </label>
            <input type="text" name="url" id="url" className="form-control" />
            <button type="submit" className="btn btn-primary">
              Find Note
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Note;
