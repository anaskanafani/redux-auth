import "./App.css";
import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserEmail,
  selectUserName,
  setLogin,
  setLogout,
} from "./redux/userSlice";
import { auth, provider } from "./firebase";

function App() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  const handleLogin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(
          setLogin({
            userName: result.user.displayName,
            userEmail: result.user.email,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setLogout());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {userName ? (
          <div>
            <h1>Welcome, {userName}!</h1>
            <p>Your email is {userEmail}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <h1>Welcome</h1>
            <button onClick={handleLogin}>Login</button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
