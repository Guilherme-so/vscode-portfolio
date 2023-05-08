import { tabs } from "@/components/helper/constants";
import { createSlice } from "@reduxjs/toolkit";
import Tab from "./interface"

export interface FilesState {
  value: Tab[];
  size: number
}

const initialState: FilesState = {
  value: tabs,
  size: 192
};

export const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    deleteFile: (state, action) => {
      state.value = state.value.filter(
        (item: any) => item.id != action.payload
      );
    },
    addFile: (state, action) => {
      const itemExist = state.value.find(
        (item: any) => item.id === action.payload.id
      );
      if (!itemExist) {
        state.value.push(action.payload);
      }
    },
    setSidebarWidth: (state, action) => {
      state.size = action.payload
    }
  },
});

export const { deleteFile, addFile,setSidebarWidth } = filesSlice.actions;
export default filesSlice.reducer;
