

const CalJuros = (c,i,T) =>{
    // I have adding return//
    
    c= 100
    i=0.50
    T=24 
    Montante = c*(1*i)*T
    console.log(Montante)
    Montante = c*(1+i)*T
    console.log(Montante)
    Juros = Montante - c
    console.log(Juros)
}

CalJuros()



module.exports = {
    CalJuros
}