import React from "react";
import { Modal } from "@nextui-org/react";
import FormInput from "../FormInput/form-input.component";
import MailLockIcon from "@mui/icons-material/MailLock";

const SignIn = ({ userCredentials, setUserCredentials }) => {
  const { email, password } = userCredentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <Modal.Body>
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
    </Modal.Body>
  );
};

export default SignIn;
