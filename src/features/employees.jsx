import axios from "axios"
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";





export const fetchEmployee=createAsyncThunk('employee/fetchEmployee',async(_,{rejectWithValue})=>{
    try{
        const response=await axios.get('http://localhost:8000/Employee')
        console.table(response.data)
        return response.data
    }catch(error){
        if(!error.response){
            return rejectWithValue(error)
        }
        return rejectWithValue(error.response.data)

    }
});


export const deleteEmployee=createAsyncThunk('employee/deleteEmployee',async(id,{dataValue})=>{
    try{
        const response=await axios.delete(`http://localhost:8000/Employee/${id}`)
        return response.data
    }catch(error){
        if(!error.response){
            return dataValue(error)
        }
        return dataValue(error.response.data)
    }
})


export const addEmployee=createAsyncThunk('employee/addEmployee',async (data,{dataValue})=>{
    try{
        const url='http://localhost:8000/Employee'
        const response=await axios.post(url,data)
        console.log(response)
        return response.json()

    }catch(error){
        if(!error.response){
            return (dataValue(error))
        }
        return dataValue(error.response.data)
    }
})

export const employeeSlice=createSlice({
    name:'employee',
    initialState:{
        allEmployees:[],
          error:null,
          isLoading:false,
          deleteMessage:null,
          createMessage:null,
    },
    extraReducers:{
        [fetchEmployee.pending]:(state)=>{
            state.status='loading'
        },
        [fetchEmployee.fulfilled]:(state,{payload})=>{
            // console.log(payload)
            state.status='success'
            state.allEmployees=payload
        },
        [fetchEmployee.rejected]:(state,{payload})=>{
            state.status='failed'
            
            state.error=payload.error|| payload.toString()
        },

        [deleteEmployee.pending]:(state)=>{
            state.status='loading'
        },
        [deleteEmployee.rejected]:(state,{payload})=>{
            state.error=payload.error || payload.toString()
        },
        [deleteEmployee.fulfilled]:(state,{payload})=>{
            state.status='success'
            state.deleteMessage=payload.message

        },
        [addEmployee.fulfilled]:(state,{payload})=>{
            state.value=payload
            state.status='success'
            state.createMessage=payload.message

        },
        [addEmployee.pending]:state=>{
            state.status='loading'
        },
        [addEmployee.rejected]:(state,{payload})=>{
            state.status='failed'
            state.error=payload.error|| payload.toString()
        }

    },
})

export const emplyeeSelector=(state)=>state.allEmployees
//  const {addEmployee,deleteEmployee,fetchEmployee}=employeeSlice.actions
export default employeeSlice.reducer