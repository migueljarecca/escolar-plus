import { useEffect } from 'react';
import { Header } from '../components/Header';
import { useUniform } from '../hooks/useUniform';
import { useParams } from 'react-router-dom';
import { UniformFilteredList } from '../components/UniformFilteredList';


export const UniformsPage = () => {

    const { filteredUniforms, uniformBySchoolId } = useUniform();
    
    const { id } = useParams();

    //traer todos los uniformes realacionado a un colegio   
    useEffect(() => {
        if (id) {
            uniformBySchoolId(id);
            
        }
    },[]);     

    console.log("control -1 ", filteredUniforms);

    return (
        <>
            <Header />



            <div className="container-uniform">
                <div className="left-sidebar"></div>
                <div className="main-content">
                    <UniformFilteredList  filteredUniforms={filteredUniforms}/>
                </div>
            
            </div>
        </>
    )
}

// import { useParams } from 'react-router-dom';

// export const UniformsPage = () => {
//     const { id } = useParams();
//     const { uniformBySchoolId, filteredUniforms } = useUniform();

//     useEffect(() => {
//         console.log("UniformsPage montado", id);
//         uniformBySchoolId(id);

//     }, [id]);

//     console.log("control de datos ", filteredUniforms);


//     return (
//         <>
//             {/* <Header /> */}
//             <div>ID del parámetro: {id}</div>
//             <div>Uniformes filtrados: {JSON.stringify(filteredUniforms)}</div>

//         </>
//     );
// };


  