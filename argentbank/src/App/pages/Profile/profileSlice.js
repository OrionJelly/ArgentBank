import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const getUserProfile = createAsyncThunk(
    'profile/getUserProfile',
    async (token) => {
        const response = await fetch(
            'http://localhost:3001/api/v1/user/profile',
            {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            }
        )
        const res = await response.json()
        return res
    }
)

// get user account and filter response to retrieve only the account corresponding to the user
export const getUserAccount = createAsyncThunk(
    'profile/getUserAccount',
    async (userId) => {
        const response = await fetch('bankData/usersAccount.json')
        const res = await response.json()
        const filteredByUserId = res.filter((id) => id.id === userId)
        const resFilteredByUserId = filteredByUserId[0]
        return resFilteredByUserId
    }
)

export const changeUserName = createAsyncThunk(
    'profile/changeUserName',
    async (data) => {
        const response = await fetch(
            'http://localhost:3001/api/v1/user/profile',
            {
                method: 'PUT',
                headers: {
                    Authorization: 'Bearer ' + data.token,
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    userName: data.userName,
                }),
            }
        )

        const res = await response.json()
        return res.body
    }
)

export const profileSlice = createSlice({
    name: 'account',
    initialState: {
        userProfile: {},
        userAccount: {},
    },
    reducers: {
        removeUserData: (currentState, action) => {
            return {
                ...currentState,
                userProfile: action.payload,
                userAccount: action.payload,
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUserAccount.fulfilled, (state, action) => {
            return {
                ...state,
                userAccount: action.payload,
            }
        })
        builder.addCase(getUserAccount.rejected, (state, action) => {
            return { ...state }
        })
        builder.addCase(getUserProfile.fulfilled, (state, action) => {
            return { ...state, userProfile: action.payload.body }
        })
        builder.addCase(getUserProfile.rejected, (state, action) => {
            return { ...state }
        })
        builder.addCase(changeUserName.fulfilled, (state, action) => {
            return { ...state, userProfile: action.payload }
        })
        builder.addCase(changeUserName.rejected, (state, action) => {
            return { ...state }
        })
    },
})
