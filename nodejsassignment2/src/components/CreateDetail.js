import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import axios from 'axios';

class CreateDetail extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            gender: '',
            email: '',
            mobile: '',
            category: ''
            // profilepicture:''
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const data = {
            name: this.state.name,
            gender: this.state.gender,
            email: this.state.email,
            mobile: this.state.mobile,
            category: this.state.category
            // profilepicture:this.state.prfpic
        };

        axios
            .post('http://localhost:8082/api/details', data)
            .then(res => {
                this.setState({
                    name: '',
                    gender: '',
                    email: '',
                    mobile: '',
                    category: ''
                    // profilepicture:''

                })
                this.props.history.push('/');
            })
            .catch(err => {
                console.log("Error in CreateDetail! #####", err);
            })
    }

    render() {
        return (
            <div className="CreateDetail">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <br />
                            <Link to="/" className="btn btn-outline-warning float-left">
                                Show Profiles List
                            </Link>
                        </div>

                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">
                                Add Profile
                            </h1>
                            <p className="lead text-center">
                                Create new Profile
                            </p>

                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Name"
                                        value={this.state.name}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <br />

                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="gender"
                                        placeholder="Gender"
                                        value={this.state.gender}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <br />

                                <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <br />

                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="mobile"
                                        placeholder="Mobile Number"
                                        value={this.state.mobile}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <br />

                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="category"
                                        placeholder="Category"
                                        value={this.state.category}
                                        onChange={this.onChange}
                                    />
                                </div>
                                {/* <br />

                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="profilepicture"
                                        placeholder="Name"
                                        value={this.state.profilepicture}
                                        onChange={this.onChange} 
                                        />
                                </div>
                                <br /> */}

                                <input
                                    type="submit"
                                    className="btn btn-outline-warning btn-block mt-4"
                                />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateDetail;
