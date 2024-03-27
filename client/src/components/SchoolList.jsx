import { useSchool } from "../hooks/useSchool"

export const SchoolList = () => {

    const {getSchools} = useSchool();
    
    const schools = getSchools();

    return (
        <>
            
        </>
    )
}