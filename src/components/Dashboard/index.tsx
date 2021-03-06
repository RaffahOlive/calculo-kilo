import { useState } from "react";

export function Dashboard()
{

    const [vA, setVA] = useState('');
    const [vB, setVB] = useState('');
    let [vC, setVC] = useState(0)

    const handleInput = () =>
    {
        vC = parseFloat(vA) * parseFloat(vB);
        setVC(vC)
    }


    return (
        <div>
            <h2>Valor do kilo</h2>
            <input type='number' step="0.01" onChange={ e => setVA(e.target.value) } />

            <h2>Quantidade do kilo comprada</h2>
            <input type='number' step="0.01" onChange={ e => setVB(e.target.value) } />

            <button onClick={ () => handleInput() }>Calcular</button>


            <h1>Preço do kilo: { vC }</h1>

        </div>
    );
}
