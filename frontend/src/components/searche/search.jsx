import React from "react";
import axios from "axios";
import { Styled } from "./styled";
import { useAuth } from "../../contexts/authcontext";
import { useData } from "../../contexts/datacontext";

const Search = () => {
    const {user} = useAuth()
    const {setBooks} = useData()

    const category_e = React.useRef()
    const input = React.useRef()

    const handle = () => {
        const x = {
            "category_e": category_e.current.value,
            "title_contains": input.current.value
        }
        axios
        .get('http://localhost:8000/api/filter/ido', {
            params: {
                "category_e": category_e.current.value,
                "title_contains": input.current.value
            },
            headers: {
                "Content-Type": "Application/json",
                Authorization: `Bearer ${localStorage.getItem(
                    "access"
                )}`,
            },
        })
        .then((res) => {
            console.log(res)
            setBooks(res.data);
        })
        .catch((err) => console.log(err));
    }
    return (
        <Styled>
            <div action="" onSubmit={(e) => console.log(e)}>
                <select name="category_e" ref={category_e} >
                    <option value="all">all</option>
                    <option value="history">history</option>
                    <option value="science">science</option>
                </select>
                <input
                    name="title_contains"
                    type="text"
                    ref={input}
                />
                <button onClick={handle}>Q</button>
            </div>
        </Styled>
    );
};

export default Search;