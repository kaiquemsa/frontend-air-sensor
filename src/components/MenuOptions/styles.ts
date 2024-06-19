import styled from "styled-components";

export const Container = styled.li`
    display: inline-block;
    margin-right: 10px;
    margin-left: 10px;
    font-weight: 500;
    transition: color 0.25s ease;

    a {
        color: #1E255E;
        &[data-selected="true"] {
            color: #d32034;
            
        }
        &:hover {
            color: #d32034;
            opacity: 0.7;
            cursor: pointer;
        }
    }

    @media (max-width: 768px) {
        font-size: 12px;
        margin-right: 4px;
        margin-left: 4px;
    }

`;