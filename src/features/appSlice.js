import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
	name: "app",
	initialState: {
		roomId: null,
	},
	reducers: {
		enterRoom: (state, action) => {
			state.roomId = action.payload.roomId;
		},
	},
});

export const { enterRoom } = appSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectRoomId = (state) => state.app.value;

export default appSlice.reducer;
