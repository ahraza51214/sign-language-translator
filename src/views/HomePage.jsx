import { LoginInputField } from "../components/homePage/LoginInputField";
import { LoginButton } from "../components/homePage/LoginButton";

const HomePage = () => {
    return(
        <div id='login-header'>
            <h1>Lost In Translation</h1>
            <h2>Login</h2>
            <LoginInputField />
            <LoginButton />
        </div>
    )
}

export default HomePage;