import './App.css'

function App() {
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
                            <tr th:each="movie : ${movies}">
                                <td th:text="${movie.name}"></td>
                                <td><a th:href="@{/edit/{id}(id=${movie.id})}"
                                       class="btn btn-warning"> <i
                                        class="fas fa-edit ml-2"></i>
                                </a></td>
                                <td><a th:href="@{/delete/{id}(id=${movie.id})}"
                                       class="btn btn-danger"> <i
                                        class="fas fa-times ml-2"></i>
                                </a></td>
                            </tr>
                            </tbody>
    </table>
  )
}

export default App
