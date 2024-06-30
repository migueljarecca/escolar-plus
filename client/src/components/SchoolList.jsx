import { SchoolCard } from "./SchoolCard";
import { useAuth } from './../hooks/useAuth';
import { useSelector } from "react-redux";

export const SchoolList = ( { schools }) => {

    const { login } = useAuth();
    
    const cardsSchoolsList = schools.map((school) => (
    <SchoolCard login={login} school={school} key={school.id}/>))

    return (
        <>
            {cardsSchoolsList}
        </>
    )
}