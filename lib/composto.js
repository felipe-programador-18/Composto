

const CalJuros = (C,i,t) => C * Math.pow((1+i), t)
const JurosCompost = ({CalJuros}) => (C,i,t) => CalJuros (C,i,t) -C





module.exports = {
    CalJuros,
    JurosCompost
}