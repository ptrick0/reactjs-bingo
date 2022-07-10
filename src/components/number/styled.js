import styled from "styled-components";

const NumberWrapper = styled.div`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    color: #151515;
    margin: 3px 3px;
    background: rgba(255, 255, 255, 0.35);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
    transition: 0.5s ease-in-out;
    
    &.lucky {
        background: rgba(206, 144, 0, 1);
        animation: twinkle 1s ease-in-out 2;
        animation-delay: 0.5s;
    }
`;

export {
    NumberWrapper
};