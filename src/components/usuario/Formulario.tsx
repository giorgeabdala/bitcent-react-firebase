import MiniFormulario from "../template/MiniFormulario";



export default function Formularios() {
    return (
        <div> 
            <MiniFormulario
                titulo="Seu nome"
                descricao="Como você gostaria de ser chamado?"
                msgRodaPe="O nome deve possuir entre 3 e 80 caracteres"
            >
                Opa!
            </MiniFormulario>

        </div>
    )
}