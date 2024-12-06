// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import reservationReducer from "./reservationSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    reservation: reservationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
