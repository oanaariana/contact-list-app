import React, { Component } from "react";
import axios from "axios";
import './App.scss';

import RandomUser from './components/RandomUser';

class App extends Component {
  state = { users: [], searchInput: '', alphabet: '' };
  
  onSearchInputChange = (e) => {
    this.setState({searchInput: e.target.value})
  }
  
  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=120&nat=us,nz,au&seed=foobar")
      .then(response => {
        console.log(response.data.results);
        this.setState({ users: response.data.results });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onAlphabetClick = (e) => {
    this.setState({ alphabet: e.target.value })
  }

  prepareAlphabets = () => {
    let result = [];
    for (let i = 65; i < 91; i++) {
      result.push (
        <button key={i} className="tablinks"  onClick={this.onAlphabetClick} value={String.fromCharCode(i)}>{String.fromCharCode(i)}</button>
      )
    }
    return result;
  }

  elementContainsSearchString = (searchInput, element) => (searchInput ? element.name.first.toLowerCase().includes(searchInput.toLowerCase()) : false);

  filterItems = (userList) => {
    let result = [];
    const { searchInput, alphabet } = this.state;
    if (userList && (searchInput || alphabet)) {
      result = userList.filter((element) => (element.name.first.charAt(0).toLowerCase() === alphabet.toLowerCase()) || 
      this.elementContainsSearchString(searchInput, element));
    } else {
      result = userList || [];
    }
    result = result.map((u) => {
      return <RandomUser
        key={u.login.uuid}
        id ={u.login.uuid}
        picture={u.picture.medium}
        name={`${u.name.first} ${u.name.last}`}
        email={u.email}
        phone={u.phone}
        street={`${u.location.street.name} ${u.location.street.number}`}
        city={u.location.city}
        state={u.location.state}
        postcode={u.location.postcode}
      />;
    });

    return result;
  }

  render() {
    const sortedUsers = this.state.users;
    const filteredList = this.filterItems(sortedUsers);
    return (
      <div className="content">
        <h2 className="content__title">Contact List</h2>
        <div>
          <div className="content__mainMenuBar">
            <input className="content__search" type="search" placeholder="Search contact" onChange={this.onSearchInputChange} />
            <div className="tab">
              {this.prepareAlphabets()} 
            </div>
               
          </div>
          <div className='wrapper'>
            {filteredList}
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;