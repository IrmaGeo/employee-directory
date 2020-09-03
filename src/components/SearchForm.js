import React from "react";
import "../styles/Main.css";

class Search extends React.Component {
  render() {
    return (
      <div className="form-group">
        <form className="search">
          <label htmlFor="user">Employee Name:</label>
          <input
            value={this.props.search}
            onChange={this.props.handleInputChange}
            name="user"
            list="users"
            type="text"
            className="form-control"
            placeholder="Type a user's name"
            id="user"
          />
          <button
            type="submit"
            onClick={this.props.handleFormSubmit}
            className="btn btn-success"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
