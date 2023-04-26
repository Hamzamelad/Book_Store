import { Styled, StyledDDM } from "./styled";
import { useAuth } from "../../contexts/authcontext";
import { useData } from "../../contexts/datacontext";
import {
    StyledMain,
    StyledContainer,
    StyledSidebar,
    StyledCard,
} from "./styled";

import React from "react";

const Main = () => {
    return (
        <StyledMain>
            <StyledSidebar>
                {[1, 1, 1, 1].map(() => (
                    <>
                        <h3>test</h3>
                        <ul id="{{a}}">
                            <li>check</li>
                            <li>check</li>
                            <li>check</li>
                            <li>check</li>
                        </ul>
                    </>
                ))}
            </StyledSidebar>
            <Container></Container>
        </StyledMain>
    );
};

export default Main;

const Container = () => {
    const { books, songs} = useData();
    return (
        <StyledContainer id="a1">
            <label htmlFor="a1"> all books</label>
            <div className="div">
                {/* {books?.map((b) => (
                    <Card book={b}/>
                ))} */}
                {songs?.map((b) => (
                    <Song song={b} />
                ))}
            </div>
        </StyledContainer>
    );
};

const Card = (props) => {
    return (
        <StyledCard style={{ flexDirection: "column" }}>
            <div className="img-div">
                <img
                    src={`http://localhost:8000/${props.book.cover}`}
                    alt="img"
                />
            </div>
            <div className="title-div ">
                <p>{props.book.title}</p>
            </div>
            <div className="prize-div">
                <span>$13</span>
            </div>
        </StyledCard>
    );
};

const Song = (props) => {
    return (
        <div style={{ width: "350px", height: "150px" , backgroundColor: 'green'}}>
            <span>{props.song.title}</span>
            <audio controls>
                <source src={props.song.audio} type="audio/ogg" />
                <source src={props.song.audio}  type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};
