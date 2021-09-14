import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from "react";

interface Repository {
    name: string;
    description: string;
    html_url: string;
}


// https://api.github.com/users/livia-siqueira/repos

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);
// useEffect - dispara funcao quando algo ocorre (uma variavel muda)
// 


    useEffect(() => {
        //chamar api do git
        //assim que o componente list for renderizado busca a api
        fetch('https://api.github.com/users/livia-siqueira/repos').then(response  => response.json()).then(data => setRepositories(data))   
    }, []);
    //toda vez q repositories mudar essa função sera executada
    // array vazio, a função será executada uma única vez
    //entra em looping se o 2° parametro nao for passado

    return(
        <section className="repository-List">
        <h1>Lista de Repositórios</h1>
        <ul>
            {repositories.map(repository => {
                return (
                <RepositoryItem key={repository.name} repository={repository} />
                );
            })}
        </ul>
        </section>
    );
}