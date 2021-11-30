import { createAction } from 'redux-actions';
import { createSlice } from '@reduxjs/toolkit'

interface InitAuthType {
    id: String,
    name: String,
    favoriteTeam:String
}

const INIT_AUTH : InitAuthType = {
    id:'',
    name:'',
    favoriteTeam: ''
}

// reducer of action include
export const authStore = createSlice({
    name: 'auth',
    initialState:INIT_AUTH,
    reducers:{
        signIn: (state, action) =>{
            state.id = action.payload
      },
    }
})

export const { signIn } = authStore.actions

export default authStore.reducer

