const API = 'http://localhost:3000'
const ProductBuyNow = "../../../src/api/jsonImages/index.json"

export async function GetProducts () {
    const reponse = await fetch(`${API}/productos`)
    const data = await reponse.json()
    return data
}
export async function GetProductBuyNow () {
    const response  = await fetch(ProductBuyNow)
    const data = await response.json()
    return data;
}
