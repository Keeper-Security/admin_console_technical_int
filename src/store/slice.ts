import { createSlice } from "@reduxjs/toolkit";

interface userProps {
    id: number;
    name: string;
    color: string;
}

interface initialStateProps {
    users: userProps[];
}

const initialState:initialStateProps = {
    users: [
        { id: 1, name: 'Jared', color: '#38B6FF' },
        { id: 2, name: 'Steve', color: 'green' },
    ]
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addToUsers: (state, action) => {
            const newUser = action.payload;
            state.users.push(newUser);
        },
        removeFromUsers: (state, action) => {
            const id = action.payload;
            state.users = state.users.filter(user => user.id !== id);
        }
    }
});

export const { addToUsers, removeFromUsers } = usersSlice.actions;

export default usersSlice.reducer;