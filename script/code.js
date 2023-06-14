//get id
let P_id = document.querySelector('#product-id') 
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
            P_id :P_id,
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
        <td><button class="edit-btn">Edit</button></td>
        <td><button class="del-btn" onclick="deleteProduct() ">Delete</button></td>
        </tr>
        `
    });
}
display()
 

//REMOVE PRODUCT
function deleteProduct() {
    let idDel = parseInt(prompt('Please confirm by inputing the id number of the product u wish to delete'));  //input id
  let target = products.find(function(locate){
     return locate.P_id == idDel;
  })
  let index = products.indexOf(target)
  console.log(index)
products.splice(index,1) //splicing the targeted index
 console.log(products) //show me my list
 localStorage.setItem('product',JSON.stringify(products) ) //send to storage
 location.reload(); //reloads the page
 }

// function deleteProduct(id){
//     products.filter((product) => {
//         return product.id !== id;
//     });
//     localStorage.setItem('product', JSON.stringify(product));
//     loadData(product);
// }