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
    try {
      // Dispatch the thunk and wait for it
      const actionResult = await dispatch(getCurrentUser({ payload: username }));
      const userData = actionResult.payload;

      // Checking if the user data is valid
      if (userData && userData.username) {
        navigate(`/translate`);
      } else {
        await dispatch(addUserToAPI({ username, translations: [] }));
        navigate(`/translate`);
      }

    } catch (error) {
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