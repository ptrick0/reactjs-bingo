import React from "react";
import * as S from './styled';

const Button = (props) => {
    return (
        <S.Button 
            className={props.className}
            onClick={props.onClick}
        >
            {props.children}
        </S.Button>
    )
};

export default Button;