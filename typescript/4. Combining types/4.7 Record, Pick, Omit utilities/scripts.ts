/** Record, Pick, Omit utilities **/

// Record
type Names = Record<string, any>

type WellKnownBrands = 'apple' | 'lenovo' | 'hp' | 'dell' | 'microsoft' | 'huawei';
type BrandNames = Record<WellKnownBrands, string>

// Pick
interface Todo {
    id: number,
    title: string,
    description: string,
    completed: boolean,
    createdAt: number
}
type SimpleTodo = Pick<Todo, 'id' | 'title' | 'completed'>
const todo1: SimpleTodo = {
    id: 1,
    title: 'title',
    completed: true,
}

// Omit
type SimpleTodo2 = Omit<Todo, 'description' | 'createdAt'>
const todo2: SimpleTodo = {
    id: 2,
    title: 'title 2',
    completed: false,
}

export {}