import React, { Component }from 'react';


class SearchBar extends Component {

constructor(props) {
  super(props);
  this.state = {searchterm: ''};
  // add to the bottom of your constructor
  this.onInputChange = this.onInputChange.bind(this);
  //this.search = debounce(this.search,300);
}

  // add this above your render method
onInputChange(event) {
  this.setState({ searchterm: event.target.value });
  console.log(event.target.value);
  this.props.onSearchChange(this.state.searchterm);
}
  render() {    // in render method change return to:
    //return <input onChange={this.onInputChange} />;
  return (
   <div>
     <input onChange={this.onInputChange} value={this.state.searchterm} />
   </div>
 );
  }
}

export default SearchBar;
