const form = document.getElementById("myForm");

window.addEventListener("DOMContentLoaded", event => {
  // get
  //   getData();
  fetch("/task")
    .then(response => response.json())
    .then(data => {
      // map over tasks
      data.tasks.map(val => {
        // GGL: create li
        let newListItem = document.createElement("li");

        // GGL: create text node with task value
        let text = document.createTextNode(val.task);

        // GGL: attach text to list item
        newListItem.appendChild(text);

        // GGL: attach new list item to todo
        document.getElementById("todo").appendChild(newListItem);
      });
    });
});

// const validUsername = "codesmith";
// const validPassword = "ilovetesting";
const loginButton = e => {
  //   e.preventDefault();
  let username = document.getElementById("username").value;
  console.log(username);

  let password = document.getElementById("password").value;
  console.log(password);

  if (username === "codesmith" && password === "ilovetesting") {
    console.log(`valid!`);
  }
  //Post
  // fetch({
  //     method: 'POST',
  //     url: "/items",
  //     body: JSON.stringify({message: 'jeho cannnot type' })
  //   }

  //     .then(response => response.json())
  //     .then((data2) => {
  //       console.log(data2)
  //     }
  //   )
  // )
};

const todoButton = e => {
  let newListItem = document.createElement("li");

  let inputValue = document.getElementById("input").value;

  let text = document.createTextNode(inputValue);

  newListItem.appendChild(text);

  // append new list item child to input
  document.getElementById("todo").appendChild(newListItem);

  fetch("/task", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task: inputValue }),
    // body: {task: text }
  })
    // .then(response => response.json())
    .then(data2 => {
      console.log(data2);
    });
};
const deleteButton = e => {
  fetch("/deleteAll", {
    method: "DELETE",
    // headers: { "Content-Type": "application/json" },
    // body: JSON.stringify({task: inputValue }),
    // body: {task: text }
  })
    // .then(response => response.json())
    .then(data2 => {
      const todo = document.getElementById("todo");
      todo.innerHTML = "";

      //var node = document.getElementById('parent');
      //node.innerHTML = "";
    });
};

// function getData() {
//   fetch("/task")
//     .then(response => response.json())
//     .then(data => {
//       // map over tasks
//       data.tasks.map(val => {
//         // GGL: create li
//         let newListItem = document.createElement("li");

//         // GGL: create text node with task value
//         let text = document.createTextNode(val.task);

//         // GGL: attach text to list item
//         newListItem.appendChild(text);

//         // GGL: attach new list item to todo
//         document.getElementById("todo").appendChild(newListItem);
//       });
//     });
// }
