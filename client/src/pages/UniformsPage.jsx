import { useEffect } from 'react';
// import { Header } from '../components/Header';
import { useUniform } from '../hooks/useUniform';
// import { useParams } from 'react-router-dom';
// import { UniformFilteredList } from '../components/UniformFilteredList';


// export const UniformsPage = () => {

//     const { filteredUniforms, uniformBySchoolId } = useUniform();
    
//     const { id } = useParams();
//     console.log("control de id ", id);

//     //traer todos los uniformes realacionado a un colegio   
//     useEffect(() => {
//         console.log("dasdasdasdas,.");
//         if (id) {
//             uniformBySchoolId(id);
            
//         }
//         console.log("sxdfgvhjnkm,.");
//     },[]);     

//     console.log("contro de datos ",filteredUniforms);

//     useEffect(() => {
//         console.log("UniformsPage montado");
//     }, []);
    


//     return (
//         <>
//             <Header />



//             <div className="container-uniform">
//                 <div className="left-sidebar"></div>
//                 <div className="main-content">
//                     <UniformFilteredList  filteredUniforms={filteredUniforms}/>
//                 </div>
            
//             </div>
//         </>
//     )
// }

import { useParams } from 'react-router-dom';

export const UniformsPage = () => {
    const { id } = useParams();
    const { uniformBySchoolId, filteredUniforms } = useUniform();

    useEffect(() => {
        console.log("UniformsPage montado", id);
        uniformBySchoolId(id);

    }, [id]);

    return (
        <>
            {/* <Header /> */}
            <div>ID del parámetro: {id}</div>
            <div>Uniformes filtrados: {JSON.stringify(filteredUniforms)}</div>

        </>
    );
};


  