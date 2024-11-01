
export const UserRow = ({ id, name, lastname, email, handlerSelectUser, handlerRemoveUser }) => {

    const onSelectedUser = (id, name, lastname, email) => {
        handlerSelectUser(id, name, lastname, email);
    }

    const onSelectedIdUser = (id) => {
        handlerRemoveUser(id);
    }

    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{lastname}</td>
                <td>{email}</td>
                <td>{"rol"}</td>
                <td>
                    <button
                        className="but-update"
                        type="submit"
                        onClick={() => onSelectedUser({id, name, lastname, email}) }
                        >
                        Actualizar
                    </button>
                </td>
                <td>
                    <button
                        className="but-delete"
                        type="submit"
                        onClick={() => onSelectedIdUser(id) }
                        >
                        Eliminar
                    </button>
                </td>
            </tr>
        </>
    )
}