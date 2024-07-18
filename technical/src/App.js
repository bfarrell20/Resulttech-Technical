import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isSignup, setIsSignup] = useState(false);

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const handleSignup = (userData) => {
    setIsSignup(false);
    setUser(userData);
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome, {user.username}!</h1>
        </div>
      ) : (
        <div>
          {isSignup ? (
            <Signup onSignup={handleSignup} />
          ) : (
            <Login onLogin={handleLogin} onToggleSignup={() => setIsSignup(true)} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
