import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchcharacter = createAsyncThunk('characters/getCharacters', async (page) => {
    return await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character?page=${page}`)
})

export  const characterSlice= createSlice({
    name:'characters',
    initialState:{
        items:[],
        status:'idle',
        page:0,
    },
    reducers:{},
    extraReducers:{
        [fetchcharacter.pending]:(state,action)=>{
            state.status = 'loading'
        },
        [fetchcharacter.fulfilled]:(state,action) =>{
            console.log(action.payload);
            state.items=[...state.items, ...action.payload.data.results]
            state.status = 'succeeded'
            state.page += 1;
        },
        [fetchcharacter.rejected]:(state,action) =>{
            state.status ='failed'
            state.error = action.error.message
        }
    }

});

export default characterSlice.reducer;