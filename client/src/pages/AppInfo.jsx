import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const AppInfo = () => {

    return(
        <>
            <Header />

            <section className="warning-app-section">
                <h2>Aviso Importante</h2>

                <div className="warning-div">
                    <p>
                        Este e-commerce fue desarrollado únicamente como un proyecto 
                        demostrativo para mostrar mis habilidades en programación 
                        utilizando tecnologías como <span>React</span> para el 
                        frontend y <span>Java</span> para el backend.
                    </p>

                    <p>
                        <span>No es un sitio web funcional para realizar compras. </span> 
                        Ninguno de los productos aquí mostrados está a la venta, y las 
                        imágenes utilizadas son solo ilustrativas, ya 
                        que <span>no poseo los derechos de autor sobre las fotografías 
                        de los uniformes.</span>
                    </p>

                    <p>
                        Agradezco tu visita y tu interés en este proyecto, cuyo único 
                        objetivo es exhibir mis capacidades en el desarrollo de 
                        aplicaciones web modernas.
                    </p>

                    <p>
                        Si deseas más información sobre mi trabajo o estás interesado 
                        en colaborar conmigo, no dudes en contactarme.
                    </p>

                </div>
            </section>

            <section className="knowledge-app-section">
                <h2>Conocimientos Aplicados</h2>
                <ul className="knowledge-ul">
                    <li className="knowledge-li"><strong>Frontend:</strong>
                        <ul>
                            <li><span>React:</span> Componentes funcionales, hooks (<code>useState</code>, 
                                <code> useEffect</code>, <code>useNavigate</code>).</li>
                            <li><span>React Router:</span> Implementación de rutas dinámicas y navegación.</li>
                            <li><span>Redux:</span> Gestión global del estado de la aplicación.</li>
                            <li><span>CSS:</span> Estilos responsivos utilizando Flexbox y Grid.</li>
                            <li>Integración con APIs RESTful mediante <code>axios</code>.</li>
                        </ul>
                    </li>
                    <li className="knowledge-li"><strong>Backend:</strong>
                        <ul>
                            <li><span>Java con Spring Boot:</span> Creación de APIs REST para manejar 
                                las operaciones del e-commerce.</li>
                            <li><span>Seguridad:</span> Implementación de autenticación y autorización 
                                mediante tokens JWT.</li>
                            <li><span>Roles y Permisos:</span> Uso de roles como <code>ROLE_ADMIN</code> y 
                                <code> ROLE_USER</code> para acceso seguro a las funcionalidades.</li>
                            <li><span>Base de Datos:</span> Uso de MySQL como sistema de base de datos 
                                relacional.</li>
                            <li><span>Spring Data JPA:</span> Gestión de entidades y operaciones CRUD 
                                con un enfoque basado en repositorios.</li>
                            <li><span>Validación de datos:</span> Uso de DTOs y validaciones con anotaciones.</li>
                            <li><span>Arquitectura MVC:</span> Separación clara de responsabilidades entre modelos, vistas 
                                y controladores.</li>
                        </ul>
                    </li>
                    <li className="knowledge-li"><strong>Otros:</strong>
                    <ul>
                        <li>Diseño basado en componentes reutilizables y buenas prácticas de programación.</li>
                        <li>Metodología Agile: Gestión del proyecto dividiéndolo en etapas claras y manejables.</li>
                    </ul>
                    </li>
                </ul>
            </section>

            <Footer />
        </>
    )
}