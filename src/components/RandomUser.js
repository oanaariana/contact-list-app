import React, { Component } from 'react';

class RandomUser extends Component {
  constructor(props) {
    super(props);
    //this.handleClick = this.handleClick.bind(this);
    this.state = {
      editVisible: undefined
    };
  }

  showEditDiv = id => {
    this.setState({ editVisible: id })
  };

  // handleClick = selectedId => {
  //   this.setState({
  //     selectedId
  //   });
  // };

  render() {
    // const isActive = this.props.id === this.state.selectedId;
    // console.log(isActive)
    // const display = isActive ? "visible" : "unvisible";
    return (

      <div>
        <h4 onClick={() => this.showEditDiv(this.props.id)}>{this.props.name}</h4>
        <div key={this.props.id} id={this.props.id}
          className={`edit-card ${this.state.editVisible !== this.props.id ? "unvisible" : "visible"}`}>
          <div className="container">
            <img src={this.props.picture} className="container__image" alt="" />
            <div className="container__text">
              <h4 className="container__text--title">{this.props.name}</h4>
              <table>
                <tbody>
                  <tr>
                    <td><strong>e-mail</strong></td>
                    <td>{this.props.email}</td>
                  </tr>
                  <tr>
                    <td><strong>phone</strong></td>
                    <td>{this.props.phone}</td>
                  </tr>
                  <tr>
                    <td><strong>street</strong></td>
                    <td>{this.props.street}</td>
                  </tr>
                  <tr>
                    <td><strong>city</strong></td>
                    <td>{this.props.city}</td>
                  </tr>
                  <tr>
                    <td><strong>state</strong></td>
                    <td>{this.props.state}</td>
                  </tr>
                  <tr>
                    <td className="mark"><strong>postcode</strong></td>
                    <td>{this.props.postcode}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomUser;