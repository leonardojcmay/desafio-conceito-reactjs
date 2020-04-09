import React, { useState, useEffect } from "react";
import api from './services/api';

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);
    
    useEffect(() => {
        api.get('/repositories').then(response => {
          setRepositories(response.data);
        });
    }, []);

  async function handleAddRepository() {
    const response = await api.post('/repositories', {
      title: `Novo projeto ${Date.now()}`,
      url: "http://github.com/...",
	    techs: ["Node.js", "React.js"]
    });

    const repository = response.data;

    setRepositories([...repositories, repository]);
  }

  async function handleRemoveRepository(id) {
    
            
    try {
            
      await api.delete(`repositories/${id}`, {
          
      });

      //Atualizando a página automaticamente após a exclusão, para retirar o caso deletado da lista
      setRepositories(repositories.filter(repository => repository.id !== id));//Retornar todos os incidentes diferentes deste id excluido

      } catch (err) {
          alert('Erro ao deletar caso, tente novamente.')
      }

  }

  return (
    <div>
      
      <ul data-testid="repository-list">
        {repositories.map(repository => ( 
          <li key={repository.id}>
            
            <ul>
                {/*percorrer os projects retornando algo */}
                <li key={repository.id}>{repository.title}</li>
            </ul>

            <button onClick={() => handleRemoveRepository(repository.id)} type="button">
              Remover
            </button>

          </li>
        ))}
      </ul>
      

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
