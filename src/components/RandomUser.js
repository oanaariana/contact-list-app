import React, { Component } from 'react';

class RandomUser extends Component {
  render() {
    return (
      <div className="wrapper__box">
        <h4 className="underline" onClick={() => this.props.onAccordionClick(this.props.id)}>{`${this.props.user.name.last}  ${this.props.user.name.first}`}</h4>
        <div key={this.props.id} id={this.props.id}
          className={`check-card ${this.props.isOpen ? "visible" : "unvisible"}`}>
          <div className="container">
            <button className="container__closebtn" onClick={() => this.props.onAccordionClick(this.props.id)}>X</button>
            <img src={this.props.user.picture.medium} className="container__image" alt="" />
            <div className="container__text">
              <h4 className="container__text--title">{`${this.props.user.name.first} ${this.props.user.name.last}`}</h4>
              <table className="container__text--content">
                <tbody>
                  <tr>
                    <td><strong>e-mail</strong></td>
                    <td>{this.props.user.email}</td>
                  </tr>
                  <tr>
                    <td><strong>phone</strong></td>
                    <td>{this.props.user.phone}</td>
                  </tr>
                  <tr>
                    <td><strong>street</strong></td>
                    <td>{`${this.props.user.location.street.name} ${this.props.user.location.street.number}`}</td>
                  </tr>
                  <tr>
                    <td><strong>city</strong></td>
                    <td>{this.props.user.location.city}</td>
                  </tr>
                  <tr>
                    <td><strong>state</strong></td>
                    <td>{this.props.user.location.state}</td>
                  </tr>
                  <tr>
                    <td className="mark"><strong>postcode</strong></td>
                    <td>{this.props.user.location.postcode}</td>
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