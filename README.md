# Welcome to Node API Tutorial

This is an interactive tutorial that will teach you how to create an API with Node and Express.

### 🌱  How to start this project

This project comes with the necessary files to start working immediately.

We recommend opening this very same repository using a provisioning tool like [Codespaces](https://4geeks.com/lesson/what-is-github-codespaces) (recommended) or [Gitpod](https://4geeks.com/lesson/how-to-use-gitpod). Alternatively, you can clone it on your local computer using the `git clone` command.

This is the repository you need to open:

```
https://github.com/breatheco-de/node-express-api-tutorial
```

**👉 Please follow these steps on** [how to start a coding project](https://4geeks.com/lesson/how-to-start-a-project).

💡 Important: Remember to save and upload your code to GitHub by creating a new repository, updating the remote (`git remote set-url origin <your new url>`), and uploading the code to your new repository using the `add`, `commit` and `push` commands from the git terminal.

## About the project we are going to build

In this tutorial we are going to be building a REST API that exposes 3 endpoints to the internet:

```txt
GET /todos
POST /todos
DELETE /todos/<int:position>
```

### GET /todos

Will return the list of all todos like this:

```javascript
[
    {
        "done": true,
        "label": "Sample Todo 1"
    },
    {
        "done": true,
        "label": "Sample Todo 2"
    }
]
```

### POST /todos

It's going to add a new todo to the list, it will receive the following request body:

```javascript
{
    "done": true,
    "label": "Sample Todo 1"
}
```

And return the updated list of todos.

### DELETE /todos/<int:position>

It's going to remove one todo based on a given position at the end of the url, and return the updated list of todos.
