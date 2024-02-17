

function alertAndFormsComponents () {
    document.getElementById('forms-alert-components-container').innerHTML = `
    <!-- sigen up form -->
    <form id="pou-up" action="submit" class="pob-up-form hidde">
        <div class="container">
            <h4>سجل كمستخدم جديد</h4>

            <label for="username">اسم المستخدم:</label>
            <input id="sign-up-username" name="username" type="username" placeholder="ادخل اسم المستخدم..">

            <label for="email">الاميل:</label>           
            <input id="sigen-up-email" type="email" placeholder="ادخل الايميل..">

            <label for="password">كلمة السر:</label>   
            <input id="sigen-up-password" name="password" type="password" placeholder="ادخل كلمة السر..">
            <label for="re-password"> اعد كلمة السر:</label> 
    
            <input id="re-password" name="re-password" type="password" placeholder="اعد كتابة كلمة السر..">
    
            <label for="image">ادخل صورة شخصية (اختياري) :</label>
            <input id="user-image" type="file">
    
           <p><a href="#" id="login" onclick="showPopUp(this.id)">مسجل مسبقاً</a></p>
            <div>
                <button id="submit-signUp" onclick="register ()" type="button" >submit</button>
                <button id="close" type="button" onclick="closePopUp()">close</button>
            </div>
        </div>
        
       
    </form>
    <!-- sigen up form -->

    <!-- login form -->
    <form id="pou-up-login"  action="submit" class="pob-up-form hidde">
        <div class="container">
            <h4>سجل دخولك</h4>
 
            <label for="username">اسم المستخدم:</label>
            <input id="login-username" type="username" placeholder="ادخل اسم المستخدم..">

            <label for="email">الاميل:</label>
            <input name="email" id="login-email" type="email" placeholder="ادخل الايميل..">

            <label for="password">كلمة السر:</label>
            <input id="login-password" type="password" placeholder="ادخل كلمة السر..">

            <p><a href="#pou-up" onclick="showPopUp()">ليس لديك حساب</a></p>
            <div >
                <button id="submit-login" onclick="login()" type="button">log-in</button>
                <button id="close-login" type="button" onclick="closePopUp('close from login')">close</button>
            </div>
        </div>

       
    </form>
    <!-- login form -->

    <!-- alerts -->
    <div id="alert" class="alerts">

    </div>
    <!-- alerts -->

    <!-- profile pop up -->
    <div>
        <div id="porflie-nav" class="hidde">
            <div class="profile-description"> 
                <div id="profile" class="profile-image">
                    <img  src="../images/1.jpg" alt="">
                </div>
                <div class="profile-username">
                    <b>ابراهيم عثمان</b>
                </div>
            </div>
            <hr >
            <div class="profile-nav">
                <ul>
                    <li><a href="profilePage.html">الملف الشخصي</a></li>
                    <li><a href="#">اضف منتج</a></li>
                </ul>
            </div>
        </div>
    </div>

    <!-- profile pop up -->
    `
}
alertAndFormsComponents ()