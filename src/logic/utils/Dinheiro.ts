

export default class Dinheiro {
    private static _lingua = 'pt-BR';
    private static _moeda = 'BRL';


static formatar(valor: number): string {
    return (valor ?? 0).toLocaleString(this._lingua, {
        style: 'currency', currency: this._moeda
        })
}

}