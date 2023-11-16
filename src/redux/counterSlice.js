import { createSlice } from "@reduxjs/toolkit";



export const counterslice = createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    //actions are created inside this reducers key as object 
    reducers:{
        //logics to update state\



        //function to increment number
        increment:(state ,action)=>{
            state.value +=action.payload
        },

        //function to decrement number
        decrement:(state , action)=>{
            state.value -=action.payload
        },
        //function to reset

        reset:(state)=>{
            state.value =0
        }
    }
})    

//action is required by componet inorder to update state

export const {increment,decrement,reset} =counterslice.actions

//reducer is required to state to change the state value

export default counterslice.reducer