class Model {
    constructor() {
        // The state of the model, array of todo objects, prepopulated with some data
        this.todos = [
            { id: 1, text: 'Run a marathon', complete: false},
            { id: 2, text: 'Plant a garden', complete: false},
        ]
    }

    // Append a todo to the todos array
    addTodo(todo) {
        this.todos = [...this.todos, todo]
    }

    // Map through all todos, and replace the text of the todo with the specified id
    editTodo(id, updatedText) {
        this.todos = this.todos.map(todo =>
         todo.id === id ? {id:todo.id, text: updatedText, complete: todo.complete } : todo        
        )
    }

    // Filter a todo out of the array by id
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    // Flip the complete boolean on the specified todo
    toggleTodo(id) {
        this.todos = this.todos.map(todo =>
            todo.id === id ? { id: todo.id, text: todo.text, complete: !todo.complete } : todo
        )
    }
}

class View {
    constructor() {

    }
}

class Controller {
    constructor(mode, view) {
        this.model = this.model
        this.view = view
    }
}

const app = new Controller(new Model(), new view())