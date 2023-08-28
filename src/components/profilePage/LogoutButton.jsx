import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

export const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // dispatches the logout action
  const handleOnClick = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div>
        <button className="btn btn-danger" onClick={() => handleOnClick()}>
          Logout
        </button>
    </div>
  );
};
