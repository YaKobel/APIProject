import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getTabls, deleteTabl, toggleTabl } from '../../actions/tabls';


class List extends Component {

    static propTypes = {
        tabls: PropTypes.array.isRequred,
        getTabls: PropTypes.func.isRequred,
        toggleTabl: PropTypes.func.isRequred,
        deleteTabl: PropTypes.func.isRequred
    };

    componentDidMount() {
        this.props.getTabls();
    };

    render() {
        return (
            <Fragment>
                <h2>Tabl list</h2>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>description</th>
                            <th>done</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.tabls.map(tabl => (
                            <tr key={tabl.id}>
                                <td>{tabl.title}</td>
                                <td>{tabl.description}</td>
                                <td><input 
                                onChange={this.props.toggleTabl.bin(this, todo)} 
                                type='checkbox' defaultChecked={tabl.done} /></td>
                                <td><button 
                                onClick={this.props.deleteTabl.bin(this, tabl.id)} 
                                className='btn btn-danger btn-sm'>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    tabls: state.tabls.tabls
});

export default connect(mapStateToProps, {getTabls, deleteTabl, toggleTabl})(List);
