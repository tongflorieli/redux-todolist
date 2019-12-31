

let counter = 0;
export const addTodo = (content) =>({
    type: 'ADD_TODO',
    value: content,
    id:counter++
});
export const toggleTodo = (id) =>({
    type: 'TOGGLE_TODO',
    value:id 
});