import './App.css'

function App() {

  const data = [];

  return (
    <table>
      <thead>
      <tr>
          <th>Name</th>
          <th>Edit</th>
          <th>Delete</th>
      </tr>
      </thead>
      <tbody>
      <tr>
          <td>
            {data.map(categoryData => categoryData.name)}
          </td>
          <td>x</td>
          <td>x</td>
      </tr>
      </tbody>
    </table>
  )
}

export default App
