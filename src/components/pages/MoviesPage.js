import React, { Component } from "react";

class MoviesPage extends Component {
  render() {
    return (
      <div className="container">
        <h1>Movie List</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Plot</th>
              <th>Release Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Movie 1</th>
              <td>This is the movie description</td>
              <td>This is the release date</td>
              <td>My action</td>
            </tr>
          </tbody>
        </table>
      </div>
   )
 }
}

export default MoviesPage
