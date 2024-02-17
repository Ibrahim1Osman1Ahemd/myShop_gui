

function profile() {
    document.getElementById("your-prodcuts-container").style.display = "block"
    const USER = JSON.parse(localStorage.getItem("user"));
    document.getElementById("your-prodcuts-container").innerHTML = `
        <div class="profile-img">
            <div id="image-cont" class="img" style="background-image: url(${USER.profileImg});">
                <input onchange="updateProfile(this.id)" id="profileImg/input"  type="file" name="" id="">
                
                <span class="pen">

                </span>
            </div>
        </div>
        <div class="userDescription">
            <div class="box">
                <span>اسم المستخدم :</span>
                <div id="username-box" class="div">
                    <h3>${USER.username}</h3>
                    <div class="icon">
                        <div id="username" onclick="updateIput(this.id)" class="background">
                            <span  class="pen"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box">
                <span>عنك</span>
                <div id="about-box">
                    <p>
                       ${USER.about}
                    </p>
                    <div class="icon">
                        <div id="about" onclick="updateIput(this.id)" class="background">
                            <span class="pen"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box">
                <span>رقم الهاتف :</span>
                <div id="phone-box">
                    <p>${USER.phoneNumber}</p>
                    <div class="icon">
                        <div id="phone"  onclick="updateIput(this.id)" class="background">
                            <span  class="pen"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    
    document.getElementById("profileImg/input").onchange = function (){
        console.log("Hi");
        updateProfile(this.id);
    } 
}


