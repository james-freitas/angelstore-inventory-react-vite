import './App.css'

function App() {
  return (
  <div class="container my-2">
      <h3>Movie List</h3>
      <div class="card">

                          <table class="table table-striped table-responsive-md">
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
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  )
}

export default App
