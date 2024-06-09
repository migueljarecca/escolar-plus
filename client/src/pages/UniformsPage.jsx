import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { useUniform } from '../hooks/useUniform';
import { useParams } from 'react-router-dom';
import { UniformFilteredList } from '../components/UniformFilteredList';
import { Filters } from '../components/Filters';
import { useSelector } from 'react-redux';
import { UniformOrderBy } from '../components/UniformOrderBy';

export const UniformsPage = () => {

    const { filterProd } = useSelector(state => state.uniforms);
    const { filterProdGender } = useSelector(state => state.uniforms);

    const { filteredUniforms, uniformBySchoolId } = useUniform();
    
    const { id } = useParams();
    console.log('filter desde unifor page:' +filterProdGender);

    //traer todos los uniformes realacionado a un colegio   
    useEffect(() => {
        if (id) {
            uniformBySchoolId(id);         
        }
    },[]); 

    //Filtramos los uniformes por precio y categoría
    const filterProducts = (filteredUniforms) => {
        return filteredUniforms.filter(product => {
            return (
                product.price >= filterProd.minPrice  &&
                (
                    filterProd.category == 'all' ||
                    product.product == filterProd.category
                )
            )
        })
    }

    let filteredProducts = filterProducts(filteredUniforms);

    //Filtramos los uniformes por género
    const filterProductsByGender = (filteredProducts) => {
        return filteredProducts.filter(product => {
            return (
                filterProdGender == 'all' ||
                product.gender == filterProdGender
            )
        })
    }

    filteredProducts = filterProductsByGender(filteredProducts);
    
    //Obtenemos solo los precios y nombres para mostrar al cliente
    const prices = filteredProducts.map(item => item.price);

    const productsName = filteredUniforms.map(item => ({
        product: item.product,
        schoolName: item.school.name,
    }));

    //Obtenemos solo las géneros disponibles para mostrar al cliente
    const availableGenders = Array.from(new Set(filteredProducts.map(item => item.gender)));

    return (
        <>
            <Header />

            <section>
                
            </section>

            <nav className='filter-nav-uniform'>
                <UniformOrderBy />
            </nav>

            <div className="container-uniform">

                <aside className="left-sidebar">
                    <Filters 
                        productsName={productsName} 
                        prices={prices} 
                        filterProd={filterProd}
                        availableGenders={availableGenders}
                        />
                </aside>

                <main className="main-content">
                    <UniformFilteredList filteredProducts={filteredProducts}/>
                </main>
            
            </div>
        </>
    )
}

//     return (
//         <>
//             {/* <Header /> */}
//             <div>ID del parámetro: {id}</div>
//             <div>Uniformes filtrados: {JSON.stringify(filteredUniforms)}</div>

//         </>
//     );
// };


  