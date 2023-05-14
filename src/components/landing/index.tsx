import Pagina from "../template/Pagina";
import Cabecalho from "./cabecalho";
import Depoimentos from "./depoimentos";
import Destaque from "./destaque";
import Rodape from "./rodape";
import Vantagens from "./Vantagens";

export default function Landing() {
    return (
        <Pagina>
            <Cabecalho />
            <Destaque />
            <Vantagens />
            <Depoimentos/>
            <Rodape />            
        </Pagina>
    )
}