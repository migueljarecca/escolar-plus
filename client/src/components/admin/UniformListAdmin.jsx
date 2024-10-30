import { UniformCardAdmin } from "./UniformCardAdmin"

export const UniformListAdmin = ({uniforms, handlerSelectedUniform, handlerRemoveUniform}) => {

    return(

        <>
            {uniforms.map((uniform) => (<UniformCardAdmin 
                key={uniform.id}
                uniform={uniform}
                handlerSelectedUniform={handlerSelectedUniform}
                handlerRemoveUniform={handlerRemoveUniform}
            />))}
        </>
    )
}