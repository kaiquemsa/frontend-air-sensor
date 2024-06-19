import styled from "styled-components";

export const Container = styled.button`
  position: relative;
  background-color: #fff;
  color: #1f303f;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  border: 1px solid #000;
  width: 270px;
  height: 120px;
  margin-top: 25px;
  transition: all 0.5s ease-out;
  cursor: context-menu;
  
  &:hover {
    position: relative;
    top: -5px;
    box-shadow: 2px 2px #000;
    color: #000;
    h6{
    font-size: 24px;
    color: #000;
    cursor: context-menu;
    }
  }
`;
