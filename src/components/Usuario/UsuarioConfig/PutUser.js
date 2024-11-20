import React from "react";
import axios from "axios";
import { useState, useContext } from "react";
import { DataProfileProvider } from "../../Context/UseContextProvider";
import ResetPasswordProfile from "./ResetPasswordProfile";
import apiInstance from "../../utils/utils";

const PutUser = () => {
  let usuarioid = localStorage.getItem("usuarioid") || "";

  let token = localStorage.getItem("token") || "";

  const { putinput, setPutInput, setAxiosData, Open, setOpen } =
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
    let img;
    if (putinput.img) {
      img = await SubirArchivo();
      putinput.img = img
    }
    
      const axiosresponse = await apiInstance.put(
        process.env.REACT_APP_LOCAL_HOST +
          process.env.REACT_APP_EDITAR_USUARIO_APP +
          "/" +
          usuarioid,
          putinput,
          {
            headers: {
              "x-token": token,
            },
          }
      );
      setAxiosData(axiosresponse);
      setPutInput({
        ...putinput,
        img: undefined
      })
      
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
    return img;
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
    <div className="flex flex-col space-y-[7px] px-[8px] items-center pt-[80px] bg-slate-200 min-h-[700px]">
      <input
        type="text"
        onChange={(e) => {
          handleName(e);
        }}
        className="rounded-[7px] py-[10px] lg:w-[500px] w-[300px] bg-white border-none"
        placeholder="Nombre"
      />
      <div className="flex lg:w-[500px] w-[300px] space-x-[20px] justify-center">
        <label htmlFor="archivo" className=" border-none rounded-[7px]  py-[10px] lg:w-[350px] w-[200px] flex justify-center items-center hover:bg-slate-100 cursor-pointer bg-white">
          cargar imagen
        </label>
        <input id="archivo"
          type="file"
          onChange={(e) => {
            handleImg(e);
          }}
          className="hidden"
          name="archivo"
          placeholder="img"
        />
        <button
          onClick={SubirArchivo}
          className="border-none rounded-[7px] py-[10px] w-[150px] hover:bg-slate-100 bg-white"
        >
          subir imagen
        </button>
        <button
          onClick={DeleteImg}
          className=" border-none rounded-[7px] py-[10px] w-[150px] hover:bg-slate-100 bg-white"
        >
          Borrar imagen
        </button>
      </div>
      <button
        onClick={handlePutUser}
        className=" border-none rounded-[7px] py-[10px] lg:w-[500px] w-[300px] hover:bg-slate-100 bg-white"
      >
        Editar Usuario
      </button>
      <div className="flex w-[300px] lg:w-[500px] space-x-[20px] justify-center">
        <button
          className=" border-none rounded-[7px] py-[10px] w-[250px] hover:bg-slate-100 bg-white"
          onClick={logout}
        >
          Deslogear Cuenta
        </button>
        <button
          className=" border-none rounded-[7px] py-[10px] w-[250px] hover:bg-slate-100 bg-white"
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
        className={`border-none rounded-[7px] py-[10px] lg:w-[250px] w-[200px] hover:bg-slate-100 bg-white ${
          Open === true ? "hidden" : ""
        } `}
      >
        Cambiar mi contraseña
      </button>
      <button
        onClick={() => {
          setOpen(false);
        }}
        className={`border-none rounded-[7px] py-[10px] w-[250px] hover:bg-slate-100 bg-white ${
          Open === false ? "hidden" : ""
        } `}
      >
        Cerrar menu de contraseña
      </button>
    </div>
  );
};

export default PutUser;
