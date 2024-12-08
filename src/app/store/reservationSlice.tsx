// store/reservationSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationState {
  date: string | null;
  time: string | null;
  confirmationSent: boolean;
}

const initialState: ReservationState = {
  date: null,
  time: null,
  confirmationSent: false,
};

const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    setReservation: (
      state,
      action: PayloadAction<ReservationState>
    ) => {
      state.date = action.payload.date;
      state.time = action.payload.time;
      state.confirmationSent = action.payload.confirmationSent;
    },
    cancelReservation: (state) => {
      state.date = null;
      state.time = null;
      state.confirmationSent = false;
    },
  },
});

export const { setReservation, cancelReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
