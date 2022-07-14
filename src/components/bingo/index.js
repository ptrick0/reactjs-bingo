import React, { Fragment, useState } from "react";
import Controls from "../controls";
import Dials from "../dials";
import Modal from "../modal";
import Panel from "../panel";
import Button from "../button";
import * as S from './styled';
import { useNavigate } from "react-router-dom";

const Bingo = () => {
    const navigate = useNavigate();

    const [ bingoState, setBingoState ] = useState({
        numbers: [...Array(75).keys()].map((value, index) => {
            return {value: index+1, isLucky: false}
        }),
        luckyCount: 0,
        lastLucky: 0,
        resetModalOpen: false,
        backModalOpen: false
    });

    const hasModalOpen = () => {
        return bingoState.backModalOpen || bingoState.resetModalOpen;
    };

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
            case "reset-modal":
                if (!hasModalOpen()) {
                    setBingoState({
                        ...bingoState,
                        resetModalOpen: true
                    });
                }
                break;
            case "back-modal":
                if (!hasModalOpen()) {
                    setBingoState({
                        ...bingoState,
                        backModalOpen: true
                    });
                }
                break;
            case "close":
                setBingoState({
                    ...bingoState,
                    backModalOpen: false,
                    resetModalOpen: false,
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
                    resetModalOpen: false
                });
                break;
            default:
                break;
        }
    };

    return (
        <S.BingoWrapper>
            {bingoState.backModalOpen ? 
                (<Modal 
                    title="Back confirmation" 
                    message="Do you really want back to menu ?" 
                    onConfirm={() => navigate("/")} 
                    onClose={() => handleClick("close")}/>)
            :
                (<Fragment />)
            }
            {bingoState.resetModalOpen ? 
                (<Modal 
                    title="Reset confirmation" 
                    message="Do you really want to reset ?" 
                    onConfirm={() => handleClick("reset")} 
                    onClose={() => handleClick("close")}/>)
            :
                (<Fragment />)
            }
            <S.BingoHeader>
                <Button className="" onClick={() => handleClick("back-modal")}>Back to Menu</Button>
                <Dials luckyCount={ bingoState.luckyCount } lastLucky={ bingoState.lastLucky }/>
                <Controls>
                    <Button className="success" onClick={() => handleClick("lucky")}>Lucky</Button>
                    <Button className="danger" onClick={() => handleClick("reset-modal")}>Reset</Button>
                </Controls>
            </S.BingoHeader>
            <Panel numbers={ bingoState.numbers }/>
        </S.BingoWrapper>
    );
};

export default Bingo;