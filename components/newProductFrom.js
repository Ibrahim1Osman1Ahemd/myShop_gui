
// this is prorduct form commponent
function newProductForm() { 
    
    document.getElementById("your-prodcuts-container").style.display = "block"
    document.getElementById("profile-page-title").innerHTML =
    `
        <b>اضف منتج جديد</b>
    `
    document.getElementById('your-prodcuts-container').innerHTML =
    `
        <form>
            <label for="title">اسم المنتج :</label>
            <input id="title" type="text" name="title" placeholder="اضف اسم المنتج">
            <label for="price">سعر المنتج :</label>
            <input id="price" type="number"  name="price" placeholder="اضف سعر المنتج">
            <label for="category">صنف المنتج :</label>
            <select id='category-selector' type="text" name="category"></select>
            <label for="description">وصف المنتج :</label>
            <textarea name="description" id="description"   cols="30" rows="10"  placeholder="اضف وصف المنتج"></textarea>            
            <label for="image">صورة المنتج :</label>
            <input id="image" type="file" name="image" placeholder="اضف صورة للمنتج">
            <label for="count-in-stock">العدد في المخزن :</label>
            <input id="count-in-stock" type="number" name="count-in-stock" placeholder="اضف اجمالي العدد">
            <label for="product-rich-description">وصف غني للمنج (اختياري) :</label>
            <textarea name="product-rich-description" id="richDescription"   cols="30" rows="10"   placeholder="اضف وصف غني للمنتج"></textarea>            
            <label>صنف اخر (اختياري)</label>
            <input id='optionalCategory' name='categoryinput' placeholder="اضف صنفاً">
            <button id="submit" type="submit">اضف المنتج</button>
        </form>      
    `
    submitCategory()
    addNewProduct()
}


// fill the category selector
async function submitCategory () {
    const categories = await getCategries();
    categories.map((cat) => {
        document.getElementById('category-selector').innerHTML += 
        `
            <option value="${cat._id}">${cat.name}</option>
        `
    })
}