import React from "react";

export function ProfileEditForm(props) {
  if (props.edit === true) {
    return (
      <div>
        <section id="photo-info">
          <section className="gallery-card photo" aria-label="User profile card">
            <img src="default-profile-pic.webp" alt="Profile of person" className="galler-card" />
            <h1 className="gallery-card-title">{props.name}</h1>
            <p className="gallery-card-artist" aria-label="User description">{props.name} is an art lover based in {props.location}.</p>
          </section>
          <section>
            <section className="user-info">
              <h2>Profile Information</h2>
              <ul className="contact-info" aria-label="User contanct info">
                <li><span className="brand-font">Email: </span>{props.email}</li>
                <li><span className="brand-font">Phone: </span>{props.number}</li>
                <li><span className="brand-font">Location: </span>{props.location}</li>
              </ul>
            </section>
            <button onClick={props.flick} className="edit-prof">Edit</button>
          </section>
        </section>
      </div>
    );
   } else {
    return (
    <div id="profile-form">
      <h2>Edit Profile</h2>
      <form id="profile-form-container">
        <label>
          Enter your <span className="brand-font">name</span>: <input name="name" type="text" value={props.name} onChange={props.nameHandleback}/>
        </label>
        <label>
          Enter your <span className="brand-font">email</span>: <input name="email" type="text" value={props.email} onChange={props.emailHandleback}/>
        </label>
        <label>
          Enter your <span className="brand-font">number</span>: <input name="number" type="text" value={props.number} onChange={props.numberHandleback}/>
        </label>
        <label>
          Enter your <span className="brand-font">location</span>: <input name="location" type="text" value={props.location} onChange={props.locationHandleback}/>
        </label>
      </form>
      <button onClick={props.flick} className="edit-prof">Save</button>
    </div>);
  }
}