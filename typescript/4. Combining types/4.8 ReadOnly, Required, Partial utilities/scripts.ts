/** ReadOnly, Required, Partial utilities **/

interface Todo {
    readonly id : number,
    title : string,
    description : string,
    completed : boolean,
    createdAt ?: number
}

// ReadOnly
type ReadOnlyTodo = Readonly<Todo>;

// Required
type RequiredTodo = Required<Todo>;

// Partial
type PartialTodo = Partial<Todo>;
function updateTodo(todo:Todo, fieldsToUpdate: PartialTodo) {
    return {...todo, ...fieldsToUpdate}
}

export {}