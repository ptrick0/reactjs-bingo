import styled from "styled-components";

const BingoWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > div:not(:last-child) {
        margin-bottom: 1em;
    }
`;

const BingoHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    & > div:not(:last-child) {
        margin-right: 1em;
    }
`;

export {
    BingoWrapper,
    BingoHeader
};