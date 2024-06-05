import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { useUniform } from '../hooks/useUniform';
import { useParams } from 'react-router-dom';
import { UniformFilteredList } from '../components/UniformFilteredList';
import { Filters } from '../components/Filters';
import { useSelector } from 'react-redux';

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

    const filteredProducts = filterProducts(filteredUniforms);
    
    const prices = filteredProducts.map(item => item.price);

    const productsName = filteredUniforms.map(item => ({
        product: item.product,
        schoolName: item.school.name,
    }));

    const [isActiveOrder, setIsActiveOrder] = useState(false); // Estado para controlar la clase "active"

    const handleFilterClickOrder = () => {
        setIsActiveOrder(!isActiveOrder);
    }

    return (
        <>
            <Header />

            <section>
                
            </section>

            <nav className='filter-nav-uniform'>
                <h4>5 productos encontrados</h4>

                <div className='order-box'>

                    <div className={`order-dropdown ${isActiveOrder ? 'active' : ''}`} >

                        <div className="order-title" onClick={handleFilterClickOrder}>
                            <h3>Ordenar</h3>
                            <div className='order-icon'>
                                <span className='left-icon'></span>
                                <span className='right-icon'></span>
                            </div>
                        </div>
                   
                        <div className="order-items">
                            <div className="order-button" role="button" title="CASA HELENA" style={{ "--i": "1" }}>
                                    <h4 style={{ "--i": "1" }}>Pantalon buzo <span></span></h4>
                            </div>
                            <div className="order-button" role="button" title="CASA HELENA" style={{ "--i": "1" }}>
                                    <h4 style={{ "--i": "2" }}>Pantalon buzo <span></span></h4>
                            </div>
                            <div className="order-button" role="button" title="CASA HELENA" style={{ "--i": "1" }}>
                                    <h4 style={{ "--i": "3" }}>Pantalon buzo <span></span></h4>
                            </div>
                        </div>

                    </div>    
                </div>
            </nav>

            <div className="container-uniform">

                <aside className="left-sidebar">
                    <Filters productsName={productsName} prices={prices} filterProd={filterProd}/>
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


  