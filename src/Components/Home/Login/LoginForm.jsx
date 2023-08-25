import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUserAsync } from '../../../redux/slices/loginSlice'; 


const LoginForm = () => {
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
    const dispatch = useDispatch();
    //const userState = useSelector(state => state.user);

    const onSubmit = async ({ username }) => {
        const action = dispatch(loginUserAsync(username));
        
        if (loginUserAsync.fulfilled.match(action) && action.payload) { // Check if payload is not null
            const user = action.payload;
    
            if (user.newUserCreated) { // Now, it's safe to check this property
                //navigate("/");
                navigate(`/translate/${user.username}`);
                //alert("Your username is created succesfully. You will now get redirected to our Translation page.");
            } else {
                navigate(`/translate/${user.username}`);
            }
        } else if (loginUserAsync.rejected.match(action)) {
            // Handle errors here
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