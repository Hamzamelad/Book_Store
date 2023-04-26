import styled from "styled-components";

export const StyledMain = styled.div`
    display: flex;
`;

export const StyledContainer = styled.div`
    flex: 1;
    padding: 20px;

    label {
        font-size: larger;
    }

    .div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        border: 1px gray solid;
        padding: 15px 0;
    }
`;

export const StyledSidebar = styled.div`
    width: 25%;
    border-right: solid 1px black;

    h1 {
        margin-bottom: 0;
    }

    ul {
        margin-top: 0;
    }
`;

export const StyledCard = styled.div`
    height: 250px;
    border: solid 1px black;
    width: 165px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;

    .img-div {
        height: 120px;
        width: 85px;
        border: solid 1px black;

        img {
            width: 100%;
            height: 100%;
        }
    }
    .title-div {
        display: flex;
        overflow: hidden;
        font-size: small;
        text-align: center;

        p {
            display: flex;
        }
    }
    .prize-div {
        padding: 0 5px;

        span {
            text-align: justify;
        }
    }
`;
