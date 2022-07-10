import React, { useEffect, useState } from "react";
import * as S from './styled';

const Dials = (props) => {
    const luckyCount = props.luckyCount;
    const lastLucky = props.lastLucky;
    const [ changedState, setChangedState ] = useState(false);

    useEffect(() => {
        setChangedState(true);
        setTimeout(() => {
            setChangedState(false);
        }, 500);
    }, [luckyCount, lastLucky])

    return (
        <S.DialsWrapper>
            <S.Dial className={changedState ? "changed" : ""}>
                <S.DialLabel>Lucky Count</S.DialLabel>
                <S.DialContent>{luckyCount}</S.DialContent>
            </S.Dial>

            <S.Dial className={changedState ? "changed" : ""}>
                <S.DialLabel>Last Lucky</S.DialLabel>
                <S.DialContent>{lastLucky}</S.DialContent>
            </S.Dial>
        </S.DialsWrapper>
    );
};

export default Dials;