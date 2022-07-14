import React from "react";
import * as S from './styled';

const Controls = (props) => {

    return (
        <S.ControlsWrapper>
            {props.children}            
        </S.ControlsWrapper>
    );
};

export default Controls;