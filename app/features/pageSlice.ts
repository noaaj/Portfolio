import { createSlice } from '@reduxjs/toolkit';

export const pageReducer = createSlice({
    name: 'page',
    initialState: {
        value: 'Home'
    }, 
    reducers: {
        home: state => {
            state.value = 'Home'
        }, 
        skills: state => {
            state.value = 'Skills'
        }, 
        work: state => {
            state.value = 'Work'
        }, 
        contact: state => {
            state.value = 'Contact'
        }
    }
})

export const {home, skills, work, contact} = pageReducer.actions;