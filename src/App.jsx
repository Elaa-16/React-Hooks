/* Les exercices*/
import React from 'react';
import Time from './ex1';
import ThemeComponent from './ex2';
import UserList from './UserList';


function App() {
  return (
    <div>
      <h1>Mon horloge en temps réel</h1>
      <Time />

      <h2>Composant thème</h2>
      <ThemeComponent />
      <h1>TP - Appel API avec useEffect</h1> <UserList />
    </div>
  );
}

export default App;

/*import { UserProvider, UserProfile, Notifications, NotificationCounter } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <div style={{ fontFamily: "Arial", padding: 20 }}>
        <h1>Mon Application React </h1>
        <UserProfile />
        <Notifications />
        <NotificationCounter />
      </div>
    </UserProvider>
  );
}

export default App;*/
