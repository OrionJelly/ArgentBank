import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { selectUserProfileId } from '../../Store/selectors'

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
        const data = await response.json()
        return data
    }
)

export const getUserAccount = createAsyncThunk(
    'profile/getUserAccount',
    async (userId) => {
        const response = await fetch('bankData/usersAccount.json')
        const data = await response.json()
        const filteredByUserId = data.filter((id) => id.id === userId)
        const dataFilteredByUserId = filteredByUserId[0]
        return dataFilteredByUserId
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
    },
})
