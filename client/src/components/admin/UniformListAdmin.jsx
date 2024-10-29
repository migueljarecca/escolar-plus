import { UniformCardAdmin } from "./UniformCardAdmin"

export const UniformListAdmin = ({uniforms, handlerSelectedUniform}) => {

    <>
        {uniforms.map((uniform) => (<UniformCardAdmin 
            key={uniform.id}
            uniform={uniform}
            handlerSelectedUniform={handlerSelectedUniform}
        />))}
    </>
}