import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CardDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  componentDidMount() {
    this.setState({ title: this.props.title ? this.props.title : 'Card' });
  }

  render() {
    return (
      <div className="card shadow mb-4">
        {/* <!-- Card Header - Dropdown --> */}
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">{this.state.title}</h6>
          <div className="dropdown no-arrow">
            <button
              className="dropdown-toggle btn btn-link"
              type="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
            </button>
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
              aria-labelledby="dropdownMenuLink"
            >
              <div className="dropdown-header">Dropdown Header:</div>
              <Link className="dropdown-item" to="/action">Action</Link>
              <Link className="dropdown-item" to="/another-action">Another action</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/something-else">Something else here</Link>
            </div>
          </div>
        </div>
        {/* <!-- Card Body --> */}
        <div className="card-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default CardDropdown;
