import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  main {
    flex: 1;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
 }

  }
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-top: 100px;
  align-items: center;
  max-width: 1000px;

   div {
    width: 50%;
  }

  h1 {
    color: #1f303f;
    font-size: 56px;
    font-weight: bold;
  }

  h6 {
    color: rgba(30, 37, 94, 0.7);
    font-size: 16px;
    font-weight: normal;
    padding-right: 150px;
    margin-top: 25px;
  }

  @media (max-width: 768px) {
      display: flex;
   text-align: center;

   div {
    width: 100%;
   }

   h1 {
    color: #1f303f;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    margin-top: 40px;

  }

  h6 {
    color: rgba(30, 37, 94, 0.7);
    font-size: 18px;
    font-weight: normal;
    margin-top: 25px;
    text-align: center;
    padding-right: 10px;
    padding-left: 10px;
  }

 }

`;

export const ColumnImage = styled.div`

  text-align: right;
  position: relative;
  img {
    margin-left: 104px;
  }

  @media (max-width: 768px) {
      text-align: center;

      img {
    margin-left: 0px;
    width: 300px;
  }

 }

`;

export const BoxNew = styled.div`
  width: 100%;
  background-color: #1f303f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img{
    border-radius: 20px;
    margin-top: 8px;
    margin-right: 0px;
    margin-bottom: 8px;
  }
  h1 {
    color: #f2f4f3;
    font-size: 34px;
    font-weight: bold;
    margin: 25px;
  }
  h6 {
    color: #f2f4f3;
    font-size: 16px;
    font-weight: normal;
  }
  @media (max-width: 768px) {
   img{
    width: 300px;
   }
   text-align: center;
 }
`;



export const BoxInter = styled.div`
  position: absolute;
  top: 50px;
  left: 0px;
  width: 500px;
  height: 400px;
  background-color: #1f303f;
  border-radius: 20px;
  text-align: justify;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  h1 {
    color: #f2f4f3;
    font-size: 34px;
    font-weight: bold;
    margin: 25px;
  }
  h6 {
    color: #f2f4f3;
    font-size: 16px;
    font-weight: normal;
    margin: 25px;
  }
  @media (max-width: 768px) {
    position: static;
    margin-top: 10px;
    width: 380px;
    height: 340px;

    h1{
      font-size: 22px;
    }

    h6{
      font-size: 18px;
    }
    
    box-shadow: none;


  }


`;

export const BoxNew2 = styled.div`
  width: 1100px;
  text-align: center;
  h1 {
    color: #1f303f;
    font-size: 34px;
    font-weight: bold;
    margin: 25px;
  }
  h6 {
    color: rgba(30, 37, 94, 0.7);
    font-size: 16px;
    font-weight: normal;
    margin: 25px;
  }
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
`;
export const BoxNew3 = styled.div`
  width: 1100px;
  text-align: start;
  h1 {
    color: #1f303f;
    font-size: 34px;
    margin: 25px;
  }
  h6 {
    color: #000;
    font-size: 16px;
    font-weight: normal;
    margin: 25px;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CircleProgress = styled.div`
  width: 200px; 
  text-align: center;
  h6 {
    color: #000;
    font-size: 16px;
    font-weight: normal;
    text-align: center;
  }
`;

export const CircleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 16px;
  max-width: 1000px;
    @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  gap: 20px;
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 20px;
  max-width: 1000px;
    h6{
    font-size: 24px;
    color: #1f303f;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerImage = styled.div` 
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  width: 1100px;
  max-width: 1100px;


  @media (max-width: 768px) {
    flex-direction: column-reverse;
    width: 100%;

  }
`;

export const ParcContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  gap: 50px;
  margin-left: 12%;
  margin-right: 12%;
  margin-bottom: 20px;
  max-width: 1000px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 200px;
  max-width: 200px;
  padding-left: 10px;
  h1{
    font-size: 24px;
    color: #000;
    margin:0px;
  }
  a{
    font-weight: 500;
    color: #1f303f;
    text-align: justify;
    max-width: 100px;
  }

  @media (max-width: 768px) {
    a {

    }
  }

`;

export const ImgAEAS = styled.img`
  width: 80px;
  height: 100px;
  margin-right: 4px;
`;