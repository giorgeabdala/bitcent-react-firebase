
import { List } from "@mantine/core"
import Cabecalho from "../template/Cabecalho"
import Conteudo from "../template/Conteudo"
import Pagina from "../template/Pagina"
import Lista from "./Lista"
import Transacao from "@/logic/core/financas/Transacao"
import { useState } from "react"
import transacoesFalsas from "@/data/constants/transacoesFalsas"
import Formulario from "./Formulario"


export default function Financas() {
    const [transacoes, setTransacoes] = useState<Transacao[]>(transacoesFalsas)
    const [transacao, setTransacao] = useState<Transacao | null>(null)
    
    return (
        <Pagina>
            <Cabecalho />
            <Conteudo className="gap-5">
                <Lista transacoes={transacoes}
                        selecionarTransacao={setTransacao}/>
                {transacao && (
                    <Formulario 
                        transacao={transacao}
                        cancelar={() => setTransacao(null)}
                        />
                )}
            </Conteudo>
        </Pagina>
    )
}