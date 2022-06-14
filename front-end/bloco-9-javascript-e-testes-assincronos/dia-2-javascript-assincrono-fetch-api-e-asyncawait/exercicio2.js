const createData = (data) => {
    const filtrados = data.filter(({rank}) => rank <= 10)
    return console.log(filtrados)
}

const getApiCripto = async () => {
    const url = `https://api.coincap.io/v2/assets`
    const response =  await fetch(url)
    const dados = await response.json()
    createData(dados.data)
}
getApiCripto()