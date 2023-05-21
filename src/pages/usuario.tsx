import Cabecalho from "@/components/template/Cabecalho";
import Conteudo from "@/components/template/Conteudo";
import Pagina from "@/components/template/Pagina";
import TituloPagina from "@/components/template/tituloPagina";
import Formularios from "@/components/usuario/Formulario";
import usuarioFalso from "@/data/constants/usuarioFalso";
import { IconForms } from "@tabler/icons-react";



export default function CadastroUsuario() {
    return (
        <Pagina>
            <Cabecalho />
            <Conteudo>
                <TituloPagina
                    icone={<IconForms />}
                    principal="Dados Cadastrais"
                    secundario={`Informações de ${usuarioFalso.email}`}
                />
            <Formularios />
            </Conteudo>
        </Pagina>
    )
} 