

const CalJuros = (C,i,t) => C * Math.pow((1+i), t)

const Convert = valor => {
    return parseFloat(valor).toFixed(1)
}




module.exports = {
    CalJuros,
    Convert
}