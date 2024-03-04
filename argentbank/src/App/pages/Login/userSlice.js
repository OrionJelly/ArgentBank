import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (userLogs, thunkApi) => {
        const response = await fetch(
            'http://localhost:3001/api/v1/user/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userLogs),
            }
        )
        const data = await response.json()

        return data.body.token
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: '',
    },
    reducers: {
            removeUserData: (currentState, action) => {
                return {...currentState, token: action.payload}
            }

    },
    extraReducers: (builder) => {
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            return { ...state, token: action.payload }
        })
        builder.addCase(loginThunk.rejected, (state, action) => {
            return { ...state }
        })
    },
})
