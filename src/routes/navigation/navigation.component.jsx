import { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import {
  NavigationContainer,
  LogoContainer,
  NavigationLinksContainer,
  NavigationLink,
  MenuContainer,
  UserStyled,
  AuthContainer,
} from "./styles";
import Auth from "../../routes/authentication/auth.component";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <MenuContainer>
          {isOpen ? (
            <CloseIcon
              fontSize="large"
              onClick={() => setIsOpen((prev) => !prev)}
            />
          ) : (
            <MenuIcon
              fontSize="large"
              onClick={() => setIsOpen((prev) => !prev)}
            />
          )}
        </MenuContainer>
        <NavigationLinksContainer isOpen={isOpen}>
          <NavigationLink to="/shop">Shop</NavigationLink>
          {currentUser ? (
            <>
              <NavigationLink onClick={signOutHandler} to="/">
                Sign Out
              </NavigationLink>
              <UserStyled
                bordered
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                name="Ariana Wattson"
                pointer="true"
                zoomed="true"
                text="A"
              />
            </>
          ) : (
            <AuthContainer>
              <Auth />
            </AuthContainer>
          )}
        </NavigationLinksContainer>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
