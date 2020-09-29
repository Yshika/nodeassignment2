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
            category: '',
            profilepicture: null
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onFileChange = e => {
        console.log(e.target.files[0]);
        this.setState({ profilepicture: e.target.files[0] });
    }
    onSubmit = e => {
        e.preventDefault();
        var formData = new FormData();

        // Update the formData object
        formData.append("file", this.state.profilepicture);
        formData.append("name", this.state.name);
        formData.append("category", this.state.category);
        formData.append("gender", this.state.gender);
        formData.append("email", this.state.email);
        formData.append("mobile", this.state.mobile);
        // Details of the uploaded file

        // const data = {
        //     name: this.state.name,
        //     gender: this.state.gender,
        //     email: this.state.email,
        //     mobile: this.state.mobile,
        //     category: this.state.category,
        //     profilepicture: this.state.profilepicture
        // };

        axios
            .post('http://localhost:8082/api/details', formData)
            .then(res => {
                this.setState({
                    name: '',
                    gender: '',
                    email: '',
                    mobile: '',
                    category: '',
                    profilepicture: null

                })
                this.props.history.push('/');
            })
            .catch(err => {
                console.log("Error in CreateDetail! #####", err);
            })
        alert('Details have been Submitted Sucessfully')
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

                            <form noValidate onSubmit={this.onSubmit} encType="multipart/form-data">
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

                                <div className="form-group">

                                    <label className="radio-inline mr-4">
                                        <input
                                            className="mr-2"
                                            type="radio"
                                            name="gender"
                                            value="Male"
                                            onChange={this.onChange}
                                        />
                                        Male
                                    </label>

                                    <label className="radio-inline mr-4">
                                        <input
                                            className="mr-2"
                                            type="radio"
                                            name="gender"
                                            value="Female"
                                            onChange={this.onChange}
                                        />
                                        Female
                                    </label>

                                    <label className="radio-inline">
                                        <input
                                            className="mr-2"
                                            type="radio"
                                            name="gender"
                                            value="Other"
                                            onChange={this.onChange}
                                        />
                                        Other
                                    </label>

                                </div>

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
                                    <select className="form-control" name="category" onChange={this.onChange} id="category">
                                        <option value="" selected disabled>Category</option>
                                        <option value="General">General</option>
                                        <option value="SC/ST">SC/ST</option>
                                        <option value="OBC">OBC</option>
                                    </select>

                                    {/* <input
                                        type="text"
                                        className="form-control"
                                        name="category"
                                        placeholder="Category"
                                        value={this.state.category}
                                        onChange={this.onChange}
                                    /> */}
                                </div>
                                <br />

                                <div className="form-group">
                                    <input
                                        type="file"
                                        className="form-control"
                                        name="file"
                                        onChange={this.onFileChange}
                                        accept='image/*'
                                    />
                                </div>

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
