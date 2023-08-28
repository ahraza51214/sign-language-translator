import { LoginInputField } from "../components/homePage/LoginInputField";
import { LoginButton } from "../components/homePage/LoginButton";

const HomePage = () => {
    return(
        <div>
            <br />
            <br />
            <br />
            <div id='login-header'>
                <br />
                <h1>Lost In Translation</h1>
                <h2>Login</h2>
                <br />
                <LoginInputField />
                <br />
                <LoginButton />
            </div>
        </div>
    )
}

export default HomePage;