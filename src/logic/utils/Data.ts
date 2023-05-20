

export default class Data {

    static ddmmyy = {
        formatar(dt: Date, separador: string = "/"): string {
            return `${dt.getDate()}${separador}${dt.getMonth() + 1}${separador}${dt.getFullYear()}`
        }
    }
}