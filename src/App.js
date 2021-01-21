import React, { Component } from "react";
import axios from "axios";
import './App.scss';
import 'font-awesome/css/font-awesome.min.css';

import RandomUser from './components/RandomUser';

class App extends Component {
  state = { users: [], searchInput: '', alphabet: '', openAccordions: [] };

  onSearchInputChange = (e) => {
    this.setState({ searchInput: e.target.value })
  }

  onAccordionClick = (id) => {
    //SINGLE ACCORDION OPEN AT ONCE
    if (this.state.openAccordions.includes(id)) {
      this.setState({ openAccordions: this.state.openAccordions.filter(openId => openId !== id) })
    } else {
      this.setState({ openAccordions: [id] })
    }

    //MULTIPLE ACCORDIONS OPEN AT ONCE
    /*   if (this.state.openAccordions.includes(id)) {
        this.setState({openAccordions: this.state.openAccordions.filter(openId => openId !== id)})
      } else {
        this.setState(prevState => ({...prevState, openAccordions: [...prevState.openAccordions, id]}))
      } */
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
      result.push(
        <button key={i} className="content__tablinks" onClick={this.onAlphabetClick} value={String.fromCharCode(i)}>{String.fromCharCode(i)}</button>
      )
    }
    return result;
  }

  elementContainsSearchString = (searchInput, element) => (searchInput ? element.name.last.toLowerCase().includes(searchInput.toLowerCase()) : false);

  filterItems = (userList) => {
    let result = [];
    const { searchInput, alphabet } = this.state;
    if (userList && (searchInput || alphabet)) {
      result = userList.filter((element) => (element.name.last.charAt(0).toLowerCase() === alphabet.toLowerCase()) ||
        this.elementContainsSearchString(searchInput, element));
    } else {
      result = userList || [];
    }
    return result.map((u) => {
      return <RandomUser
        key={u.login.uuid}
        id={u.login.uuid}
        user={u}
        onAccordionClick={this.onAccordionClick}
        isOpen={this.state.openAccordions.includes(u.login.uuid)}
      />;
    });
  }

  render() {
    const sortedUsers = this.state.users;
    const filteredList = this.filterItems(sortedUsers);
    return (
      <div className="content">
        <h2 className="content__title">Contact List</h2>
        <div className="content__mainMenuBar">
          <div className="content__searchContainer">
            <span className="content__searchIcon"><i className="fa fa-search"></i></span>
            <input className="content__search" type="search" placeholder="Search" onChange={this.onSearchInputChange} />
          </div>
          <div className="content__tab">
            {this.prepareAlphabets()}
          </div>
        </div>
        <div className="content__wrapper">
          {filteredList}
        </div>
      </div>
    );
  }
}

export default App;