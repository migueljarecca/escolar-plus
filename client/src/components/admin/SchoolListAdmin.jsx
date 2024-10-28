import { SchoolCardAdmin } from "./SchoolCardAdmin"


export const SchoolListAdmin = ({schools, handlerSelectedSchool}) => {



    return(
        <div>
            {schools.map((school) => (<SchoolCardAdmin 
                key={school.id}
                school={school}
                handlerSelectedSchool={handlerSelectedSchool}
            />))}
        </div>
    )
}