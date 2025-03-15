document.addEventListener("DOMContentLoaded", () => {
    const loginContainer = document.getElementById("loginContainer");
    const todoContainer = document.getElementById("todoContainer");
    const loginForm = document.getElementById("loginForm");

    const profileName = document.getElementById("profileName");
    const profileEmail = document.getElementById("profileEmail");
    const profileImage = document.querySelector(".profile-section img");
    const logoutBtn = document.getElementById("logoutBtn");

    const taskCount = document.getElementById("taskCount");
    const completedCount = document.getElementById("completedCount");

    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    const todoDate = document.getElementById("todo-date");
    const profilePicInput = document.getElementById("profilePicInput");

    // ✅ Check if user is logged in
    if (localStorage.getItem("user")) {
        showTodoPage();
        loadProfile();
        loadTasks(); // ✅ Load stored tasks from localStorage
    } else {
        showLoginPage();
    }

    // ✅ Show login page
    function showLoginPage() {
        loginContainer.style.display = "flex";
        todoContainer.style.display = "none";
    }

    // ✅ Show to-do page
    function showTodoPage() {
        loginContainer.style.display = "none";
        todoContainer.style.display = "block";
    }

    // ✅ Handle login
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const profilePic = profilePicInput.files[0];

        const reader = new FileReader();
        reader.onload = function (event) {
            const user = {
                name: name,
                email: email,
                profileImage: event.target.result, // Convert image to base64
            };
            localStorage.setItem("user", JSON.stringify(user));
            showTodoPage();
            loadProfile();
        };

        if (profilePic) {
            reader.readAsDataURL(profilePic);
        } else {
            const user = { name, email, profileImage: "" };
            localStorage.setItem("user", JSON.stringify(user));
            showTodoPage();
            loadProfile();
        }
    });

    // ✅ Load profile from localStorage
    function loadProfile() {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            profileName.innerText = user.name;
            profileEmail.innerText = user.email;
            profileImage.src = user.profileImage || "./../../asset/blank-profile-picture-973460_1280.png";
        }
    }

    // ✅ Load tasks from localStorage
    function loadTasks() {
        taskList.innerHTML = ""; // Clear list before loading
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach(task => addTaskToDOM(task.text, task.date, task.completed, false));
        updateTaskCounts();
    }

    // ✅ Save tasks to localStorage
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll(".task-item").forEach(li => {
            tasks.push({
                text: li.querySelector(".task-content").innerText,
                date: li.querySelector(".task-date").innerText,
                completed: li.classList.contains("completed")
            });
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
        updateTaskCounts();
    }

    // ✅ Add task to DOM and localStorage
    function addTaskToDOM(taskText, taskDate, completed = false, save = true) {
        if (taskText === "") return;

        const li = document.createElement("li");
        li.classList.add("task-item");
        if (completed) li.classList.add("completed");

        const icon = document.createElement("img");
        icon.src = completed ? "./../../asset/circle-check-solid-yellow.svg" : "./../../asset/circle-regular.svg";
        icon.classList.add("task-icon");



        const taskContent = document.createElement("span");
        taskContent.classList.add("task-content");
        taskContent.innerText = taskText;

        const dateContent = document.createElement("span");
        dateContent.classList.add("task-date");
        dateContent.innerText = taskDate;

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.classList.add("delete");

        li.appendChild(icon);
        li.appendChild(taskContent);
        li.appendChild(dateContent);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        // ✅ Toggle completed state
        li.addEventListener("click", () => {
            li.classList.toggle("completed");
            icon.src = li.classList.contains("completed")
                ? "./../../asset/circle-check-solid-yellow.svg"
                : "./../../asset/circle-regular.svg";
            saveTasks();
        });



        // ✅ Delete task
        deleteBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            li.remove();
            saveTasks();
        });

        if (save) saveTasks();
    }

    // ✅ Add task button event
    addTaskBtn.addEventListener("click", () => {
        addTaskToDOM(taskInput.value.trim(), todoDate.value);
        taskInput.value = "";
        todoDate.value = "";
    });

    // ✅ Update task counts
    function updateTaskCounts() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const totalTasks = tasks.length;
        const completedTasks = tasks.filter(task => task.completed).length;
        taskCount.innerText = totalTasks;
        completedCount.innerText = completedTasks;
    }

    // ✅ Logout functionality
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("user");
        localStorage.removeItem("tasks"); // ✅ Clear tasks on logout
        showLoginPage();
    });
});
