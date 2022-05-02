import React from "react";
import { Modal } from "@nextui-org/react";
import FormInput from "../FormInput/form-input.component";
import AbcIcon from "@mui/icons-material/Abc";
import MailLockIcon from "@mui/icons-material/MailLock";

const SignUp = ({ userCredentials, setUserCredentials }) => {
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <Modal.Body>
      <FormInput
        name="displayName"
        placeholder="Name"
        contentLeft={<AbcIcon />}
        value={displayName}
        onChange={handleChange}
      />
      <FormInput
        name="email"
        placeholder="Email"
        type="email"
        contentLeft={<MailLockIcon />}
        value={email}
        onChange={handleChange}
      />
      <FormInput
        name="password"
        placeholder="Password"
        password
        value={password}
        onChange={handleChange}
      />
      <FormInput
        name="confirmPassword"
        placeholder="Confirm Password"
        password
        value={confirmPassword}
        onChange={handleChange}
      />
    </Modal.Body>
  );
};

export default SignUp;
