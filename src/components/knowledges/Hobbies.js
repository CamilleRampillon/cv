import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérets</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-plane-departure"></i>
          <span> Voyages</span>
        </li>
        <li className="hobby">
          <i className="fas fa-gamepad"></i>
          <span> Jeux vidéo</span>
        </li>
        <li className="hobby">
          <i className="fas fa-book"></i>
          <span> Lecture</span>
        </li>
        <li className="hobby">
          <i className="fas fa-theater-masks"></i>
          <span> Cinescénie</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
