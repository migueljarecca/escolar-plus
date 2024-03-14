
import { useUsers } from './../hooks/useUsers';
export const UserList = async() => {

    const { getUsers } = useUsers();

    const users =  await getUsers();
    console.log("control 3 ", users);
    return (
        <>
            
        </>
    )
}