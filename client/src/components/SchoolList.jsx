import { useSchool } from "../hooks/useSchool"
import { SchoolCard } from "./SchoolCard";

export const SchoolList = () => {

    const {getSchools} = useSchool();
    
    const schools = getSchools();
    
    const cardsSchoolsList = schools?.map((school) => (<SchoolCard school={school} key={school.id}/>))

    return (
        <div>
            {cardsSchoolsList}
        </div>
    )
}