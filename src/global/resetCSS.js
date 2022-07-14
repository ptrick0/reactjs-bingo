import { createGlobalStyle } from "styled-components";

export const ResetCSS = createGlobalStyle`
    body {
        margin: 0px;
        padding: 0px;
        font-family: "Comic", "Comic Sans", sans-serif;
        background-color: #ffffff;

        /* hide scrollbar but allow scrolling */
        -ms-overflow-style: none; /* for Internet Explorer, Edge */
        scrollbar-width: none; /* for Firefox */
        overflow-y: scroll;
        
        &::-webkit-scrollbar {
            display: none; /* for Chrome, Safari, and Opera */
        }
    }

    @keyframes rotate-image {
        0% {
            transform: rotate(0deg);
        }
        25% {
            transform: rotate(90deg);
        }
        50% {
            transform: rotate(180deg);
        }
        75% {
            transform: rotate(270deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes twinkle {
        0% {
            filter: brightness(100%);
        }
        50% {
            filter: brightness(80%);
        }
        100% {
            filter: brightness(100%);
        }
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }
`;