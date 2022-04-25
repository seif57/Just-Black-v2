import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { User } from "@nextui-org/react";

import {
  NavigationContainer,
  LogoContainer,
  NavigationLinksContainer,
  NavigationLink,
} from "./styles";
const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavigationLinksContainer>
          <NavigationLink to="/shop">SHOP</NavigationLink>
          <NavigationLink to="/sign-In">SIGN IN</NavigationLink>
          <User
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            name="Ariana Wattson"
            pointer="true"
          />
        </NavigationLinksContainer>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
