import MiniFormulario from "../template/MiniFormulario";
import useFormulario from "../../data/hooks/UseFormulario";
import usuario from "../../data/constants/usuarioFalso";
import Usuario from "@/logic/core/usuario/Usuario";
import { TextInput } from "@mantine/core";
import Texto from "@/logic/utils/Texto";
import Cpf from "@/logic/utils/Cpf";
import Telefone from "@/logic/utils/Telefone";



export default function Formularios() {
    const {dados, alterarAtributo} = useFormulario<Usuario>(usuario);
    return (
        <div className="flex flex-col gap-5"> 
            <MiniFormulario
                titulo="Seu nome"
                descricao="Como você gostaria de ser chamado?"
                msgRodaPe="O nome deve possuir entre 3 e 80 caracteres"
                podeSalvar={Texto.entre(dados.nome, 3, 80)}
                salvar={() => console.log("salvar")}
            >
                <TextInput
                    value={dados.nome}
                    onChange={alterarAtributo("nome")}
                >
                </TextInput>

            </MiniFormulario>

            <MiniFormulario
                titulo="CPF"
                descricao="Seu CPF é usado internamente pelo sistema"
                msgRodaPe="Pode relaxar, daqui ele não sai"
                podeSalvar={true}
                salvar={() => console.log("salvar CPF")}
            >
                <TextInput
                    value={Cpf.formatar(dados.cpf ?? '')}
                    onChange={alterarAtributo("cpf", Cpf.desformatar)}
                >
                </TextInput>
            </MiniFormulario>


            <MiniFormulario
                titulo="Telefone"
                descricao="Usado para notificações importantes sobre a sua conta"
                msgRodaPe="Se receber ligação a cobrar, não foi a gente"
                podeSalvar={true}
                salvar={() => console.log("salvar Telefone")}
            >
                <TextInput
                    value={Telefone.formatar(dados.telefone ?? '')}
                    onChange={alterarAtributo("telefone", Telefone.desformatar)}
                >
                </TextInput>
            </MiniFormulario>

        </div>
    )
}