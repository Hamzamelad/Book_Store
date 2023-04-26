import styled from "styled-components";

export const StyledLogin = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 430px;
    height: 300px;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    .head {
        flex: 1;
        width: 100%;
        height: 55px;
        background-color: #181717;
        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
            color: white;
        }
    }
    .inps {
        flex: 3;
        width: 100%;

        display: flex;
        flex-direction: column;
        .inp {
            width: 100%;
            flex: 1;

            display: flex;
            justify-content: center;

            div {
                width: 80%;
                height: 100%;


                label {
                    display: block;
                    font-size: large;
                    margin-bottom: 5px;
                }
                input {
                    width: 100%;
                    padding: 5px;
                    margin: 0;
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    -o-box-sizing: border-box;
                    -ms-box-sizing: border-box;
                    box-sizing: border-box;
                    border-radius: 4px;
                }
            }
        }
    }
    .btn {
        flex: 1.2;
        width: 100%;
        display: flex;
        justify-content: center;

        button {
            width: 33%;
            height: 35px;
            background-color: #181717;
            color: white;
            font-size: large;
        }
    }
`;
