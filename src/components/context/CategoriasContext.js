import React from 'react';

export const CategoriasContext = React.createContext();

export const CategoriasProvider = ({ children }) => {
  /*
  const [id, setId] = React.useState(1); //passando um para os testes da API
  const [nome, setNome] = React.useState('');
  const [descricao, setDesc] = React.useState('');
  const [categoria_pai_id, setCatPaiId] = React.useState('');
  */
  const [catArray, setCatArray] = React.useState([]);
  const [reload, setReload] = React.useState(true);

  return (
    <CategoriasContext.Provider
      value={{
        catArray, setCatArray,
        reload, setReload,
      }}
    >
      {children}
    </CategoriasContext.Provider>
  );
};