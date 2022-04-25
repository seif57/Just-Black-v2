import { signInWithGooglePopUp } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopUp();
    console.log(response); //response is the user object
  };

  return (
    <div>
      <h1>SignIn</h1>;
      <button onClick={logGoogleUser}>Sign In With Google</button>
    </div>
  );
};

export default SignIn;
