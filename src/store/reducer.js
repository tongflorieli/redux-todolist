let initialState = {todo:[]};

const todoReducer = (state  = initialState, action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return {todo:[
                ...state.todo,
                {content:action.value, complete:false, id:action.id}
            ]};
        case 'TOGGLE_TODO':
            return state.map((e,index)=>{
                    if(e.id === action.id){
                        e.complete = !e.complete;
                    }
                    return e;
                });
        default:
            return state;
    }
}
export default todoReducer;