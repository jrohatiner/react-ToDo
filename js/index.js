function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class ToDoApp extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "undoItem",

    index => {
      this.setState({
        todo: this.state.todo.concat(this.state.done[index]),
        done: this.state.done.filter((item, key) => key !== index) });

    });_defineProperty(this, "doItem",

    index => {
      this.setState({
        done: this.state.done.concat(this.state.todo[index]),
        todo: this.state.todo.filter((item, key) => key !== index) });

    });_defineProperty(this, "deleteToDoItem",

    index => {
      this.setState({
        todo: this.state.todo.filter((item, key) => key !== index) });

    });_defineProperty(this, "deleteDoneItem",

    index => {
      this.setState({
        done: this.state.done.filter((item, key) => key !== index) });

    });this.state = { todo: [], done: [], input: '' };this.handleChange = this.handleChange.bind(this);this.handleSubmit = this.handleSubmit.bind(this);}handleChange(event) {this.setState({ input: event.target.value });}handleSubmit(event) {event.preventDefault();if (this.state.input !== '') {const newItem = { id: Date.now(), text: this.state.input };this.setState(prevState => ({ todo: prevState.todo.concat(newItem), input: '' }));}}

  render() {
    return (
      React.createElement("div", { className: "todo-container" },

      React.createElement("div", { className: "todo-heading" },
      React.createElement("div", { className: "todo-heading-circle" },
      React.createElement("i", { class: "fas fa-check" })),

      React.createElement("h1", { className: "todo-heading-text" }, "To Do List")),


      React.createElement("div", { className: "todo-add" },
      React.createElement("h2", { className: "todo-subheading" }, "Add Item"),
      React.createElement("form", { className: "todo-add-form", onSubmit: this.handleSubmit },
      React.createElement("label", { className: "todo-add-label", htmlFor: "add-item" }, "What do you want to do?"),
      React.createElement("input", { id: "add-item", className: "todo-add-item", type: "text", value: this.state.input, onChange: this.handleChange, placeHolder: "ToDo Item" }),
      React.createElement("button", { className: "todo-add-submit-item", type: "submit" }, "Add Item"))),



      React.createElement("div", { className: "todo-lists-container" },
      React.createElement("div", { className: "todo-list-container" },
      React.createElement("h2", { className: "todo-subheading" }, "To Do",

      React.createElement("span", { className: "todo-percent" },
      '' + (this.state.todo.length + this.state.done.length > 0 ? Math.round(this.state.todo.length / (this.state.todo.length + this.state.done.length) * 100 * 100) / 100 : 0) + '%')),



      React.createElement(ToDoItems, { id: "todo-list-todo", items: this.state.todo, toggleDone: this.doItem, delete: this.deleteToDoItem })),

      React.createElement("div", { className: "todo-list-container" },
      React.createElement("h2", { className: "todo-subheading" }, "Done",

      React.createElement("span", { className: "done-percent" },
      '' + (this.state.todo.length + this.state.done.length > 0 ? Math.round(this.state.done.length / (this.state.todo.length + this.state.done.length) * 100 * 100) / 100 : 0) + '%')),



      React.createElement(ToDoItems, { id: "todo-list-done", items: this.state.done, toggleDone: this.undoItem, delete: this.deleteDoneItem })))));

  }}


class ToDoItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      React.createElement("ul", { id: this.props.id, className: "todo-list" },
      this.props.items.map(
      (item, key) =>
      React.createElement("li", { className: "todo-list-item", key: item.id },
      React.createElement("p", { className: "todo-list-item-text" }, item.text),
      React.createElement("div", { className: "todo-list-actions" },
      React.createElement("button", { className: "todo-list-action-delete", onClick: this.props.delete.bind(item, key) },
      React.createElement("i", { class: "fas fa-trash" })),


      React.createElement("button", { className: "todo-list-action-toggle", onClick: this.props.toggleDone.bind(item, key) },
      React.createElement("i", { class: "fas fa-check" })))))));


  }}


ReactDOM.render(
React.createElement(ToDoApp, null),
document.getElementById("main"));