import React from "react";
import { Styled, StyledDDM } from "./styled";
import { useAuth } from "../../contexts/authcontext";

const Navbar = () => {
    const [visibility, setVisibility] = React.useState(false)
    const {user} = useAuth()
    const handle = () => {
        setVisibility(!visibility)
        console.log('visibility')
    }
    return (
        <Styled arrow={visibility}>
            <a href="#">
                <span>BookStore</span>
            </a>
            <ul >
                <li >
                    <a href="#">about</a>
                </li>
                <li >
                    <a href="#">search</a>
                </li>
                <li >
                    <a href="#">puplish</a>
                </li>
            </ul>
            <div onClick={handle}>
                <span>{user?.username}</span>
                <div className="arrow"><span>v</span></div>
            </div>
            <DDM visibility={visibility}></DDM>
        </Styled>
    );
};

export default Navbar;

const DDM = (props) => {
    const {logout} = useAuth()
    return (
        <StyledDDM visibility={props.visibility} style={{paddingLeft: '0px'}}>
            <span>profile</span>
            <hr/>
            <span onClick={logout}>logout</span>
        </StyledDDM>
    )
}