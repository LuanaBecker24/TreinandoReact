import { useState } from 'react';
import { Trash2 } from 'lucide-react';

import "./todolist.css";

export default function ToDoList() {
    const [escrita, setEscrita] = useState("");
    const [tarefas, setTarefas] = useState([]);
    const [temaClaro, setTemaClaro] = useState(true);

    const alternarTema = () => {
        setTemaClaro(!temaClaro);
    };

    const temaAtual = temaClaro ? 'tema-claro' : 'tema-escuro';

    const adicionarTarefa = () => {
        if (escrita.trim() !== "") {
            setTarefas([...tarefas, escrita]);
            setEscrita("");
        }
    };

    const removerTarefa = (index) => {
        const novaListaTarefas = tarefas.filter((_, i) => i !== index);
        setTarefas(novaListaTarefas);
    };

    return (
        <header className={`pagina_toda ${temaAtual}`}>
            <div className='comeco'>
                <button className='botao_tema' onClick={alternarTema}>Alternar Tema</button>
                <h1 className="titulo">To Do List</h1>
            </div>
            <main className="meio_pagina">
                <p className="texto">Escreva sua tarefa</p>
                <div className="adicionar">
                    <input className="escrita" type="text" placeholder="Digite aqui" value={escrita}
                        onChange={(e) => setEscrita(e.target.value)}
                    />
                    <button onClick={adicionarTarefa}>Adicionar</button>
                </div>
                <ul className="lista-tarefas">
                    {tarefas.map((tarefa, index) => (
                        <p key={index} className="tarefa">
                            {tarefa}
                            <Trash2
                                style={{ width: 20, height: 20, display: 'flex', cursor: 'pointer' }}
                                onClick={() => removerTarefa(index)}
                            />
                        </p>
                    ))}
                </ul>
            </main>
        </header>
    );
}



