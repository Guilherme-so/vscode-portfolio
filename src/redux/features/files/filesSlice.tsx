import { createSlice } from "@reduxjs/toolkit";

const tabs = [
  {
    id: 1,
    icon: "/images/react_icon.svg",
    filename: "home.jsx",
    path: "/",
  },

  {
    id: 2,
    icon: "/images/html_icon.svg",
    filename: "about.html",
    path: "/about",
  },
  {
    id: 3,
    icon: "/images/yml_icon.svg",
    filename: "contact.yml",
    path: "/contact",
  },
  {
    id: 4,
    icon: "/images/py_icon.svg",
    filename: "projects.py",
    path: "/projects",
  },
  {
    id: 5,
    icon: "/images/markdown_icon.svg",
    filename: "github.md",
    path: "/github",
  },
];

export interface FilesState {
  value: any;
}

const initialState: FilesState = {
  value: tabs,
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
        state.value.push(action.payload);
    },
  },
});

export const { deleteFile, addFile } = filesSlice.actions;
export default filesSlice.reducer;
