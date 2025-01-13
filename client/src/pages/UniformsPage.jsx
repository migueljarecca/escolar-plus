import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { useUniform } from '../hooks/useUniform';
import { NavLink, useParams } from 'react-router-dom';
import { UniformFilteredList } from '../components/UniformFilteredList';
import { Filters } from '../components/Filters';
import { useSelector } from 'react-redux';
import { UniformOrderBy } from '../components/UniformOrderBy';
import { useSchool } from '../hooks/useSchool';
import { Footer } from '../components/Footer';

export const UniformsPage = () => {

    const { schools } = useSchool();

    // Estado global inicial de CATEGORIA y PRECIO
    const { filterProd } = useSelector(state => state.uniforms);
    const { filterProdGender } = useSelector(state => state.uniforms);
    const { filterProdOrder } = useSelector(state => state.uniforms);

    const { filteredUniforms, uniformBySchoolId } = useUniform();
    
    const { id } = useParams();

    //traer todos los uniformes realacionado a un colegio   
    useEffect(() => {
        if (id) {
            uniformBySchoolId(id);         
        }
    },[id]); 

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

    //Ordenamos los uniformes por precio y alfabeto
    // console.log('control de order ' +filterProdOrder);
    const orderByUniforms = (filteredProducts) => {
        if (!filterProdOrder) {
            return filteredProducts;
        }

        return filteredProducts.sort((a,b) => {
            if(filterProdOrder == 'price-asc')
                return a.price - b.price;
            else if (filterProdOrder == 'price-desc') {
                return b.price - a.price;
            } else if (filterProdOrder == 'alfa-asc') {
                return a.product.localeCompare(b.product);
            } else if (filterProdOrder == 'alfa-desc') {
                return b.product.localeCompare(a.product);
            }
        });
    };

    filteredProducts = orderByUniforms(filteredProducts);

    const numUniforms = filteredProducts.length;

    return (
        <>
            <Header />

            <section className='list-cole-section'>
                <div className="list-cole-container">
                    <h1>Colegios</h1>

                    {
                        schools.length > 0 ? 

                            <div className="list-cole-div">

                            {schools.map((school) => (

                                <NavLink to={`/uniforms/${school.id}`} key={school.id}>

                                    <div className="card-box-cole" key={school.id}>

                                        <div className='content-cole'>
                                            <figure className="figure-cole">
                                                <img src={`data:${school.image.mime};base64,${school.image.content}`} alt={school.image.name} />
                                            </figure>
                                                
                                        </div>  
                                        
                                        <h2>{`Colegio ${school.name}`}</h2>
                                    
                                    </div>
                                </NavLink>

                            ))}

                            </div>

                        : <p>No hay escuelas registradas.</p>
                    }
                    
                </div>
            </section>

            <nav className='filter-nav-uniform'>
                <UniformOrderBy numUniforms={numUniforms}/>
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
                    {filteredProducts.length > 0 ? (
                        <UniformFilteredList filteredProducts={filteredProducts}/>
                    ) : (
                        <div>No hay uniformes disponibles</div> 
                    )}
                    
                </main>
            
            </div>

            <Footer />
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


  