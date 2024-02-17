

function footerComponents() { 
    document.getElementById("footer-componentes-container").innerHTML =
    `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid"> 
                <div class="footer-girds-items">
                    <b><a href="#sign-in" class="sign-in">سجل الان</a></b>
                    <b><a href="#">مسجل مسبقاً </a></b>
                </div>
                <div style="padding: 0 0;" class="footer-girds-items">
                    <b><a href="#">الصفحة الرئيسية</a></b>
                    <b><a href="#">المنتجات</a></b>
                    <b><a href="#">عنا</a></b>
                </div>
                
                <div class="footer-girds-items">
                    <b><a href="#">منتجاتي</a></b>
                </div>
            </div>
            <!-- <hr style="border: #f5f4f4 solid 1px;"> -->
            <p style="padding-top: 30px ;">©<span>كل حقوق النشر محفوظة لدى.</span>ابراهيم عثمان</p>
        </div>
    </footer>    
    `
}
footerComponents() 