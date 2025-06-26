import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Title {
	value: string;
}

interface GlobalState {
	title: string;
}

const initialState: GlobalState = {
	title: "",
};

const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		setTitle: (state, action: PayloadAction<string>) => {
			state.title = action.payload;
		},
	},
});

export const { setTitle } = globalSlice.actions;
export default globalSlice.reducer;
