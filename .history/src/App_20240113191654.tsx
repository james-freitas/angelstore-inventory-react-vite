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
            {data}
          </td>
          <td>x</td>
          <td>x</td>
      </tr>
      </tbody>
    </table>
  )
}

export default App
