
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
                <th>{id}</th>
                <th>{name}</th>
                <th>{lastname}</th>
                <th>{email}</th>
                <th>{"rol"}</th>
                <th>
                    <button
                        type="submit"
                        onClick={() => onSelectedUser({id, name, lastname, email}) }
                        >
                        Actualizar
                    </button>
                </th>
                <th><button
                        type="submit"
                        onClick={() => onSelectedIdUser(id) }
                        >
                        Eliminar
                    </button></th>
            </tr>
        </>
    )
}