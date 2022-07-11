import React, { Fragment, useState } from "react";
import Controls from "../controls";
import Dials from "../dials";
import Modal from "../modal";
import Panel from "../panel";
import * as S from './styled';

const Bingo = () => {
    const [ bingoState, setBingoState ] = useState({
        numbers: [...Array(75).keys()].map((value, index) => {
            return {value: index+1, isLucky: false}
        }),
        luckyCount: 0,
        lastLucky: 0,
        modalOpen: false
    });

    const handleClick = (action) => {
        switch (action) {
            case "lucky":
                var rand;
                var newNumbers = [...bingoState.numbers];

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
            case "modal":
                setBingoState({
                    ...bingoState,
                    modalOpen: true
                });
                break;
            case "close":
                setBingoState({
                    ...bingoState,
                    modalOpen: false
                });
                break;
            case "reset":
                var newNumbers = [...bingoState.numbers].map((number, i) => {
                    number.isLucky = false;
                    return number;
                });

                setBingoState({
                    ...bingoState,
                    numbers: newNumbers,
                    luckyCount: 0,
                    lastLucky: 0,
                    modalOpen: false
                });
                break;
            default:
                break;
        }
    };

    return (
        <S.BingoWrapper>
            {bingoState.modalOpen ? 
                (<Modal 
                    title="Reset confirmation" 
                    message="Do you really want to reset ?" 
                    onConfirm={() => handleClick("reset")} 
                    onClose={() => handleClick("close")}/>)
            :
                (<Fragment />)
            }
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