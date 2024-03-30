
import { useUsers } from './../hooks/useUsers';
import { UserRow } from './UserRow';

export const UserList = ({ handlerSelectUser }) => {

    const { getUsers, handlerRemoveUser } = useUsers();
    
    const users = getUsers();
    console.log("control de user ", users);

    return (
        <div className='container-table-user'>
            <h2>Lista de Usuarios</h2>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo Electrónico</th>
                        <th>Rol</th>
                        <th>Actualizar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user) => (<UserRow
                        key = {user.id}
                        id = {user.id}
                        name = {user.name}
                        lastname = {user.lastname}
                        email = {user.email}
                        handlerSelectUser = {handlerSelectUser}
                        handlerRemoveUser= {handlerRemoveUser}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}