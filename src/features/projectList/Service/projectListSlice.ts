import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProjectList } from "./projectListTypes";

interface IProjectListSlice {
    projects: IProjectList[]
}

const initialState: IProjectListSlice = {
    projects: []
}
const projectSlice = createSlice({
    name: "projectSlice",
    initialState,
    reducers: {
        addItem: (state: IProjectListSlice, action: PayloadAction<IProjectList>) => {
            let newState = state.projects
            newState.push(action.payload)
            state.projects = newState
        },
        updateItem: (state: IProjectListSlice, action: PayloadAction<IProjectList>) => {
            const index = state.projects.findIndex(item => item.id === action.payload.id);
            state.projects[index]=action.payload
        },
        deleteItem: (state: IProjectListSlice, action: PayloadAction<string>) => {
            let newState = state.projects.filter((f: IProjectList) => f.id !== action.payload)
            state.projects = newState
        }
    }
})

export const { addItem, updateItem, deleteItem } = projectSlice.actions
export default projectSlice.reducer

export const selectProjectList = (state: any) => state.projectList.projects