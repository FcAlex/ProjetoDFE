import { Component } from 'react'
import axios from 'axios'
import { VscPerson, VscBook, VscLink } from 'react-icons/vsc'

import './index.css'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      fieldSearch: '',
      books: []
    }

    this.findBooks = this.findBooks.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  async findBooks(query) {
    try {
      const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`)
      

      this.setState({ books: response.data.hits, fieldSearch: '' })
    } catch (e) {
      console.log(e)
    }
  }

  handleSearch(e) {
    this.setState({ fieldSearch: e.target.value })
  }

  render() {
    return (
      <main className="container bg-light">
        <div className="row d-flex justify-content-center" >
          <div className="input-group my-3 w-50 ">
            <input
              className="form-control"
              value={this.state.fieldSearch}
              type="text"
              onChange={this.handleSearch} />
            <button
              className="btn btn-primary"
              onClick={this.findBooks}>Pesquisar</button>
          </div>
        </div>
        <ul className="row list-group rounded-0 books">
          {this.state.books.map((book, index) => (
            <li key={index} className="list-group-item col-8 mx-auto">
              <ul className="list-group list-group-flush">
                <li className="list-group-item"> <VscPerson /> <strong>Author</strong> {book.author} </li>
                <li className="list-group-item"> <VscBook /> <strong>Title:</strong> {book.title} </li>
                <li className="list-group-item"> <VscLink /> <strong>URL:</strong> {book.url} </li>
              </ul>
            </li>
          ))}
        </ul>
      </main>
    )
  }
}
