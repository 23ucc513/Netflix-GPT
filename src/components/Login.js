import Header from "./Header";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";


const Login = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const navigate = useNavigate();
  // we create references which i want to refer to email and password input box
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const getCustomErrorMessage = (code) => {
    switch (code) {
      case "auth/invalid-credential":
        return "Invalid email or password";

      case "auth/user-not-found":
        return "User not found. Please sign up";

      case "auth/wrong-password":
        return "Incorrect password";

      case "auth/email-already-in-use":
        return "Email already registered";

      case "auth/weak-password":
        return "Password must be at least 6 characters";

      case "auth/invalid-email":
        return "Invalid email format";

      default:
        return "Something went wrong. Try again";
    }
  };
  const handleButtonClick = () => {
    // validate the form data
    // checkValidData(email, password)
    const message = checkValidData(
      // name.current?.value,
      email.current.value,
      password.current.value,
    );
    setErrorMessage(message); // if my data is valid then this value = null
    if (message) return;
    // Sign / Sign Up
    if (!isSignInForm) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current?.value,
            photoURL: "https://avatars.githubusercontent.com/u/149107722?v=4",
          })
            .then(() => {
              // Profile updated!
              // Dispatch our actions
              const { uid, email, displayName, photoURL } = auth.currentUser;
              // update the store
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const message = getCustomErrorMessage(error.code);
          setErrorMessage(message);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const message = getCustomErrorMessage(error.code);
          setErrorMessage(message);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ea4545e-42d3-4ebf-82fd-0e1984dc6375/web/IN-en-20260316-TRIFECTA-perspective_789c5633-3949-4708-8e6c-8ddfd22ed696_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="Password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="py-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
