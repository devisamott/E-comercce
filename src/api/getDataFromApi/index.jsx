const API = 'https://api.escuelajs.co/api/v1/products'

export async function GetProducts () {
    const reponse = await fetch(API)
    const data = await reponse.json()
    return data
}