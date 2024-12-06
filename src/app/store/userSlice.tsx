// store/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
}

const initialState: UserState = {
  id: null,
  firstName: null,
  lastName: null,
  email: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.id = null;
      state.firstName = null;
      state.lastName = null;
      state.email = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
