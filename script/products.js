let hardCodedProducts = JSON.parse(localStorage.getItem('products'));

// so cards can display
let output = document.querySelector('#product')

hardCodedProducts.forEach((reveal) => {
    output.innerHTML += `
    
  <div class="col">
    <class="card h-100" >
      <img src="${reveal.products_image}" class="card-img-top" alt="..." style="object-fit:contain;
      aspect-ratio: 3/2;";>
      <div class="card-body">
        <h5 class="card-title">${reveal.products_title}</h5>
        <p class="card-text">${reveal.products_text}</p>
        <button type="button" class="btn btn-primary btn-sm">${reveal.products_btn}</button>
      </div>
    `
})

//output target number 2
let displayFromStrorage = document.querySelector('#localProducts')
// Product list 
function product_show() {
    products.forEach(Element => {
        displayFromStrorage.innerHTML += `
        <div class="col">
        <class="card h-100">
          <img src="${Element.P_image}" class="card-img-top" alt="..." style="object-fit:contain;
          aspect-ratio: 3/2;";>
          <div class="card-body">
            <h5 class="card-title">${Element.P_name}</h5>
            <p class="card-text">${Element.P_info}</p>
            <p class="card-text">${Element.P_price}</p>
            <button type="button" class="btn btn-primary btn-sm">Small button</button>
          </div>
        `
    })
}
product_show()

let sort = document.querySelector('.products')
