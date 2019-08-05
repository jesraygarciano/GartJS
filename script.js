class Model {
    constructor() {
      // The state of the model, an array of todo objects, prepopulated with some data
      this.todos = [
        { id: 1, text: 'Run a marathon', complete: false },
        { id: 2, text: 'Plant a garden', complete: false },
      ]
    }
  
    // Append a todo to the todos array
    addTodo(todo) {
      this.todos = [...this.todos, todo]
    }
  
    // Map through all todos, and replace the text of the todo with the specified id
    editTodo(id, updatedText) {
      this.todos = this.todos.map(todo =>
        todo.id === id ? { id: todo.id, text: updatedText, complete: todo.complete } : todo
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

    // The roote element
    this.app = this.getElement('#root')

    // The title of the app
    this.title = this.createElement('h1');
    this.title.textContent = 'Todos';

    // The form, with a [type="text"] input, and a submit button
    this.form = this.createElement('form');

    this.input = this.createElement('input');
    this.input.type = 'text'
    this.input.placeholder = 'Add todo'
    this.input.name = 'todo'

    this.submitButton = this.createElement('button')
    this.submitButton.textContent = 'Submit'

    // The visual representation of the todo list
    this.todoList = this.createElement('ul', 'todo-list')

    // Append the input and submit button to the form
    this.form.append(this.input, this.submitButton)

    // Append the title, form, and todo list to the app
    this.app.append(this.title, this.form, this.todoList)
  }

    // Create an element with an Optional CSS class

    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.clasList.add(className)

        return element
    }

    // Retrieve an element from the DOM
    getElement(selector) {
        const element = document.querySelector(selector)

        return element
    }
}

class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
  }
}

const app = new Controller(new Model(), new View())