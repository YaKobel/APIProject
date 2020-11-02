import axios from 'axios';
import { GET_TABL_LIST, DELETE_TABL, ADD_TABL, TOGGLE_TABL } from '../action/types'

axios.defaults.xsrfCookieName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

//Get tabl list

export const getTabls = () => dispatch => {
    axios.get('api/tabl/')
    .then(result =>{
        dispatch({
            type: GET_TABL_LIST,
            playload: result.data
        });
    }).catch(error => console.log(error));
};

//Delete tabl
export const deleteTabl = (id) => dispatch => {
    axios.delete(`api/tabl/${id}/`)
    .then(result => {
        dispatch({
            type: DELETE_TABL,
            playload: id
        });
    }).catch(error => console.log(error));
};

//Toggle table
export const toggleTabl = (tabl) => dispatch => {
    tabl.done = !tabl.done;
    axios.put(`api/tabl/${tabl.id}/`, tabl)
    .then(result => {
        dispatch({
            type: TOGGLE_TABL,
            playload: result.data
        });
    }).catch(error => console.log(error));
};

//Add tabl
export const addTabl = (tabl) => dispatch => {
    axios.post('api/tabl/', tabl)
        .then(result => {
            dispatch({
                type: ADD_TABL,
                playload: result.data
            });
        }).catch(error => console.log(error));
};