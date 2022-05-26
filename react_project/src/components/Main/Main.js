import { NavLink } from "react-router-dom";

import "./Main.css";

function Main() {
  return (
    <>
      <div className="homeButtons">
        <NavLink className="btn__left" to="/create">
          Create a note
        </NavLink>
        <NavLink className="btn__right" to="/note">
          Look at note
        </NavLink>
      </div>
      <div className="main__block">
        <div className="container">
          <p>
            <b>Share Notes</b> - сервис для обмена заметками. Создайте заметку,
            отправте ссылку на заметку и ваш друг сможет ее просмотреть.
          </p>
          <div>
            <p>Как сделать заметку?</p>
            <ul>
              <li>Пройдите по ссылке</li>
              <li>Вставте текст и нажмите Create</li>
              <li>Отправте сгенерированый адрес другу</li>
            </ul>
          </div>
          <p>
            Как прочитать заметку? Перейдите по присланному URL, либо введите
            адрес руками.
          </p>
        </div>
      </div>
    </>
  );
}

export default Main;
