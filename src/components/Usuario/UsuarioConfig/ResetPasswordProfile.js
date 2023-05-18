import React from "react";
import { useState} from "react";
import apiInstance from "../../utils/utils";

const ResetPassword = () => {

  const [Password, SetPassword] = useState([]);

  const handlePassword = (e) => {
    SetPassword({
      ...Password,
      password: e.target.value,
    });
  };

  const handlerepeatPassword = (e) => {
    SetPassword({
      ...Password,
      repeatPassword: e.target.value,
    });
  };


  const changePassword = async () => {
    let token = localStorage.getItem("token") || "";
    let usuarioid = localStorage.getItem("usuarioid");

    await apiInstance.put(
      process.env.REACT_APP_LOCAL_HOST +
        process.env.REACT_APP_CHANGED_PASSWORD_APP +
        usuarioid,
      Password,
      {
        headers: {
          "x-token": token,
        },
      }
    );
    window.location = "/login";
  };


  return (
    <div className="flex flex-col space-y-[5px] justify-center items-center">
      <input
        type="password"
        onChange={(e) => {
          handlePassword(e);
        }}
        className="border-none rounded-[7px] bg-white w-[250px] py-[10px]"
        placeholder="Contraseña"
      />
      <input
        type="password"
        onChange={(e) => {
          handlerepeatPassword(e);
        }}
        className="border-none rounded-[7px]  bg-white w-[250px] py-[10px]"
        placeholder="Repetir contraseña"
      />
      <button
        onClick={changePassword}
        className="border-none rounded-[7px]  hover:bg-slate-100 bg-white w-[250px] py-[10px]"
      >
        Confirmar
      </button>
    </div>
  );
};

export default ResetPassword;
