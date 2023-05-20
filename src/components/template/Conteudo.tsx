interface ConteudoProps {
    className?: string
    children?: any
}

export default function Conteudo(props: ConteudoProps) {
    return (
        <div className={`flex flex-col p-7
             ${props.className} ?? ''}
             `}>

            {props.children}
        </div>
    )
}