const taskInput = document.getElementById("input-box");
    const taskList = document.getElementById("list-container");

    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === "") return;

      const li = document.createElement("li");
      const span = document.createElement("span");
      span.textContent = taskText;
      li.appendChild(span);

      const actions = document.createElement("div");
      actions.classList.add("actions");

      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.onclick = () => editTask(span);

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete-btn";
      deleteBtn.onclick = () => li.remove();

      actions.appendChild(editBtn);
      actions.appendChild(deleteBtn);
      li.appendChild(actions);

      taskList.appendChild(li);
      taskInput.value = "";
    }

    function editTask(span) {
      const newTask = prompt("Edit your task:", span.textContent);
      if (newTask !== null && newTask.trim() !== "") {
        span.textContent = newTask;
      }
    }