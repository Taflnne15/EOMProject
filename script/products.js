//products page 
let products = [
    { id: 1,
    products_image:'https://i.postimg.cc/6pSfcqRg/gibson-lespaulclassic.jpg',
    products_title:'Gobson Les Paul Classic, Heritage Cherry Sunburst',
    products_text: 'The Gibson Les Paul™ Classic combines the early 60s style Les Paul model with some functional and time-tested modifications. As expected, the Les Paul Classic is crafted with a mahogany back and maple top coupled with a SlimTaper™ mahogany neck and a bound, rosewood fingerboard.'
    },{  id: 2 ,
        products_image:'https://i.postimg.cc/bvdgQMJy/classiclelectriclespaul.webp',
        products_title: 'Gibson Les Paul Classic Custom Electric Guitar ',
        products_text: 'Part of Gibsons attempt to redesign old classics, the Gibson Les Paul Classic Custom is a recent twist on the old Les Paul Custom design. Taking elements from the original Custom, the Classic Custom features block inlays, multi-layer binding, and the iconic Les Paul Custom headstock.'
    },{
        id: 3,
        products_image:'https://i.postimg.cc/76zhCpCJ/Ag304-Gibson-l-10.webp',
        products_title: 'Gibson Acoustic L-00',
        products_text:'Gibson was a pioneer in the development of small body guitars in the beginning of the 1900s with its "L-Series Small Body" acoustics. These smaller Gibsons deliver a tonality that is best described in Gibsons 1934 catalog as a sound of "perfect balance." ',
    },{
        id: 4,
        products_image:'',
        products_title: 'Gibson Acoustic L-00',
        products_text:'',
    },

]

// so cards can display
let output = document.querySelector('#product')

products.forEach((reveal) =>{
    output.innerHTML+= `
    
  <div class="col">
    <class="card h-100">
      <img src="${reveal.products_image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${reveal.products_title}</h5>
        <p class="card-text">${reveal.products_text}</p>
        
      </div>
    `
})