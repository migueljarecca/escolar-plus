
import { useUsers } from './../hooks/useUsers';
import { UserRow } from './UserRow';
export const UserList = () => {

    const { getUsers } = useUsers();
    
    const users = getUsers();;
    console.log("control 3 ", users);
    return (
        <div className='container-table-user'>
            <h2>Lista de Uusuarios</h2>

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
                    {users.map((user) => (<UserRow
                        key = {user.id}
                        id = {user.id}
                        name = {user.name}
                        lasname = {user.lasname}
                        email = {user.email}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}