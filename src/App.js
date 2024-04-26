import { useState, useEffect } from 'react';

function App() {

    const [ input, setInput ] = useState('')
    const [ tarefas, setTarefas ] = useState([])

    useEffect(() => {
        const tarefas = localStorage.getItem('@tarefas')
        if(tarefas) {
            setTarefas(JSON.parse(tarefas))
        }
        else {
            setTarefas([])
            alert('Não há tarefas cadastradas')
        }
    }, [tarefas]);

   function handleRegister(event){
        event.preventDefault()

        setTarefas([...tarefas, input])
        localStorage.setItem('@tarefas', JSON.stringify([...tarefas, input]))
        setInput('')
        alert('Tarefa cadastrada com sucesso')
    }
    
    return (
        <div className="">
            <h1>Cadastro de Usuarios</h1>

            <form onSubmit={handleRegister}>
                <label>Nome das tarefas:</label>
                <input 
                type="text" 
                name="nome" 
                value={input}
                onChange={(text) => setInput(text.target.value)}/>
            
                <button 
                type="submit">
                    Cadastrar
                </button>
            </form>

            <div>
                <h2>Lista de tarefas</h2>
                <ul>
                    {tarefas.map((tarefa, index) => (
                        <li key={index}>{tarefa}</li>
                    ))}
                </ul>
            </div>
        
        </div>
    );
}

export default App;
