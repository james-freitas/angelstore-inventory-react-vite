import './App.css'

function App() {
  return (
  <div class="container my-2">
      <h3>Movie List</h3>
      <div class="card">
          <div class="card-body">
              <div th:switch="${movies}" class="container my-5">
                  <p class="my-5">
                      <a href="/add" class="btn btn-success">
                          <i class="fas fa-plus ml-2"> Add Movie </i></a>
                  </p>
                  <div class="col-md-10">
                      <h2 th:case="null">No record found !!</h2>
                      <div th:case="*">
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
