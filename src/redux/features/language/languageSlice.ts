import { flags } from "@/components/helper/constants";
import { SelectOptions } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export interface languageState {
  value: SelectOptions;
}

const initialState: languageState = {
  value: flags[1],
};

export const switchLanguageSlice = createSlice({
  name: "switchLanguage",
  initialState,
  reducers: {
    ChangeOption: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { ChangeOption } = switchLanguageSlice.actions;

export default switchLanguageSlice.reducer;
