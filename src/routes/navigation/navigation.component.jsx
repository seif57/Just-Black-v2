import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { User } from "@nextui-org/react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

import {
  NavigationContainer,
  LogoContainer,
  NavigationLinksContainer,
  NavigationLink,
  MenuContainer,
} from "./styles";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <NavigationLink to="/sign-in">Sign In</NavigationLink>
          <User
            bordered
            color="gradient"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            name="Ariana Wattson"
            pointer="true"
            zoomed="true"
            text="A"
          />
        </NavigationLinksContainer>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
