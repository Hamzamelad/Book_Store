import styled from "styled-components";

export const Styled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: solid 1px black;
    padding: 5px;

    div {
        display: flex;
        height: 37px;

        select {
            text-align: center;
        }
        input {
            width: 250px;
        }
    }
`;
