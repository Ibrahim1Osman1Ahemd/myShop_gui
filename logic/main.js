
const BaseUrl = 'https://myshop-api-ibrahim1osman1ahemd.onrender.com/api/v1';
const config = {
    headers:{
        'Authorization': "Bearer " + localStorage.getItem("token")
    } 
}

const prodcutsContainer = document.getElementById("prodcts-container");

const theManeuCounter = document.getElementById("maneu-conter");

let menuArr;
if(localStorage.menuArr != null ){
    menuArr = JSON.parse(localStorage.menuArr);
}else{
    menuArr = [];
}

onload = () => {
 
    document.getElementById("maneu-conter").innerHTML = menuArr.length;

    if(!localStorage.token){
        showAlert("قم بتسجيل الدخول لكي تتمتع بجميع مميزات الموقع")
    }

}

// this function is for update the user interface
function updateUI(){
    //UPDATE IT IN THE HOME PAGE AND PRODCUTS PAGE
    menuArr.map((id) => {
        if(document.getElementById(id)){
            document.getElementById(id).innerHTML = "ازل من السلة"
        }
    })
   
   // THIS IS FOR MENU PAGE

    if(localStorage.token != null){
        token = localStorage.token;
        const user = JSON.parse(localStorage.user)

        if(document.getElementById("logo")){
            document.getElementById("logo").innerHTML = `
            <div class="logo d-flex">
                <div onclick="showProfile(this.id)" id="x" class="profile-image">
                    <img src="${user.profileImg}" alt="">
               </div>
                <a href="#">متجري</a>
            </div>
        `
            const profilepopup = document.getElementById('porflie-nav');
            profilepopup.innerHTML = `
                <div class="profile-description"> 
                    <div id="profile" class="profile-image">
                        <img  src="${user.profileImg}" alt="">
                    </div>
                    <div class="profile-username">
                        <b>${user.username}</b>
                    </div>
                </div>
                <hr >
                <div class="profile-nav">
                    <ul>
                        <li><a href="profilePage.html">الملف الشخصي</a></li>
                        <li><a href="#">اضف منتج</a></li>
                    </ul>
                </div>
            `
        }
      
        if(document.querySelector(".authBtn") != null){
            document.querySelector(".authBtn").innerHTML = `<a href="#" onclick="logOut()" class="log-out">تسجيل الخروج </a>` 
        }

    }else{
        document.getElementById("logo").innerHTML = `
            <a href="#">متجري</a>
        `
        if(document.querySelector(".authBtn") !=null){
            document.querySelector(".authBtn").innerHTML = `<a href="#" onclick="showPopUp()" id="sign-in">تسجيل الدخول</a>`
        }
    }
}
updateUI()
// validation function () ;
function validation (arr) {
   let bool = true;
    arr.map((val) => {
        if((/\w+/g).test(val) && !/\W+/g.test(val)  && !/\s+/g.test(val) && val.length > 0) {

        }else{
            bool = false;
        }
    })
    return bool
}
function getProudctDetial(id) {
    if(!id) return
    window.location = `productDetails.html?productId=${id}`
    // print("hello world!")
}
//DISPLAY THE PRODCUTS IN THE HOME PAGE
let page = 0;
let pagesCount;
function displayProducts(containerID = "all-prodcutd", filter = '' , onclickOptions = 'addProdcutToTheManeu(this.id) , addTheprodcutToTheMenuArr(this.id)' , deleteBtnClass='add-to-the-menu-btn-before-clicked',configOption={}){
    let btnContent = 'اضف الى السلة';
    if(deleteBtnClass === 'delete-prd-btn') btnContent = 'احذف المنتج';
    const url = location.pathname.split('/views/')
    let limit = 13;
    let container = document.getElementById(containerID)

    if(url['1'] == '' || url[1].includes('index.html')) {
        limit = 5;
        page = 0;
        container = prodcutsContainer;
    };
    axios.get(`${BaseUrl}/products?limit=${limit}&&page=${page}${filter}`,configOption)
    .then((res) => {
        const response = res.data.data
        pagesCount = response.pages
        const products = response.products;
        let content = ''
        if(products.length === 0) {
            content = '<p>لايوجد المنتجات</p>'    
        }
        for(let product of products) {
            content +=`
            <div  class="products-card" >

                    <img src="${product.image}" alt="صورة${product.title}" onclick="getProudctDetial('${window.location.pathname == "/views/prodcuts.html" || url['1'] == '' || url[1].includes('index.html')?product._id : ""}')">

                    <div class="container" > 

                        <div class="product-text" onclick="getProudctDetial('${window.location.pathname == "/views/prodcuts.html" || url['1'] == '' || url[1].includes('index.html')?product._id : ""}')">
                        <h3> 
                            ${product.title} 
                        </h3>
                        
                        <p>${product.description}</p>
                    </div>

                    <div class="product-price">
                        <b>
                            ${product.price}
                        </b>
                        <button id="${product._id}" onclick="${onclickOptions}" class="${deleteBtnClass}"     >${btnContent}</button>
                    </div>
                    </div>
                </div>
            </div>  
        `
        }
        container.innerHTML = content;
        updateUI()
    })
}

