

function register () {
    
    const username = document.getElementById("sign-up-username").value;
    const email = document.getElementById("sigen-up-email");
    const password = document.getElementById("sigen-up-password").value;
    const rePassword = document.getElementById("re-password").value;
    const userVal = /\w+/g
    if(!username || !password || !rePassword) return showAlert('missing Data!', "danger-alert")
    if(/(\W|\s)/g.test(username) || !userVal.test(username) || username.length < 8 || username.length > 32){
        return  showAlert("this in not valid username" , "danger-alert")
       
    }
    console.log(username.length)
    console.log(username, username.match(/\W/g) , /\W|\s/g.test(username))
    const profileImg = document.getElementById("user-image").files[0] || null;
    console.log(profileImg)
    const formData = new FormData();
    formData.append('username',username);
    formData.append('password',password);
    formData.append('rePassword',rePassword);
    formData.append('profileImg',profileImg);    
    axios.post(`${BaseUrl}/register`, formData)
    .then((res) => {
        console.log(res.data)
        const response = res.data.data
        const user = {
            username:response.username,
            profileImg: response.profileImg,
            userId: response.userId,
            about: response.about,
            phoneNumber: response.phoneNumber,
        }
        const token = response.token
        localStorage.setItem('token' , JSON.stringify(token));
        localStorage.setItem('user' , JSON.stringify(user));
        updateUI()
        showAlert(res.data.message)
        closePopUp()
    })
    .catch((error) => {
        const message = error.response.data.message;
        showAlert(message, "danger-alert");
      })
}



function login () {
    
    const username = document.getElementById("login-username").value;
    const email = document.getElementById("login-email");
    const password = document.getElementById("login-password").value;
    const userVal = /\w+/g
    if(!username || !password ) return console.log('missing Data!')
    if(/(\W|\s)/g.test(username) || !userVal.test(username) || username.length < 8 & username.length > 32){
        return  showAlert("this in not valid username" , "danger-alert")
    }

    const body = {
        password,
        username
    };    
    axios.post(`${BaseUrl}/login`, body)
    .then((res) => {
        console.log(res.data)
        const response = res.data.data
        const user = {
            username:response.username,
            profileImg: response.profileImg,
            userId: response.userId,
            about: response.about,
            phoneNumber: response.phoneNumber,
        }
        const token = response.token
        localStorage.setItem('token' , JSON.stringify(token));
        localStorage.setItem('user' , JSON.stringify(user));
        updateUI()
        showAlert(res.data.message)
        closePopUp()
        closePopUp('close from login')
    })
    .catch((error) => {
        const message = error.response.data.message;
        showAlert(message, "danger-alert");
    })
}

function logOut(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    updateUI();
    showAlert("تم تسجيل الخروج");
}
