export default class Texto {
    static entre(valor: string, min: number, max: number): boolean {
        return valor.length >= min && valor.length <= max
    }
}