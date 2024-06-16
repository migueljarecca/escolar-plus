import { useEffect, useState } from "react";
import { findAll, remove, save, update } from "../services/userService";
import { useDispatch, useSelector } from 'react-redux';
import { addToUser, loadingToUsers, removeToUser, updateToUser } from "../store/slices/users/userSlice";

export const useUsers = () => {

    const { users } = useSelector(state => state.users);

    const dispatch = useDispatch();

    //Recibimos el usuario del UserForm
    //comunicacion con el userService-backend guardar
    const handlerAddUser = async (user) => {
        console.log("control 1", user);
        const item = await save(user);
        dispatch(addToUser(item));
    }

    //Traemos todos los usuarios
    const getUsers = async () => {
        const item = await findAll();
        dispatch(loadingToUsers(item));
    }

    const handlerUpdateUser = async (user) => {
        const item = await update(user);
        dispatch(updateToUser(item));
    }

    const handlerRemoveUser = (id) => {
        remove(id);
        dispatch(removeToUser(id));
    }

  return (
        {
            users,

            handlerAddUser,
            getUsers,
            handlerUpdateUser,
            handlerRemoveUser,
        }
    )
}