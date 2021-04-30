import React from "react";
import searchIcon from "../../assets/ic_Search.png";
import "./searchBox.scss";

// Take in a component which will wrap the search box
export default function withSearchBox(WrapperComponent, placeholder) {
  // And return the composed component
  class SearchBoxHOC extends React.Component {
    render() {
      return (
        <WrapperComponent
          child={
            <div className="row page-container mx-0">
              <form
                className="search-input-container"
                onSubmit={(e) => this.validateData(e)}
              >
                <input
                  className="search-input"
                  id="search-input"
                  type="text"
                  placeholder={placeholder}
                  onChange={this.handleInputChange}
                  //value={this.state.search}
                />
                <button className="search-icon-container" type="submit">
                  <img className="search-icon" alt="Buscar" src={searchIcon} />
                </button>
              </form>
            </div>
          }
        />
      );
    }
  }
  return SearchBoxHOC;
}
