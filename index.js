 Items = [{
    itemName: "Cappuccino",
    price: 400.00
},
{
    itemName: "Affagato",
    price: 450.00
},
{
    itemName: "Fries",
    price: 300.00
},
{
    itemName: "Roll",
    price: 350.00
}

];

// function Items(itemName,price){
//     this.itemName = itemName;
//     this.price = price;
// }

for(var i = 0;i<document.querySelectorAll(".custom").length;i++){
    var sum = Number(document.querySelector(".value").innerHTML);
    document.querySelectorAll(".custom")[i].addEventListener("click",function(event) {
    
        switch(event.target.id)
        {
            case "capuccino":
                sum = sum + 400;
                break;
            case "affagato":
                sum = sum + 450;
                break;
            case "fries":
                sum = sum + 300;
                break;
            case "roll":
                sum = sum + 350;
                break;
            case "clear":
                sum = 0;
                break;

        }
    
    document.querySelector(".value").innerHTML = String(sum);
   
    });
}