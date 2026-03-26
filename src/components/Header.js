import { useNavigate} from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";



const Header = ({ logoSize = "w-40" }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

    useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const {uid, email, displayName, photoURL} = user;
        // update the store
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);


  return (
    <div className="absolute w-screen px-8 py-5 bg-gradient-to-b from-black z-10 flex items-center justify-between">
      <img
        className={logoSize}
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="logo"
      />
      {user && (
        <div className="flex items-center gap-3">
          <img className="w-10 h-10" alt="usericon" src={user?.photoURL} />
          <button onClick={handleSignOut} className="text-white font-medium">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
