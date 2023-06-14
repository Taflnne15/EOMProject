//get name
let P_name = document.querySelector('#product-name') 
 //get message
let P_info = document.querySelector('#message')
//get price
let P_price = document.querySelector('#product-price') 
//get image
let P_image = document.querySelector('#product-image') 
// OUTPUT TARGET
let whereMyProductsDisplay = document.querySelector('.whereTheyDisplay')
let btn = document.querySelector('.btn')

// the list
let products = JSON.parse(localStorage.getItem('product')) ? JSON.parse(localStorage.getItem('product')) : [];

// pushing the object value
function add(){
    products.push(
        {
            P_name: P_name.value,
            P_info: P_info.value,
            P_price: P_price.value,
            P_image: P_image.value
        }
    )
    
    localStorage.setItem('product',JSON.stringify(products));
    
    window.location.reload();

}


// DISPLAY
function display(){
    products.forEach(Element => {
        whereMyProductsDisplay.innerHTML+=`
       <tr>
        <td>${Element.P_name}</td>
        <td>${Element.P_info}</td>
        <td>R${Element.P_price}</td>
        <td><img src="${Element.P_image}" alt="" width="100px" heigth="100px"></td>
        </tr>
        
        `
    });
}

display()