import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "../pages/Login/userSlice";
import { profileSlice } from "../pages/Profile/profileSlice";

let state = {
    user: {},
    account: {}
}


export const store = configureStore(
    {
        preloadedState: state,
        reducer: combineReducers({
            user: userSlice.reducer,
            account: profileSlice.reducer,


        },
        ),


    }
)

