import styled from "styled-components";

const BingoWrapper = styled.div`
    width: calc(100vw - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 50px;

    & > div:not(:last-child) {
        margin-bottom: 1em;
    }
`;

const BingoHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    & > div:not(:last-child) {
        margin-right: 1em;
    }
`;

const BingoTitle = styled.h1`
    font-size: 4em;
    font-weight: normal;
`;

export {
    BingoWrapper,
    BingoHeader,
    BingoTitle
};