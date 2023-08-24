//import { useForm } from "react-hook-form";
//import { useNavigate } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
//import { loginUserAsync } from '../../redux/slices/loginSlice'; 

const CreateUserForm = ({ onClose }) => {
    return (
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close" onClick={onClose}>&times;</span>
                <p>Create User</p>
                <input type="text" placeholder="Enter Username" />
            </div>
        </div>
    )
};

export default CreateUserForm;