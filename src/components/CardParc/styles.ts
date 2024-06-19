import styled from "styled-components";

export const Container = styled.button`
  position: relative;
  background-color: #fff;
  color: #1f303f;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  width: 500px;
  height: 120px;
  margin-top: 25px;
  margin-bottom: 15px;
  transition: all 0.5s ease-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  cursor: context-menu;
  
  &:hover {
    position: relative;
    top: -5px;
    box-shadow: 2px 2px #000;
    color: #000;
    cursor: context-menu;
    h6{
    font-size: 24px;
    color: #000;
    }
  }

  @media (max-width: 768px) {
    width: 300px;
  }

`;
