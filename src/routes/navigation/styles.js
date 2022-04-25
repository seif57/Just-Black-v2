import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: sticky;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
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
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    position: relative;
  }
`;

export const NavigationLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: black;
  border-bottom: 2px solid white;

  &:hover {
    border-bottom: 2px solid black;
    transition: all 0.1s ease-in-out;
  }
`;
export const MenuContainer = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
