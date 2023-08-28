import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { setLoginInputText } from "../../redux/slices/userSlice";

export const LoginInputField = () => {
  const { register } = useForm();
  const dispatch = useDispatch();
  
  // state of the passed username in the input text field
  const loginInputText = useSelector(
    (state) => state.user.loginInputText
  );

  const handleInputChange = (event) => {
    dispatch(setLoginInputText(event.target.value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        {...register("username", { required: true, minLength: 3 })}
        value={loginInputText}
        onChange={handleInputChange}
      />
    </div>
  );
};