import { useState } from 'react';
import './App.css'
import { useCategoryData } from './hooks/useCategoryData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const { data } = useCategoryData();
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <h1>Categorias</h1>
      <table>
      <thead>
      <tr>
          <th>Name</th>
      </tr>
      </thead>
      <tbody>
      <tr>
          <td>
            {data?.map(categoryData => categoryData.name)}
          </td>
      </tr>
      </tbody>
    </table>
    {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}      
    <button onClick={handleOpenModal}>novo</button>
    </div>
  )
}

export default App
