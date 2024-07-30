import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    id?: number;
    email?: string;
    username?: string;
    created_at?: string;
    updated_at?: string;
}

const initialState: UserState = {};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData(state, action: PayloadAction<UserState>) {
            return { ...action.payload };
        },
        clearUserData() {
            return initialState;
        }
    }
});

export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;