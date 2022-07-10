import styled from "styled-components";

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0e62be;
    box-shadow: 2px 2px 0px 2px #0d4599;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 2em;
    padding: 5px 15px;
    transition: 0.2s ease-in-out;
    
    &.success {
        background-color: #00a82b;
        box-shadow: 2px 2px 0px 2px #007d13;
        color: white;
    }

    &.danger {
        background-color: #bf151a;
        box-shadow: 2px 2px 0px 2px #930b00;
        color: white;
    }

    &:hover {
        cursor: pointer;
        background-color: #0d4599;

        &.success {
            background-color: #007d13;
        }

        &.danger {
            background-color: #930b00;
        }
    }

    & + & {
        margin-left: 1em;
    }
`;

export {
    Button
};