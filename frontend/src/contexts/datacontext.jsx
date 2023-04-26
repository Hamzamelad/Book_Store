import React, { createContext, useContext } from "react";
import axios from "axios";
import { useAuth } from "./authcontext";

const DataContext = createContext("K");
export const useData = () => useContext(DataContext);

export const DataProvider = (props) => {
    const { tokens } = useAuth();
    const [books, setBooks] = React.useState(null);
    const [songs, setSongs] = React.useState(null);

    const getBooks = () => {
        if (tokens) {
            axios
                .get("http://localhost:8000/api/books", {
                    headers: {
                        "Content-Type": "Application/json",
                        Authorization: `Bearer ${localStorage.getItem(
                            "access"
                        )}`,
                    },
                })
                .then((res) => {
                    setBooks(res.data);
                    console.log(books);
                })
                .catch((err) => console.log(err));
        }
    };

    const getSongs = () => {
        if (tokens) {
            axios
                .get("http://localhost:8000/api/songs", {
                    headers: {
                        "Content-Type": "Application/json",
                        Authorization: `Bearer ${localStorage.getItem(
                            "access"
                        )}`,
                    },
                })
                .then((res) => {
                    setSongs(res.data);
                    console.log(songs);
                })
                .catch((err) => console.log(err));
        }
    };

    const value = {
        getBooks: getBooks,
        books: books,
        songs: songs,
        setBooks: setBooks,
    };

    React.useEffect(() => {
        getBooks();
        getSongs();
    }, [tokens]);
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    );
};

