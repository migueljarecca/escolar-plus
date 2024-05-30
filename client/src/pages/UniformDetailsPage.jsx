import { useParams } from "react-router-dom";
import { Header } from "../components/Header"
import { useUniform } from "../hooks/useUniform"
import { useEffect, useState } from "react";
import { UniformDetailsCard } from "../components/UniformDetailsCard";

export const UniformDetailsPage = () => {

    const { filteredUniforms, initialUniformForm } = useUniform();

    const [uniformDetails, setuniformDetails] = useState(initialUniformForm);

    const {id} = useParams();

    useEffect(() => {
        if (id) {
            const uniform = filteredUniforms.find(u => u.id == id);
            setuniformDetails(uniform);
        }
    },[id]);

    return (
        <>
            <Header />

            <section className="uniform-details">
               <UniformDetailsCard uniformDetails={uniformDetails}/>
            </section>
        </>
    )
}