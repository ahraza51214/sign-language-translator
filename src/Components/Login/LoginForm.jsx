import { useForm } from 'react-hook-form';

const LoginForm = () => {
    return(
        <>
            <h2>Whats Your Name</h2>
            <form>
                <input type="text" placeholder="Enter Name" />
                <button>Submit</button>
            </form>
        </>
    )
};

export default LoginForm;