import { SchoolCard } from "./SchoolCard";

export const SchoolList = ( { schools }) => {
    
    const cardsSchoolsList = schools.map((school) => (
    <SchoolCard school={school} key={school.id}/>))

    return (
        <>
            {cardsSchoolsList}
        </>
    )
}