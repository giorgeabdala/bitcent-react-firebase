import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";
import Usuario from "@/logic/core/usuario/Usuario";
import Cpf from "@/logic/utils/Cpf";
import Telefone from "@/logic/utils/Telefone";
import Texto from "@/logic/utils/Texto";
import { TextInput } from "@mantine/core";
import { useContext, useEffect } from "react";
import MiniFormulario from "../template/MiniFormulario";

export default function Formularios() {
    const { usuario, atualizarUsuario } = useContext(AutenticacaoContext)
    const { dados, alterarAtributo, alterarDados } = useFormulario<Usuario>()

    useEffect(() => {
        if(!usuario) return
        alterarDados(usuario)
    }, [usuario, alterarDados])

    async function salvar() {
        if(!usuario) return
        await atualizarUsuario(dados)
    }

    return (
        <div className="flex flex-col gap-5 mt-7">
            <MiniFormulario
                titulo="Seu Nome"
                descricao="Como você gostaria de ser chamado?"
                msgRodaPe="O nome deve possuir entre 3 e 80 caracteres, mais que isso já é um texto!"
                podeSalvar={Texto.entre(dados.nome, 3, 80)}
                salvar={salvar}
            >
                <TextInput
                    value={dados.nome}
                    onChange={alterarAtributo('nome')}
                />
            </MiniFormulario>
            <MiniFormulario
                titulo="CPF"
                descricao="Seu CPF é usado internamente pelo sistema."
                msgRodaPe="Pode relaxar, daqui ele não sai!"
                podeSalvar={true}
                salvar={salvar}
            >
                <TextInput
                    value={Cpf.formatar(dados.cpf ?? '')}
                    onChange={alterarAtributo('cpf', Cpf.desformatar)}
                />
            </MiniFormulario>
            <MiniFormulario
                titulo="Telefone"
                descricao="Usado para notificações importantes sobre a sua conta."
                msgRodaPe="Se receber ligação a cobrar, não foi a gente!"
                podeSalvar={true}
                salvar={salvar}
            >
                <TextInput
                    value={Telefone.formatar(dados.telefone ?? '')}
                    onChange={alterarAtributo('telefone', Telefone.desformatar)}
                />
            </MiniFormulario>
        </div>
    )
}

function useFormulario<T>(): { dados: any; alterarAtributo: any; alterarDados: any; } {
    throw new Error("Function not implemented.");
}