displayProducts()
let currntPage = 0;
// pagination function //
function pagination (pageNumber) {
    currntPage ++
    console.log("this is the contet")
    // document.getElementById('pagenation').innerHTML = content;
    page = currntPage ;
    console.log (page)
    displayProducts()
    console.log(pageNumber)
}

// update the profile

function updateProfile(id) {
    const formData = new FormData();
    if(id === 'profileImg/input')
    {
        formData.append(id.split("/")[0] , document.getElementById(id).files[0]);
        console.log(document.getElementById(id).files[0])
    }else 
    {
        formData.append(id.split("/")[0] , document.getElementById(id).value);
    }
    // console.log(id)
    axios.put(`${BaseUrl}/users/profile/update` ,formData, config)
    .then((res) => {
        const response = res.data.data.user;
        const user = {
            username:response.username,
            profileImg: response.profileImg,
            userId: response._id,
            about: response.about,
            phoneNumber: response.phoneNumber,
        };
        localStorage.setItem("user" , JSON.stringify(user));
        if(id !== "profileImg/input") { 
            cancle(id.split("/")[0]);
        }
        showAlert("updated " + id.split("/")[0] + " succesfully!");
        if(id === 'profileImg/input')
        {
            document.getElementById("image-cont").style.backgroundImage = `url(${JSON.parse(localStorage.getItem("user")).profileImg})`;
        }
    })
    .catch((err) => {
        console.log(err)
        // showAlert(err.response.data.message, 'danger-alert')
    })
}

function deleteProduct(productId) {
    axios.delete(`${BaseUrl}/products/${productId}`,config)
    .then((res) => {
        showAlert(res.data.message);
        displayProducts(`your-prodcuts-container`, `&&userId=${userId}` , 'deleteProduct(this.id)' ,'delete-prd-btn',config);
    })
    .catch((err) => {
        showAlert(err.response.data.message, "danger-alert")
    })
}

// Get Categories Function //
function getCategries () {
    return new Promise ((resolve, reject) => {
        axios.get("http://localhost:3000/api/v1/categories")
        .then((res) => {
            let categories = res.data.data.categories;
            return [categories, resolve(categories)];
            
        })  
    })
}

function getPrices () {
    return new Promise ((resolve, reject) => {
        axios.get(`${BaseUrl}/products/get/prices`)
        .then((res) => {
            let prices = res.data.data.prices;
            return [prices, resolve(prices)];   
        })  
    })
}

//DISPLAY PRODCUTS BY CATEGORY

