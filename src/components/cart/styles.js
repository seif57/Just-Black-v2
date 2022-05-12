import styled from "styled-components";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  cursor: pointer;
  margin-right: 1rem;
  background-color: transparent;
  border: none;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 32px;
  right: -9px;
  background-color: #a3a3a3;
  color: white;
  padding: 0px 5px;
  border-radius: 50%;
`;
