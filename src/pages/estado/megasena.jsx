import { useEffect, useState  } from "react";
import NumeroDisplay from "../../components/NumeroDisplay";
import { mega } from "../../functions/mega"

export default function megasena() {
    const [qtde, setQtde] = useState(6)
    const [numeros, setNumeros] = useState(mega([]))

    useEffect(() => {
        setNumeros(mega())
    }, [])
    
    function renderNumeros() {
        return numeros.map(
            numero => <NumeroDisplay key={numero} numero={numero} />
        )
    }
    
    
    return (
        <div style={{
        display: "flex",
        flexDirection: "column", 
        alignItems: "center"}}
        >
            <h1>Mega Sena</h1><br />
            <h1>Min: 6 Números</h1>
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap"
                }}>
                {renderNumeros()}
            </div>
            <div>
                <input type="number" min={6} max={15} 
                value={qtde} onChange={ev => setQtde(+ev.target.value)}/>
                <button onClick={() => setNumeros(mega(qtde))}>Gerar aposta</button>
            </div>
        </div>
    )
}