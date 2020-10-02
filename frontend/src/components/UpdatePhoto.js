import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateDetailInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profilepicture: null
        };
    }

    onFileChange = e => {
        console.log(e.target.files[0]);
        this.setState({ profilepicture: e.target.files[0] });
    }

    onSubmit = e => {
        e.preventDefault();

        var formData = new FormData();
        formData.append("file", this.state.profilepicture);
        console.log(this.props.match.params.id, formData)
        axios
            .patch('http://localhost:8082/api/details/' + this.props.match.params.id, formData)
            .then(res => {
                this.props.history.push('/edit-photo/' + this.props.match.params.id);
            })
            .catch(err => {
                console.log("Error in UpdatePhoto! ######", err);
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
                                Update Profile's Photo
                            </p>
                        </div>
                    </div>

                    <div className="col-md-8 m-auto">
                        <form noValidate onSubmit={this.onSubmit} encType="multipart/form-data">

                            <div className='form-group'>
                                <label htmlFor="profilepicture">Profile Picture</label>
                                <input
                                    type='file'
                                    name='profilepicture'
                                    className='form-control'
                                    onChange={this.onFileChange}
                                />
                            </div>

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