import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getCurrentUser, addUserToAPI } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";


export const LoginButton = () => {
  const { handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const username = useSelector(
    (state) => state.user.loginInputText);

  console.log(username);

  const create_user_info_object = (userName) => {
    return {
      username: userName,
      translations: [],
    };
  };

 const onSubmit = async () => {
  const userData = await getCurrentUser(username);
    try {
      if (userData.length !== 0) {
        // Handle the data
        dispatch(getCurrentUser(username));
        //setMessage(`logged in user ${username}`);
        navigate("/translate");
      } else {
        // Handle the case when data is empty
        dispatch(addUserToAPI(create_user_info_object(username)));
        //setMessage(`Created user ${username}`);
        navigate("/translate");
      }
    } catch (error) {
      // Handle unexpected errors here
      console.error("An unexpected error occurred:", error);
    }
  };


  return (
    <div>
      <button
        className="btn btn-primary btn-sm"
        type="submit"
        onClick={handleSubmit(onSubmit)}
      >
        Continue
      </button>
    </div>
  );
};