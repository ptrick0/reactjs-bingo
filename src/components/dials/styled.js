import styled from "styled-components";

const DialsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const DialLabel = styled.p`
    font-size: 1.5em;
    margin: 0.5em;
`;

const DialContent = styled.div`
    width: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    font-size: 2em;
    background-color: #0e62be;
    box-shadow: 2px 2px 0px 1.5px #0d4599;
    color: white;    
`;

const Dial = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.2s ease-in-out;

    & + & {
        margin-left: 1em;
    }

    &.changed {
        animation: twinkle 0.3s ease-in-out 1; 
    }

`;

export {
    DialsWrapper,
    DialLabel,
    DialContent,
    Dial
};