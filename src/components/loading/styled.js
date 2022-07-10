import styled from "styled-components";

const LoadingWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Spinner = styled.img`
    animation: rotate-image 3s linear 0s infinite;
`;

export {
    LoadingWrapper,
    Spinner
};