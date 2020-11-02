import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTabl} from '../../actions/tabls';

export class Form extends Component {

    state = {
        title: '',
        description: ''
    }

    static PropTypes = {
        addTabl: PropTypes.func.isRequired
    };

    onSubmit = (e) => {
        e.preventDetault();
        const { title, description } = this.state;
        const tabl = { title, description };
        this.props.addTabl(tabl);
        this.setState({
            title: '',
            description: ''
        });

    };
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });


    render() {
        const { title, description } = this.state;

        return (
            <div className='card card-body mt-4 mb-4'>
                <h2>Add tabl</h2>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Title</label>
                        <input 
                        type='text'
                        className='form-control'
                        name='title'
                        onChange={this.onChange}
                        value={title} />
                    </div>
                    <div className='form-group'>
                        <label>Description</label>
                        <input 
                        type='text'
                        className='form-control'
                        name='description'
                        onChange={this.onChange}
                        value={description} />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-primary'>Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, {addTabl}) (Form);