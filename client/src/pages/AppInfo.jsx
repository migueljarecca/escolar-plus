import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const AppInfo = () => {

    return(
        <>
            <Header />

            <section className="info-web-section">
                <h2>Aviso Importante</h2>

                <div className="info-web-content">
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

            <section>
                <h2>Conocimientos Aplicados</h2>
                <ul>
                    <li><strong>Frontend:</strong>
                    <ul>
                        <li>React: Componentes funcionales, hooks (<code>useState</code>, 
                            <code>useEffect</code>, <code>useNavigate</code>).</li>
                        <li>React Router: Implementación de rutas dinámicas y navegación.</li>
                        <li>Redux: Gestión global del estado de la aplicación.</li>
                        <li>CSS: Estilos responsivos utilizando Flexbox y Grid.</li>
                        <li>Integración con APIs RESTful mediante <code>fetch</code>/
                            <code>axios</code>.</li>
                    </ul>
                    </li>
                    <li><strong>Backend:</strong>
                    <ul>
                        <li><strong>Java con Spring Boot:</strong> Creación de APIs REST para manejar 
                            las operaciones del e-commerce.</li>
                        <li><strong>Seguridad:</strong> Implementación de autenticación y autorización 
                            mediante tokens JWT.</li>
                        <li><strong>Roles y Permisos:</strong> Uso de roles como <code>ROLE_ADMIN</code> y 
                            <code>ROLE_USER</code> para acceso seguro a las funcionalidades.</li>
                        <li><strong>Base de Datos:</strong> Uso de MySQL como sistema de base de datos 
                            relacional.</li>
                        <li><strong>Spring Data JPA:</strong> Gestión de entidades y operaciones CRUD 
                            con un enfoque basado en repositorios.</li>
                        <li>Validación de datos: Uso de DTOs y validaciones con anotaciones.</li>
                        <li>Arquitectura MVC: Separación clara de responsabilidades entre modelos, vistas 
                            y controladores.</li>
                    </ul>
                    </li>
                    <li><strong>Otros:</strong>
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