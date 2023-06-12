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
    }


]

// so cards can display
let output = document.querySelector('#product')

products.forEach((reveal) =>{
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

 