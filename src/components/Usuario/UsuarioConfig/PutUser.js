import React from "react";
import axios from "axios";
import { useState, useContext } from "react";
import { DataProfileProvider } from "../../Context/UseContextProvider";
import ResetPasswordProfile from "./ResetPasswordProfile";
import apiInstance from "../../utils/utils";

const PutUser = () => {
  let usuarioid = localStorage.getItem("usuarioid") || "";

  let token = localStorage.getItem("token") || "";

  const { putinput, setPutInput, axiosData, setAxiosData, Open, setOpen } =
    useContext(DataProfileProvider);

  const handleName = (e) => {
    setPutInput({
      ...putinput,
      nombre: e.target.value,
    });
  };

  const handleImg = (e) => {
    setPutInput({
      ...putinput,
      img: e.target.files[0],
    });
    console.log(e.target.files);
  };

  const handlePutUser = async () => {
    console.log(putinput);
    console.log(usuarioid);
   
      const axiosresponse = await apiInstance.put(
        process.env.REACT_APP_LOCAL_HOST +
          process.env.REACT_APP_EDITAR_USUARIO_APP +
          "/" +
          usuarioid
      );
      setAxiosData(axiosresponse);
  };

  // Subir archivos
  const SubirArchivo = async () => {
    let usuario = "usuarios";

    const data = new FormData();
    data.append("archivo", putinput.img);
    const axiosresponse = await apiInstance.put(
      process.env.REACT_APP_LOCAL_HOST +
        process.env.REACT_APP_EDITAR_IMAGEN_APP +
        "/" +
        usuario +
        "/" +
        usuarioid,
      data
    );
    const img = axiosresponse.data.modelo.img;
    const msg = axiosresponse.data.msg;
    window.localStorage.setItem("usuarioimg", img);
    setAxiosData({ img, msg });
  };

  //Borrar de la cuenta
  const DeleteImg = async () => {
    const axiosresponse = await apiInstance.delete(
      process.env.REACT_APP_LOCAL_HOST +
        process.env.REACT_APP_BORRAR_IMAGEN_APP +
        usuarioid
    );
    const img = axiosresponse.data.modelo.img;
    const msg = axiosresponse.data.msg;
    setAxiosData({ img, msg });
  };

  // Salir de la cuenta
  const logout = () => {
    localStorage.clear();
    window.location = "/";
  };

  //Desactivar cuenta

  const DesactivarCuenta = async () => {
    await apiInstance.delete(
      process.env.REACT_APP_LOCAL_HOST +
        process.env.REACT_APP_EDITAR_USUARIO_APP +
        "/" +
        usuarioid,
      {
        headers: {
          "x-token": token,
        },
      }
    );
    localStorage.clear();
    window.location = "index.html";
  };

  return (
    <div className="flex flex-col space-y-[7px] px-[8px] items-center mt-[80px]">
      <input
        type="text"
        onChange={(e) => {
          handleName(e);
        }}
        className="border-[2px] border-[#8a5422] w-[500px]"
        placeholder="Nombre"
      />
      <div className="flex w-[500px] space-x-[20px] justify-center">
        <input
          type="file"
          onChange={(e) => {
            handleImg(e);
          }}
          className="border-[2px] border-[#8a5422] w-[350px]"
          name="archivo"
          placeholder="img"
        />
        <button
          onClick={SubirArchivo}
          className="border-[2px] border-[#8a5422] w-[150px]"
        >
          Agregar imagen
        </button>
        <button
          onClick={DeleteImg}
          className="border-[2px] border-[#8a5422] w-[150px]"
        >
          Borrar imagen
        </button>
      </div>
      <button
        onClick={handlePutUser}
        className="border-[2px] border-[#8a5422] w-[500px]"
      >
        Editar Usuario
      </button>
      <div className="flex w-[500px] space-x-[20px] justify-center">
        <button
          className="border-[2px] border-[#8a5422] w-[250px]"
          onClick={logout}
        >
          Deslogear Cuenta
        </button>
        <button
          className="border-[2px] border-[#8a5422] w-[250px]"
          onClick={DesactivarCuenta}
        >
          Desactivar Cuenta
        </button>
      </div>
      <div>
        {Open === true ? <ResetPasswordProfile></ResetPasswordProfile> : ""}
      </div>
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="border-[2px] border-[#8a5422] w-[250px]"
      >
        Cambiar mi contraseña
      </button>
      <button
        onClick={() => {
          setOpen(false);
        }}
        className={`border-[2px] border-[#8a5422] w-[250px] ${
          Open === false ? "hidden" : ""
        } `}
      >
        Cerrar menu de contraseña
      </button>
    </div>
  );
};

export default PutUser;
