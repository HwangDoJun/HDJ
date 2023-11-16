const todoBox = document.getElementById("todobox");
const todo = document.getElementById("todo");
const addButton = document.getElementById("add-button");
const list = document.getElementById("list");

addButton.addEventListener("click", () => {

    if(todo.value !== ""){
        //체크박스와 제거 버튼 생성 작업
        const div = document.createElement("div");
        const ck = document.createElement("input");
        const text = document.createElement("span");
        const del = document.createElement("button");

        list.appendChild(div).append(ck, text, del)
        ck.type = "checkbox";
        text.textContent = todo.value;
        todo.value = "";
        del.textContent = "Delete";

        //체크박스 기능 적용
        ck.addEventListener("change", (event) => {
            div.style.textDecoration = event.target.checked === true ? "line-through" : "";
        })

        //Delete 버튼 기능 적용
        del.addEventListener("click", () => {
            div.parentNode.removeChild(div);
        })
    }
    else{
        alert("빈칸 채워라 애송이");
    }
});