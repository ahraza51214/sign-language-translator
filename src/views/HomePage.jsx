import { LoginInputField } from "../components/homePage/LoginInputField";
import { LoginButton } from "../components/homePage/LoginButton";

const HomePage = () => {
    return(
        <div id='login-header'>
            <h1>LOGIN</h1>
            <LoginInputField />
            <LoginButton />
        </div>
    )
}

export default HomePage;