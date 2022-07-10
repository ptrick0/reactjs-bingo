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
    background-image: radial-gradient(#539ef2, #2082ee, #07315f);

    &.lucky {
        background-image: radial-gradient(#ffe26f, #f4c400, #c49c00);
        color: #555555;
    }
`;

export {
    NumberWrapper
};