
export const SchoolCard = ({ school }) => {

    return (
        <div>
            <div className="box-cole">
                <div className="div-content">
                    <h3>Colegio</h3>
                    <h2>{school.name}</h2>
                    <h4>{school.address}</h4>
                    <h5>{school.schoolCode}</h5>
                    <p>Ver Catálogo</p>
                </div>
                <div className="div-img">
                    {/* <img src={insignia} alt="#" /> */}
                </div>
            </div>
        </div>
    )
}