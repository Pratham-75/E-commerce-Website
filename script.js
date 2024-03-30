async function fetchNews() {
    const res = await fetch('https://fakestoreapi.com/products/');
    const datas = await res.json();
    // collectData(data.articles);
    // console.log(datas);
    const productDetails = document.getElementById("productDetails");
    datas.forEach(data => {
        const newProduct = document.createElement("div");
        newProduct.id = "product";
        const title = document.createElement("h3");
        const image = document.createElement("img");
        image.id = "image";
        const category = document.createElement("p");
        const description = document.createElement("p");
        description.id = "description";
        description.classList.add("hidden");
        const price = document.createElement("h2");
        const addButton = document.createElement("button");
        addButton.id = "addButton";
        const readMore = document.createElement("button");
        readMore.id = "readMore";
        title.innerHTML = data.title;    
        image.src = data.image;
        category.innerHTML = data.category;
        description.innerHTML =`<strong>Description:</strong> ${data.description}`;
        price.innerHTML = `Rs. ${(data.price*80).toFixed(0)} `;
        addButton.innerHTML = "Add to cart";
        readMore.innerHTML = "Read more...";
        
        newProduct.appendChild(category);
        if (data.title && data.title.length >= 50) {
            let updatedTitle = data.title.substring(0, 45);
            title.innerHTML = `${updatedTitle}...`;
            newProduct.appendChild(title);
        } else {
            title.innerHTML = `${data.title} <br>`;
            newProduct.appendChild(title);
        }
        newProduct.appendChild(image);
        newProduct.appendChild(price);
        newProduct.appendChild(addButton);
        newProduct.appendChild(readMore);
        newProduct.appendChild(description);
        productDetails.appendChild(newProduct);
    });
    
}

function showDescription() {
    const readMoreButtons = document.querySelectorAll("#readMore");
    
    readMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            console.log("hellowolrd");
            const description = button.parentNode.querySelector("#description");
            
            if (description) {
                if (description.classList.contains("hidden")) {
                    description.classList.remove("hidden");
                } else {
                    description.classList.add("hidden");
                }
            }
        });
    });
}

fetchNews().then(showDescription);




// document.addEventListener("mousedown", function() {
//     // Find all "Read more" buttons
    
// });
