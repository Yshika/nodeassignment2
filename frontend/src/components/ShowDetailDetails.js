import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showDetailDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: {}
        };
    }

    componentDidMount() {
        // console.log("Print id: " + this.props.match.params.id);
        axios
            .get('http://localhost:8082/api/details/' + this.props.match.params.id)
            .then(res => {
                // console.log("Print-showDetailDetails-API-response: " + res.data);
                this.setState({
                    detail: res.data
                })
            })
            .catch(err => {
                console.log("Error from ShowBookDetails#####", err);
            })
    };

    onDeleteClick(id) {
        axios
            .delete('http://localhost:8082/api/details/' + id)
            .then(res => {
                this.props.history.push("/");
            })
            .catch(err => {
                console.log("Error form ShowBookDetails_deleteClick#####", err);
            })
    };


    render() {

        const detail = this.state.detail;
        let DetailItem = <div>
            <table className="table table-hover table-dark">
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Name</td>
                        <td>{detail.name}</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Gender</td>
                        <td>{detail.gender}</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Email</td>
                        <td>{detail.email}</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Mobile Number</td>
                        <td>{detail.mobile}</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Category</td>
                        <td>{detail.category}</td>
                    </tr>

                </tbody>
            </table>
        </div>

        return (
            <div className="ShowDetailDetails">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 m-auto">
                            <br /> <br />
                            <Link to="/" className="btn btn-outline-warning float-left">
                                Show Profile's List
              </Link>
                        </div>
                        <br />
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Profile's Record</h1>
                            <p className="lead text-center">
                                View Profile's Info
              </p>
                            <hr /> <br />
                        </div>
                    </div>
                    <div>
                        {DetailItem}
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <button type="button"
                                className="btn btn-outline-danger btn-lg btn-block"
                                onClick={this.onDeleteClick.bind(this, detail._id)}>
                                Delete Profile
                                </button>
                            <br />
                        </div>

                        <div className="col-md-6">
                            <Link to={`/edit-details/${detail._id}`}
                                className="btn btn-outline-info btn-lg btn-block">
                                Edit Profile
                            </Link>
                            <br />
                        </div>

                    </div>
                    {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

                </div>
            </div>
        );
    }
}

export default showDetailDetails;