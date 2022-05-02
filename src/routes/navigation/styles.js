import styled from "styled-components";
import { Link } from "react-router-dom";
import { User } from "@nextui-org/react";

export const NavigationContainer = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: sticky;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  @media (max-width: 768px) {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 1rem 0;
  font-weight: 800;
  font-size: 1.7rem;
`;

export const NavigationLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "350px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    position: relative;
  }
`;

export const NavigationLink = styled(Link)`
  margin: 0 2rem;
  cursor: pointer;
  color: black;

  &:hover {
    transform: scale(1.1);
    font-weight: 500;
    transition: transform 0.1s ease-in;
  }
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;
export const MenuContainer = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;
export const UserStyled = styled(User)`
  padding: 10px 15px;
`;
