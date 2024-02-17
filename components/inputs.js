let openUpdateInput ;

function input(id) {
    document.getElementById(id+"-box").style.flexDirection = "column"
    document.getElementById(id+"-box").innerHTML = `
                                
        ${id === 'about' ?
            `<textarea id="about/input" onclick="isInput()" cols=\"30\" rows=\"100\">${JSON.parse(localStorage.getItem("user")).about}</textarea>` : 
            `<input onclick="isInput()" class="${id === "username" ? 'username-input' : ''}" id="${id === "phone" ? "phoneNumber" : id}/input"
            value="${id==='username'? JSON.parse(localStorage.getItem("user")).username: id === 'phone'? JSON.parse(localStorage.getItem("user")).phoneNumber:""}"/>`
        }

        <div style="width: auto; display: block;">
            <button onclick="isInput();updateProfile('${id === "phone" ? "phoneNumber" : id}/input')">تحديث</button>
            <button onclick="cancle('${id}')">إلغاء</button>
        </div>
    `
    setTimeout(() => {
        openUpdateInput = id;
    }, 200);

}


function isInput () {
    let waitForProg = openUpdateInput;
    openUpdateInput = null;
    setTimeout(() => {
        openUpdateInput = waitForProg;
    }, 0);
}