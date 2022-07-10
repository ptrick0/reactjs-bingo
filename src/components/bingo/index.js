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

    const handleClick = (action) => {
        switch (action) {
            case "lucky":
                var rand;
                let newNumbers = [...bingoState.numbers];

                if (bingoState.luckyCount < 75) {
                    do {
                        rand = Math.floor(Math.random() * 75);
                    } while (newNumbers[rand].isLucky);

                    newNumbers[rand].isLucky = true;

                    setBingoState({
                        ...bingoState,
                        numbers: newNumbers,
                        luckyCount: bingoState.luckyCount+1,
                        lastLucky: newNumbers[rand].value
                    })
                }
                
                break;
            case "reset":
                if(window.confirm("Do you really want to reset ?")) {
                    let newNumbers = [...bingoState.numbers].map((number, i) => {
                        number.isLucky = false;
                        return number;
                    });

                    setBingoState({
                        ...bingoState,
                        numbers: newNumbers,
                        luckyCount: 0,
                        lastLucky: 0
                    })
                }

                break;
            case "test":
                alert("test");
                break;
            default:
                break;
        }
    };

    return (
        <S.BingoWrapper>
            <S.BingoTitle>Bingo</S.BingoTitle>
            <S.BingoHeader>
                <Controls handleClick={ handleClick }/>
                <Dials luckyCount={ bingoState.luckyCount } lastLucky={ bingoState.lastLucky }/>
            </S.BingoHeader>
            <Panel numbers={ bingoState.numbers }/>
        </S.BingoWrapper>
    );
};

export default Bingo;