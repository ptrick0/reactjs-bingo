import React, { useState } from "react";
import Controls from "../controls";
import Dials from "../dials";
import Panel from "../panel";
import * as S from './styled';

const Bingo = () => {
    const [ bingoState, setBingoState ] = useState({
        numbers: [...Array(75).keys()].map((value, index) => {
            return {value: index+1, isLucky: false}
        }),
        luckyCount: 0,
        lastLucky: 0
    });

    return (
        <S.BingoWrapper>
            <S.BingoHeader>
                <Controls />
                <Dials luckyCount={ bingoState.luckyCount } lastLucky={ bingoState.lastLucky }/>
            </S.BingoHeader>
            <Panel numbers={ bingoState.numbers }/>
        </S.BingoWrapper>
    );
};

export default Bingo;