let cats = [];
let prices = [];
function search(cat,price) {
    if(cat){
        if(cats.includes(cat)) {
            cats = cats.filter((categroy) => categroy !== cat)
        }else {
            cats.push(cat)
        }
    }
    if(price){
        if(prices.includes(price)) {
            prices = prices.filter((price) => price !== price)
        }else {
            prices.push(price)
        }
    }
    console.log(prices, "cats " + cats)
    displayProducts("all-prodcutd", filter = `&&categories=${cats}&&prices=${prices}`)               
}
// GET ONE PRODUCT
function getProduct(productId) {
    // get the product
    axios.get(`${BaseUrl}/products/${productId}`)
    // after that
    .then((res) => {
        // this is product data
        const product = res.data.data.product;
        // this is the comments
        const comments = product.comments;
        // write the product in the docutment
        document.getElementById("product-details").innerHTML = `
            <div class="head">
                <img src="${product.createdUser.profileImg}" alt="">
                <span>تم الانشاء بواسطة :</span>
                <span>${product.createdUser.username}</span>
            </div>
            <div class="body">
                <div class="head">
                    <h4>
                        ${product.title}
                    </h4>
                    <p class="short-description">
                        ${product.description}
                    </p>
                </div>
                <div class="body">
                    <h4>تفاصيل اكثر :</h4>
                    <p class="long-description">
                        ${product.richDescription}
                    </p>
                </div>
                <img src="${product.image}" alt="">
            </div>
            <div class="foot">
                <div>
                    <span>السعر: </span>
                    <span class="price"> ${product.price}</span>
                </div>
                <button>قم بالشراء</button>
            </div>
        `
        // the product category
        document.getElementById("categories-container").innerHTML = `
            <span>الصنف :</span>
            <span>${product.category.name}</span>
        `
        // this is content for the comment
        let content = ""
        // lop on the comment and wirte the comment on the screen "document"
        comments.map((comment) => {
            content += `
                <div class="comment">
                    <div class="head">
                        <img src="${comment.createdUser.profileImg}" alt="">
                        <span>${comment.createdUser.username}</span>
                    </div>
                    <div class="body">
                        <p>${comment.content}</p>
                    </div>
                    <div class="foot">
                        <span dir="rtl" lang="en">${comment.createdDate}</span>
                        <div class="react">
                            <span>رد</span>
                            <span>اعجاب</span>
                            ${comment.createdUser._id === JSON.parse(localStorage.getItem("user")).userId ? 
                            `<span onclick="deleteCommnet('${comment._id}')">حذف</span>` : ""}
                        </div>
                    </div>
                </div>
            `
        });

        // if there no comment we are write there no comments on the screen "document"
        if(!content) content = "<span>لايوجد تعليقات</span>"
        //
        document.getElementById("comments-container").innerHTML = content;
    })
    .catch((err) => {
        console.log(err)
        // showAlert(err.response.data.message, "danger-alert")
    })
}
// ADD PRODCUT TO THE MANEU

//fristly add the count of the prodcuts that is in the maneu

function addProdcutToTheManeu(id){
    updateUI(id)
    if(menuArr.length == 20){
        showAlert(" السلة ممتلئة بالفعل!" ,  "danger-alert");
    }else{
        if(menuArr.includes(id) & menuArr.length  > 0){
            document.getElementById("maneu-conter").innerHTML = menuArr.length -1;
        }else{
            showAlert("تمت اضافة المنتج الى السلة")  ;
            document.getElementById("maneu-conter").innerHTML = menuArr.length +1;
        }
    }
}

function addTheprodcutToTheMenuArr(id){
    console.log(id)
    if( menuArr.length <= 20){        
        if(menuArr.includes(id)){
            if(menuArr.length > 0){
                menuArr.splice(menuArr.indexOf(id), 1);
                localStorage.menuArr = JSON.stringify(menuArr)
                if(document.getElementById("menu-container")) {

                    document.getElementById(id).addEventListener("click" , displayTheProdcutsInTheMenuPage())     
                }   
            } 
            showAlert("نمت ازالة المنتج من السلة")
            if(document.getElementById("menu-container") & menuArr.length > 0) {
                
                document.getElementById(id).addEventListener("click" , displayTheProdcutsInTheMenuPage())     
            }else {
            }
            document.getElementById(id).innerHTML = "اضف الى السلة"



        }else{
            menuArr.push(id);
            localStorage.setItem("menuArr", JSON.stringify(menuArr))
            updateUI(id)
            
        }
    }
}




//ALERT//
function showAlert(message , typeOfAlert="success-alert" ){
   const alert = document.getElementById("alert");
   let newAlert = Date.now();
    alert.innerHTML +=  `
    <div id="${newAlert}" class="${typeOfAlert}">
        <div class="d-flex justufy-content-between">
        ${message}
        <p class="pointer" onclick="hiddeAlert(${newAlert})">X</p>
        </div>
        <div class="alert-underline"></div>
    </div>
    
    `
    ;

    setTimeout(() => {
        document.getElementById(newAlert).classList.add("remove-alert")
        setTimeout(() => {
            document.getElementById(newAlert).classList.add("hidde")
        }, 300);
    }, 5000);

}

function hiddeAlert(alertId) {
    document.getElementById(alertId).classList.add("hidde")
}




