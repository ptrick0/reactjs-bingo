import React from "react";
import * as S from './styled';

const Dials = (props) => {
    return (
        <S.DialsWrapper>
            <S.Dial>
                <S.DialLabel>Lucky Count</S.DialLabel>
                <S.DialContent>{props.luckyCount}</S.DialContent>
            </S.Dial>

            <S.Dial>
                <S.DialLabel>Last Lucky</S.DialLabel>
                <S.DialContent>{props.lastLucky}</S.DialContent>
            </S.Dial>
        </S.DialsWrapper>
    );
};

export default Dials;