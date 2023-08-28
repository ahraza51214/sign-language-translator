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

  const username = useSelector(
    (state) => state.user.loginInputText);


  const onSubmit = async () => {
    try {
      const userData = await checkUser(username);
      console.log("User data:", userData);
      // Checking if the user data is valid
      if (userData.length === 0 ) {
        console.log("User data is invalid. Adding user to API.");
        await dispatch(addUserToAPI(createUserObject(username))).then(() => {
          navigate(`/translate`);
        });
      } else {
        dispatch(getCurrentUser(username)).then(() => {
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
        Continue
      </button>
    </div>
  );
};