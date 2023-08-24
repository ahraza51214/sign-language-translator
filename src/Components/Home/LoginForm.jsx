import { useForm } from "react-hook-form";
import { loginUser } from '../../api/user';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
    //... (other code)

    

    //... (rest of the component)
    const usernameConfig = {
        required: true,
        minLength: 3
    }

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()
    const navigate = useNavigate();

    const onSubmit = async ({ username }) => {
        const [error, user] = await loginUser(username);
        if (!error && user) {
            if (user.newUserCreated) {
                // If a new user was created, navigate back to login page
                navigate("/");
            } else {
                // Navigate to the translate route with the username
                navigate(`/translate/${user.username}`);
            }
        }
    };
    
    
    console.log(errors);

    const errorMessage = (() => {
        if(!errors.username){
            return null

        } 
        
        if(errors.username.type === 'required'){
            return <span className="login-err-ms">Username is required</span>

        } 
        
        if(errors.username.type === 'minLength'){
            return <span className="login-err-ms">Username is to short (min 3).</span>

        } 
        
    })()
    return(
        <div id = "login-header">
            <h4 className="header">What is Your Name</h4>
            <form onSubmit={ handleSubmit(onSubmit)}>
                <div>
                    <input type="text" placeholder="Username" {...register("username",usernameConfig)} />
                </div>
                <p>
                    { errorMessage }
                </p>
                <div>
                    <button className="btn btn-primary btn-sm" type="submit">Continue</button>
                </div>
            </form>
            
        </div>
            
        
    )
};

export default LoginForm;