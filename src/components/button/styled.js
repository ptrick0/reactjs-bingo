import styled from "styled-components";

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0e62be;
    box-shadow: 3px 3px #0e4eaa;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 2em;
    padding: 5px 15px;
    transition: 0.2s ease-in-out;
    
    &.success {
        background-color: #00bb2f;
        box-shadow: 3px 3px #00a71b;
        color: white;
    }

    &.danger {
        background-color: #be0e12;
        box-shadow: 3px 3px #aa0e00;
        color: white;
    }

    &:hover {
        cursor: pointer;
        background-color: #0e4eaa;

        &.success {
            background-color: #00a71b;
        }

        &.danger {
            background-color: #aa0e00;
        }
    }

    & + & {
        margin-left: 1em;
    }
`;

export {
    Button
};