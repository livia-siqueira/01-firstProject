import { useState } from "react";

// imutabilidade - nao podemos alterar diretamente o conteudo de uma váriavel
// usuarios = ['Livia', 'Diego', 'Dani']
// adicionar novo em js = usuarios.push['NovoUser']
// mutação na variavel usuarios
// no react nao se faz isso
// cria-se um novo
// novoUsuarios = [...usuarios, 'NovoUser'] 


// hock - function começa com use

export function Counter(){
   let [counter, setCounter] = useState(0);
   //retorna array - quebro array em 2 variaveis
   // let - deixe isso ter valor alterado
   // setCounter me permite alterar valor de counter
   
    function increment() {
        setCounter(counter += 1);
    }


    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Increment</button>           
        </div>
    );
}

//webpack serve retorna tudo do 0
// Fast Refresh - manter estado dos componentes