import styled from 'styled-components';

export const MenuList = styled.ul`
    margin-left:auto;
    padding-left: 8px;
    padding-right: 8px;
    display: flex;
    align-items: center;
    border: 2px solid #f9f4f5;
    background-color: #f9f4f5;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    border-radius: 50px;
    height: 50px;

    @media (max-width: 768px) {
        margin-left: 20px;
        width: 300px; 
    }
    
`;


