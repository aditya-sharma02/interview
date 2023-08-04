import { createSlice, current } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addTodo(state, action) {
            // console.log(action.payload)
            state.push({
                data: action.payload,
                time: Date.now()
            })
        },
        deleteTodo(state, action) {
            
            // console.log(current(state))
            // const abc  = state.filter((elem) => {
            // //    console.log("sta")
            // //     console.log(elem.time)
            // //     console.log("end")
            //     console.log(elem.time === action.payload)
            //     return elem.time !== action.payload;    
            // })
            for (let i = 0; i < current(state).length; i++){
                if(current(state)[i].time === action.payload){
                    state.splice(i, 1);
                }
            }
            // state = [...abc];
        },
    }
}) 

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;