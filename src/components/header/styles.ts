import styled from "styled-components";

export const Box = styled.header`
    display: flex;
    padding: 10px 40px;
    width: 100%;
    height: 80px;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    background-color: #fff;
    z-index: 1;
    box-shadow: 0 4px 6px 0 rgba(0,0,0,.4);
    transition: all 0.5s ease-out;

    &.activyColor {
        background-color: #1f303f;
        opacity: 0.7;
        box-shadow: 0;
        img{
            width: 70px;
            height: 50px;
        }
    }

    @media (max-width: 768px){
        width: 100%;
        padding: 5px 20px;

        img {
            width: 50px;
            height: 30px;
        }

        &.activyColor {
        background-color: #1f303f;
        opacity: 0.7;
        box-shadow: 0;
        img{
            width: 40px;
            height: 25px;
        }
    }
    }
`;