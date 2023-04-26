import Navbar from "./components/navbar/navbar";
import Search from "./components/searche/search";
import Login from "./components/registration/login";
import { useAuth } from "./contexts/authcontext";
import Main from "./components/main/main";


function App() {
    const {tokens} = useAuth()
    return (
        <div className="App">
            {tokens ? (
                <>
                    {" "}
                    <Navbar></Navbar> <Search></Search><Main></Main>{" "}
                </>
            ) : (
                <Login></Login>
            )}
        </div>
    );
}

export default App;
