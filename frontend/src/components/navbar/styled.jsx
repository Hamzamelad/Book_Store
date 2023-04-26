import styled from "styled-components";

export const Styled = styled.header`
    position: relative;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 0 10px;
    border-bottom: solid 1px black;
    font-size: x-large;

    ul {
        width: 40%;
        display: flex;
        justify-content: space-around;
        list-style-type: none;

        li {
            margin-left: 15px;
        }
    }
    div {
        display: flex;
        border: 1px solid black;
        padding-left: 5px;

        .arrow {
            background-color: black;
            width: 20px;
            color: white;
            text-align: center;
            font-family: Arial, Helvetica, sans-serif;
            margin-left: 5px;

            span {
                transform: ${props => props.arrow ? 'rotate(180deg)' : 'none'};
            }
        }

        &:hover {
            cursor: pointer;
        }
    }
`;

export const StyledDDM = styled.div`
    visibility: ${props => props.visibility ? 'visible' : 'hidden'};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    background-color: #fff;
    width: 112px;
    height: 65px;
    top: 53px;
    right: 10px;

    span {
        width: 100%;
        text-align: center;
        padding-bottom: 5px;

        &:hover {
            background-color: whitesmoke;
            cursor: pointer;
        }
    }

    hr {
        margin: 0px;
        height: 1px;
        width: 100%;
        color: gray;
        background-color: #424141;
    }
`;
