let data=[];

async function get_products() {
  const product = await fetch("https://fakestoreapi.com/products");
  data = await product.json();
  // console.log(data);
  // data.forEach(element => { dynamic_search(element) });
  dynamic_search(data);
}



function dynamic_search(data) {
  
  document.querySelector(".pro-container").innerHTML = "";
  
  data.forEach((products) => {
    let html = `
    <div class="pro">
    <img src="${products.image}" alt="">
    <div class="des">
    <span>${products.category}</span>
    <h5>${products.title}</h5>
    <div class="stars">
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    </div>
    <h4>${products.price}</h4>
    </div>
    <a href="#" class="fal fa-shopping-cart cart"></a>
    </div>`
    
    document.querySelector(".pro-container").innerHTML = document.querySelector(".pro-container").innerHTML + html;
  });
}



const search_bar = document.getElementById("type");
search_bar.addEventListener("input", () => {
  // let element =document.querySelector(".srch");
  // element.innerHTML=element.innerHTML + `<i class="fa-solid fa-spinner"></i>`;
  const baba = search_bar.value.toLowerCase();
  const filtered_data=data.filter(
    (product) => 
    product.title.toLowerCase().includes(baba) ||
    product.category.toLowerCase().includes(baba)
  );
  
  dynamic_search(filtered_data);
  });

get_products();