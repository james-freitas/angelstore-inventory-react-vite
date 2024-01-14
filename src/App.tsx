import './App.css'
import { useCategoryData } from './hooks/useCategoryData';

function App() {
  const { data } = useCategoryData();

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
    </div>
  )
}

export default App
