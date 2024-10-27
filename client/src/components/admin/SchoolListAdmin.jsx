import { SchoolCardAdmin } from "./SchoolCardAdmin"


export const SchoolListAdmin = ({schools, handlerSelectedSchool}) => {



    return(
        <aside className="aside-cole-admin">
            {schools.map((school) => (<SchoolCardAdmin 
                key={school.id}
                school={school}
                handlerSelectedSchool={handlerSelectedSchool}
            />))}
        </aside>
    )
}