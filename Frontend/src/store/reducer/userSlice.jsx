import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: []
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loadUser: (state, actions) => {
            state.userData = actions.payload;
        }
    }
});

export const { loadUser } = userSlice.actions;
export default userSlice.reducer;