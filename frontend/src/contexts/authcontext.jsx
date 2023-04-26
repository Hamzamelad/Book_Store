import React, { createContext, useContext } from "react";
import axios from "axios";

const AuthContext = createContext("K");
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = (props) => {
    const [tokens, setTokens] = React.useState(
        localStorage.getItem("access") ? localStorage.getItem("access") : null
    );
    const [user, setUser] = React.useState(null);

    const login = (user) => {
        axios
            .post("http://localhost:8000/api/jwt/token", user, {
                headers: {
                    "Content-Type": "Application/json",
                },
            })
            .then((res) => {
                setTokens(res.data);
                localStorage.setItem("access", res.data.access);
                localStorage.setItem("refresh", res.data.refresh);
            })
            .catch((err) => console.log(err));
    };

    const getTokens = (e) => {
        console.log('check gettokens')
        axios
            .post(
                "http://localhost:8000/accounts/dj-rest-auth/google/",
                { access_token: e.credential },
                {
                    headers: {
                        "Content-Type": "Application/json",
                    },
                }
            )
            .then((res) => {
                console.log(res.data)
                setTokens(res.data);
                localStorage.setItem("access", res.data.access_token);
                localStorage.setItem("refresh", res.data.refresh_token);
            })
            .catch((e) => console.log(e));
    };


    const logout = (user) => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        setTokens(null);
    };

    const getUser = () => {
        if (tokens) {
            axios
                .get("http://localhost:8000/dj-rest-auth/user", {
                    headers: {
                        "Content-Type": "Application/json",
                        Authorization: `Bearer ${localStorage.getItem(
                            "access"
                        )}`,
                    },
                })
                .then((res) => {
                    setUser(res.data);
                    console.log(user);
                })
                .catch((err) => console.log(err));
        }
    };

    const value = {
        tokens: tokens,
        getTokens: getTokens,
        login: login,
        logout: logout,
        user: user,
    };
    React.useEffect(() => {
        getUser();
        console.log(user);
    }, [tokens]);
    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    );
};
