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
            // profilepicture:''
        };
    }

    componentDidMount() {
        console.log("Print id: " + this.props.match.params.id);
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
                    // profilepicture:res.data.prfpic

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
            // profilepicture:this.state.prfpic
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
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className='form-group'>
                                <label htmlFor="name">Name</label>
                                <input
                                    type='text'
                                    placeholder='John Doe'
                                    name='name'
                                    className='form-control'
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <br />

                            <div className='form-group'>
                                <label htmlFor="gender">Gender</label>
                                <input
                                    type='text'
                                    placeholder='Female'
                                    name='gender'
                                    className='form-control'
                                    value={this.state.gender}
                                    onChange={this.onChange}
                                />
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
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="category">Category</label>
                                <input
                                    type='text'
                                    placeholder='General'
                                    name='category'
                                    className='form-control'
                                    value={this.state.category}
                                    onChange={this.onChange}
                                />
                            </div>
                            {/* <div className='form-group'>
                                <label htmlFor="profilepicture">Profile Picture</label>
                                <input
                                    type='text'
                                    placeholder='profilepicture of this Book'
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