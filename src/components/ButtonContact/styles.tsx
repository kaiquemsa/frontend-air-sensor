import styled from "styled-components";

export const Container = styled.button`
  background-color: #1f303f;
  border: 1px solid #1f303f;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  width: 200px;
  height: 60px;
  border-radius: 100px;
  margin-top: 50px;
  transition: all 0.25s ease-out;

  &:hover {
    background-color: #f8fdff;
    color: #1f303f;
  }


  @media (max-width: 768px) {
    width: 250px;
    height: 40px;
    margin-top: 10px;
  }

  
`;
