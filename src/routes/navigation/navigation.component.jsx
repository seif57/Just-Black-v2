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
  const { currentUser } = useContext(UserContext);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  return (
    <>
      <NavigationContainer>
        <LogoContainer onClick={toggleMenu} to="/">
          <CrwnLogo />
        </LogoContainer>
        <MenuContainer>
          {isOpen ? (
            <CloseIcon fontSize="large" onClick={toggleMenu} />
          ) : (
            <MenuIcon fontSize="large" onClick={toggleMenu} />
          )}
        </MenuContainer>
        <NavigationLinksContainer isOpen={isOpen}>
          <NavigationLink onClick={toggleMenu} to="/shop">
            Shop
          </NavigationLink>
          {currentUser ? (
            <>
              <NavigationLink onClick={signOutUser} to="/">
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
