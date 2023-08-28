import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getCurrentUser, addUserToAPI } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { checkUser } from "./assets/checkUser";
import { createUserObject } from "./assets/createUserObject";


export const LoginButton = () => {
  const { handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // state of the passed username in the input text field
  const usernameInput = useSelector(
    (state) => state.user.loginInputText);

  // function to handle the submit button, which runs checkUser to check if username exists. If it doesnt exist ararylength = 0 and it calls addUserToApi else it calls getCurrentUser.
  const onSubmit = async () => {
    try {
      const userData = await checkUser(usernameInput);
      console.log("User data:", userData);
      // Checking if the user data is valid
      
      if (userData.length === 0 ) {
          dispatch(addUserToAPI(createUserObject(usernameInput)));
          await dispatch(getCurrentUser(usernameInput)).then(() => {
          navigate(`/translate`);
        });
      } else {
          dispatch(getCurrentUser(usernameInput)).then(() => {
          navigate(`/translate`);
        });
      }
    } catch (error) {
      console.error("Error in login button:", error);
    }
  };

  return (
    <div>
      <button
        className="btn btn-primary"
        type="submit"
        onClick={handleSubmit(onSubmit)}
      >
        Login / Create User
      </button>
    </div>
  );
};