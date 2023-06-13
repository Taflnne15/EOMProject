
// the list
let products = JSON.parse(localStorage.getItem('product')) ? JSON.parse(localStorage.getItem('product')) : [];
//products page 
let hardCodedProducts = [
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
        products_title: '1932 Gibson L-10 Acoustic',
        products_text:'The relatively fancy L-10 seen here was made in early 1932 and is currently used by San Francisco guitarist Eddie Scher. Its fretboard is decorated with ornate rectangular picture-frame inlays—a motif borrowed from Gibsons highly ornamented banjos—and its headstock sports a double-handled vase inlay.',
    },{
        id: 4,
        products_image:'https://i.postimg.cc/BbVzwzhC/flying-v.jpg',
        products_title: 'Gibson 67 flying V Maestro GH',
        products_text:'Gibson Customs 1967 Mahogany Flying V Reissue is a classic V, through and through. Youll love the rich midrange character and sustain you get from its mahogany body. The set mahogany neck fills your hand like a 60s Gibson, thanks to its "Authentic 67 Medium C" profile.',
    },{id: 5,
        products_image:'https://i.postimg.cc/pXFd2MDz/lespual-studio.webp',
        products_title: 'Gibson Les Paul Studio',
        products_text:'The original Les Paul Studio was redesigned in 1990 to include an ebony fretboard with trapezoid inlays in the same style as higher end Les Pauls, and 490R/498T Humbuckers pickups.',
    },{
        id: 6,
        products_image:'https://i.postimg.cc/fTqmtNFL/sglespaul.jpg',
        products_title: 'Gibson SG standard',
        products_text:'The Gibson SG Standard rocks the classic looks and features associated with the late 60s style SG models sought after by many. A rounded profile mahogany neck, bound rosewood fingerboard, long tenon 19th fret neck joint, and a solid mahogany body provide the backbone for singing sustain .Truly one of Maniac Guitars favourites',
    },{
        id: 7,
        products_image:'https://i.postimg.cc/cJsQvGGk/electric-guitars-cort-x-2-vn-fr.jpg',
        products_title: 'Cort X 2 ',
        products_text:'The sleek and thoroughly modern X Series guitars are built for speed, power and aggression. The extreme contours on the body and the neck joint provide comfort as well as a distinctively high-tech look. The super fast neck and large jumbo frets facilitate speed and precision in your playing.This guitar is built for speed.',
     
    },{
        id: 8,
        products_image:'https://i.postimg.cc/vTFPS8K8/Cort-G250.webp',
        products_title: 'Cort G250 Black',
        products_text:'The G Series represents a logical evolution of the term "vintage". It is modern yet retains the familiar characteristics of the classic double-cutaway design in an aesthetically tasteful manner. This double-cutaway collection includes a wide variety of options and features to best meet a players specific needs and requirements.',
    },{
        id: 9,
        products_image:'https://i.postimg.cc/vTTNV2Cf/cort-cort-g250-spectrum-metallic-purple-electric-g.webp',
        products_title: 'Cort G250 Spectrum pink',
        products_text: 'G250 Spectrum is designed for guitarists that seek a simple, slick-looking guitar with retro styling and colors that pop, while applying essential advanced components to make the guitar both greatly playable and enjoyable. Colorful sparkling metallic finishes with matching headstock bring back nostalgia of the modern-retro era.',
    },{
        id: 10,
        products_image:'https://i.postimg.cc/WpH5FrRr/bass-starter-pack.webp',
        products_title: 'Bass Starter Pack',
        products_text: 'This is our bass starter pack for beginners . The Stagg Standard Bass comes with a 15Watt Stagg Bass amp for a deep bass sound or perhaps a light bass sound, reverb , distortion and more. You are able to plug in your headsets as you play along.Comes with a guitar casing, jack-to-jack and strap!',
    },{
        id: 11,
        products_image:'https://i.postimg.cc/rpyr8npk/yamaha.jpg',
        products_title: 'Yamaha Bass Guitar Red Metallic',
        products_text: 'TRBX500 has a simple brief tone. Premium mahogany construction and an ultra-musical active/passive pre-amp design deliver the flexibility and sheer tonal quality to allow you to sculpt the perfect sound for your music. This Bass Red metallic color gives a rather rock-like impression,which is what its built for.',
    },{
        id: 12,
        products_image:'https://i.postimg.cc/v8vdJbKD/ibanez-jumpstsart.webp',
        products_title: 'Ibanez Jump Start',
        products_text:'One of our popular Jumpstart packs for Bass. This is more of an intermediate phase Jumpstart pack. Provided with an Ibanez Amp, a tuner and a jack-to-jack, headsets, strap and a guitar stand, what a better way to start off on your intermediate phase. Enjoy a more slapping technique on the bass!  ',
    }


]

// so cards can display
let output = document.querySelector('#product')

hardCodedProducts.forEach((reveal) =>{
    output.innerHTML+= `
    
  <div class="col">
    <class="card h-100">
      <img src="${reveal.products_image}" class="card-img-top" alt="..." style="object-fit:contain;
      aspect-ratio: 3/2;";>
      <div class="card-body">
        <h5 class="card-title">${reveal.products_title}</h5>
        <p class="card-text">${reveal.products_text}</p>
        <button type="button" class="btn btn-primary btn-sm">Small button</button>
      </div>
    `
})

 //output target number 2
let displayFromStrorage = document.querySelector('#localProducts')
// Product list 
function product_show(){
    products.forEach(Element => {
        displayFromStrorage.innerHTML+=`
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