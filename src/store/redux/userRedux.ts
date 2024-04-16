import { createSlice } from "@reduxjs/toolkit";

const userNameSlice=createSlice({
    name:"username",
    initialState:{
        userName:""
    },
    reducers:{
        createNewUser:(state,action)=>{
            //{...state},
            return{userName:action.payload}
        }
    }
});
export const createnewUser=userNameSlice.actions.createNewUser;
export default userNameSlice.reducer;