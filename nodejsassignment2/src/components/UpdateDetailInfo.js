import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateDetailInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            gender: '',
            email: '',
            mobile: '',
            category: ''
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:8082/api/details/' + this.props.match.params.id)
            .then(res => {
                // this.setState({ ...this.state, detail: res.data })
                this.setState({
                    name: res.data.name,
                    gender: res.data.gender,
                    email: res.data.email,
                    mobile: res.data.mobile,
                    category: res.data.category
                })
            })
            .catch(err => {
                console.log("Error from UpdateDetailInfo#####", err);
            })
    };

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
        };

        axios
            .put('http://localhost:8082/api/details/' + this.props.match.params.id, data)
            .then(res => {
                this.props.history.push('/show-details/' + this.props.match.params.id);
            })
            .catch(err => {
                console.log("Error in UpdateDetailInfo! ######", err);
            })
    };


    render() {
        return (
            <div className="UpdateDetailInfo">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <br />
                            <Link to="/" className="btn btn-outline-warning float-left">
                                Show Profile List
                            </Link>
                        </div>
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Edit Profile</h1>
                            <p className="lead text-center">
                                Update Profile's Info
                            </p>
                        </div>
                    </div>

                    <div className="col-md-8 m-auto">
                        <form noValidate onSubmit={this.onSubmit} encType="multipart/form-data">
                            <div className='form-group'>
                                <label htmlFor="name">Name</label>
                                <input
                                    type='text'
                                    placeholder='John Doe'
                                    name='name'
                                    className='form-control'
                                    value={this.state.name}
                                    onChange={this.onChange}
                                    pattern='/^[a-zA-Z][a-zA-Z ]*$/'
                                    required
                                />
                            </div>

                            <div className="form-group">

                                <label htmlFor="gender">Gender</label><br />
                                <label className="radio-inline mr-4">
                                    <input
                                        className="mr-2"
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        onChange={this.onChange}
                                        checked={this.state.gender === "Male"}
                                        required
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
                                        checked={this.state.gender === "Female"}
                                        required
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
                                        checked={this.state.gender === "Other"}
                                        required
                                    />
                                        Other
                                    </label>

                            </div>

                            <div className='form-group'>
                                <label htmlFor="email">Email</label>
                                <input
                                    type='email'
                                    placeholder='john.doe@gmail.com'
                                    name='email'
                                    className='form-control'
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    pattern="/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/"
                                    required
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="mobile">Mobile Number</label>
                                <input
                                    type='text'
                                    placeholder='9876543210'
                                    name='mobile'
                                    className='form-control'
                                    value={this.state.mobile}
                                    onChange={this.onChange}
                                    required
                                    pattern="/^[6-9]\d{9}$/"
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="category">Category</label>

                                <select className="form-control" name="category" required onChange={this.onChange} id="category">
                                    <option value="" disabled>Category</option>
                                    <option value="General"
                                        defaultValue={this.state.category === "General"}>General</option>
                                    <option value="SC/ST"
                                        defaultValue={this.state.category === "SC/ST"}>SC/ST</option>
                                    <option value="OBC"
                                        defaultValue={this.state.category === "OBC"}>OBC</option>
                                </select>


                            </div>
                            {/* <div className='form-group'>
                                <label htmlFor="profilepicture">Profile Picture</label>
                                <input
                                    type='file'
                                    name='profilepicture'
                                    className='form-control'
                                    value={this.state.profilepicture}
                                    onChange={this.onChange}
                                />
                            </div> */}

                            <button type="submit"
                                className="btn btn-outline-info btn-lg btn-block">
                                Update Profile
                                </button>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

export default UpdateDetailInfo;