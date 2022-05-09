import React, { useState, useContext } from "react";
import { Modal, Button, Text, Row, Loading } from "@nextui-org/react";
import GoogleIcon from "@mui/icons-material/Google";
import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import SignUp from "../../components/sign-up-form/sign-up-form.component";
import SignIn from "../../components/sign-in-form/sign-in-form.component";
import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [visible, setVisible] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isDisabeld, setDisabeld] = useState(false);
  const [isGoogleDisabeld, setGoogleDisabeld] = useState(false);
  const [userCredentials, setUserCredentials] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = userCredentials;
  const { setCurrentUser } = useContext(UserContext);

  const closeHandler = () => setVisible(false);

  const resetFormFields = () => {
    setUserCredentials(defaultFormFields);
  };

  const showModal = () => {
    setVisible(true);
    resetFormFields();
  };

  const switchMode = () => {
    setIsSignUp((prev) => !prev);
    console.log(isSignUp);
  };

  const signInWithGoogle = async () => {
    setGoogleDisabeld(true);
    try {
      const { user } = await signInWithGooglePopUp();
      await createUserDocumentFromAuth(user);
      closeHandler();
    } catch (error) {
      console.log(error);
    }
    setGoogleDisabeld(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabeld(true);

    try {
      if (isSignUp) {
        if (password !== confirmPassword) {
          alert("passwords don't match");
          return;
        }
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        setCurrentUser(user);
        await createUserDocumentFromAuth(user, { displayName });
      } else {
        const { user } = await signInAuthUserWithEmailAndPassword(
          email,
          password
        );
        setCurrentUser(user);
        closeHandler();
      }
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          alert("Invalid email");
          break;
        case "auth/user-not-found":
          alert("User not found");
          break;
        case "auth/wrong-password":
          alert("Wrong password");
          break;
        default:
          console.log(error);
          break;
      }
    }
    setDisabeld(false);
  };

  return (
    <div>
      <Button
        css={{
          color: "white",
          backgroundColor: "black",
        }}
        auto
        onClick={showModal}>
        Sign In
      </Button>

      <Modal
        closeButton
        preventClose
        aria-labelledby="sign-in-modal"
        open={visible}
        onClose={closeHandler}
        autoMargin>
        <form onSubmit={handleSubmit}>
          <Modal.Header>
            <Text id="modal-title" size={18}>
              Welcome to &nbsp;
              <Text b size={18}>
                JustBlack
              </Text>
            </Text>
          </Modal.Header>

          {isSignUp ? (
            <SignUp
              userCredentials={userCredentials}
              setUserCredentials={setUserCredentials}
            />
          ) : (
            <SignIn
              userCredentials={userCredentials}
              setUserCredentials={setUserCredentials}
            />
          )}

          <Modal.Footer autoMargin>
            <Row justify="space-between">
              <Button auto flat color="error" onClick={closeHandler}>
                Close
              </Button>
              <Button
                css={{
                  color: "white",
                  backgroundColor: "black",
                }}
                shadow
                type="submit"
                auto
                disabled={isDisabeld}
                animated>
                {isSignUp && isDisabeld ? (
                  <Loading color="currentColor" type="points" size="md" />
                ) : isSignUp ? (
                  "Sign Up"
                ) : (
                  "Sign In"
                )}
              </Button>
              <Button
                disabled={isGoogleDisabeld}
                icon={<GoogleIcon />}
                flat
                auto
                onClick={signInWithGoogle}>
                {isGoogleDisabeld ? (
                  <Loading color="primary" type="points" size="md" />
                ) : (
                  "Google Sign In"
                )}
              </Button>
            </Row>
            <Row justify="center">
              <Button light color="black" flat onClick={switchMode}>
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Row>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default Auth;
