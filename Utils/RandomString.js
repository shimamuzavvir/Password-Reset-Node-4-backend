export const GenerateRandomString = (length) =>{
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012356789"
    let result = ""
    let n = characters.length;
    for(let i =0; i<length; i++){
        result += characters.charAt(Math.floor(Math.random() * n))
    }
    return result
}