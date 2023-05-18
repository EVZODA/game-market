import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import apiInstance from "../../utils/utils";

const Login = () => {
  const [LoginInput, setLoginInput] = useState({});

  const handleCorreo = (e) => {
    setLoginInput({
      ...LoginInput,
      correo: e.target.value,
    });
  };

  const handlePassword = (e) => {
    setLoginInput({
      ...LoginInput,
      password: e.target.value,
    });
  };

  const login = async () => {
    const axiosResponse = await apiInstance.post(
      process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_LOGIN_APP,
      LoginInput
    );
    const { token, usuario } = axiosResponse.data;
    window.localStorage.setItem("token", token);
    window.localStorage.setItem("usuario", usuario.rol);
    window.localStorage.setItem("usuarioid", usuario.uid);
    window.location = "/";
  };

  return (
    <>
      <div className="flex flex-col items-center mx-2 py-[50px] bg-slate-50 min-h-[100vh]">
        <input
          type="text"
          name="correo"
          className="py-2 mb-4 w-[500px] max-w-full border-[1px] border-black"
          placeholder="Correo"
          onChange={(e) => {
            handleCorreo(e);
          }}
        />
        <input
          type="password"
          name="password"
          className="py-2 w-[500px] max-w-full border-[1px] border-black rounded-[3px]"
          placeholder="Password"
          onChange={(e) => {
            handlePassword(e);
          }}
        />

        <button onClick={login} type="submit" className="btn btn-primary mt-[15px] px-[40px] h-[40px] bg-yellow-200 rounded-[8px] pointer-events-auto hover:bg-yellow-300">
          Ingresar
        </button>
        <div className="">
        <Link to="/iforgetpassword">
          <button className="px-[40px] mt-[20px] h-[40px] bg-yellow-200 rounded-[8px] pointer-events-auto hover:bg-yellow-300">He olvidado mi contraseña</button>
        </Link>
      </div>
      </div>
    </>
  );
};

export default Login;
