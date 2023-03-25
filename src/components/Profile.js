import React, {useState} from 'react';
import { ProfileEditForm } from './ProfileEditForm';


export default function Profile() {
  const [editvar, setEditvar] = useState(true);
  const [name, setName] = useState("Anonymous");
  const [email, setEmail] = useState("___");
  const [number, setNumber] = useState("___");
  const [location, setLocation] = useState("___");

  const handleEdit = function(event) {
    if (editvar === true) {
      setEditvar(false);
    } else {
      setEditvar(true);
    }
  }

  const handleName = function(event) {
    setName(event.target.value);
  }

  const handleEmail = function (event) {
    let input = event.target.value;
    setEmail(input);
  }
  const handleNumber = function (event) {
    let input = event.target.value;
    setNumber(input);
  }
  const handleLocation = function (event) {
    let input = event.target.value;
    setLocation(input);
  }

  const profilePage = <ProfileEditForm edit={editvar} flick={handleEdit} name={name} nameHandleback={handleName} emailHandleback={handleEmail} email={email}
  numberHandleback={handleNumber} number={number} locationHandleback={handleLocation} location={location}/>

  return (
    <main className="dark-green-background" aria-label="User profile page">
      <section id="profile-section">
        {profilePage}
      </section>
    </main>
  );
}
