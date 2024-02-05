// nav
function openNav() {
    document.getElementById("navbar").classList.toggle("!left-[0%]");
    document.body.classList.toggle("overflow-hidden");
    document.querySelector(".menuIcon").classList.toggle("cross")
}

// add-minus-btn
const addbtn = document.getElementById('addbtn')
const counting = document.getElementById('counting')
const minusbtn = document.getElementById('minusbtn')

addbtn.addEventListener("click", function () {
    if (counting.innerHTML < 30)
        counting.innerHTML = +counting.innerHTML + 1;
})

minusbtn.addEventListener("click", function () {
    if (counting.innerHTML > 1)
        counting.innerHTML = counting.innerHTML - 1;
});


// js-card
const myarr = [
    {
        price: "Price:",
        amount: "€179,99",
        btn: "Best Price",
        img: "https://i.ibb.co/RyGVbS6/section2-check-shirt-men.png",
    },

    {
        price: "Price:",
        amount: "€179,99",
        btn: "Best Price",
        img: "https://i.ibb.co/P15p04M/2-section2-sidestep.png",
    },

    {
        price: "Price:",
        amount: "€179,99",
        btn: "Best Price",
        img: "https://i.ibb.co/RyGVbS6/section2-check-shirt-men.png",
    },

    {
        price: "Price:",
        amount: "€179,99",
        btn: "Best Price",
        img: "https://i.ibb.co/P15p04M/2-section2-sidestep.png",
    },
]

myarr.forEach(element => {
    const cardelement = document.createElement("div")
    cardelement.className = "card"
    cardelement.innerHTML = `
                 <div class="border border-[#EBEBEB] rounded-t-[10px]"><img class="py-[27px] px-[44px]" src= ${element.img}/></div>
                <div class="pt-[28px] px-5 pb-[31px]">
                        <div class="flex justify-between pb-[16px]">
                            <div class="flex gap-[17px] items-center">
                            <h1 class="text-[#666666] text-[20px] font-normal leading-[20px] font-poppins"> ${element.price}</h1>
                            <p class="text-black text-[20px] font-semibold font-Poppins leading-[25px]"> ${element.amount}</p>
                            </div>
                             <p class="text-white text-[10px] font-normal font-Poppins leading-[12px] py-[4px] px-[10px] bg-[#28A745] rounded-[6px] hover:bg-white hover:text-[#28A745] border hover:border hover:border-[#28A745] transition-all ease-linear duration-300">${element.btn}</p>
                        </div>
                        <p class="text-[#333333] text-[16px] font-normal font-Poppins leading-[20px] mb-[10px]">Size:</P>
                       <div class="flex gap-[11px] mb-[11px]">
                           <p class="numbers">41</p>
                           <p class="numbers">42</p>
                           <p class="numbers">43</p>
                           </div>
                           <div class="flex gap-[11px]">
                           <p class="numbers">44</p>
                           <p class="numbers">45</p>
                           <p class="numbers">46</p>
                         </div>
                           <p class="text-[#454729] text-[16px] font-normal font-Poppins leading-[20px] pt-[19px] pb-[8px]">View this product as:</p>
                           <p class="text-[#007BFF] text-[16px] font-semibold font-Poppins leading-[20px] ">Foot Locker NL</p>
                         </div>
                              `
    cardcontainer.appendChild(cardelement)
})

// =======tabs========
function navtabs(tabs) {
    const tabshow = document.querySelectorAll('.tabshow')
    const tabbtn = document.querySelectorAll('.tabs button')
    tabshow.forEach(content => {
        content.style.display = 'none'
    })

    const selecttoshow = document.getElementById(tabs)
    selecttoshow.style.display = 'block'

    tabbtn.forEach(content => {
        content.classList.remove('text-red-500')
        content.classList.remove('bottom_line')
    })



    const activeTab = document.querySelector(`button[onclick="navtabs('${tabs}')"]`)
    activeTab.classList.add("text-red-500")
    activeTab.classList.add("bottom_line")
}
navtabs('tab1')

// js-shoes-card
const myshoecard = [
    {
        img: "https://i.ibb.co/9tSksrQ/card-red-shoes.png",
        images: "https://i.ibb.co/tYSjBjc/10-off.png",
        imagesp: "https://i.ibb.co/WBb5240/new.png",
        heading: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        img2: "https://i.ibb.co/HP3grV8/shopping-cart.png",
        img3: "https://i.ibb.co/wSWGpwy/5-star.png"

    },
    {
        img: "https://i.ibb.co/dtKYQkC/card-gray-shoe.png",
        images: "https://i.ibb.co/tYSjBjc/10-off.png",
        imagesp: "https://i.ibb.co/WBb5240/new.png",
        heading: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        img2: "https://i.ibb.co/HP3grV8/shopping-cart.png",
        img3: "https://i.ibb.co/wSWGpwy/5-star.png"

    },
    {
        img: "https://i.ibb.co/9tSksrQ/card-red-shoes.png",
        images: "https://i.ibb.co/tYSjBjc/10-off.png",
        imagesp: "https://i.ibb.co/WBb5240/new.png",
        heading: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        img2: "https://i.ibb.co/HP3grV8/shopping-cart.png",
        img3: "https://i.ibb.co/wSWGpwy/5-star.png"

    },
    {
        img: "https://i.ibb.co/dtKYQkC/card-gray-shoe.png",
        images: "https://i.ibb.co/tYSjBjc/10-off.png",
        imagesp: "https://i.ibb.co/WBb5240/new.png",
        heading: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        img2: "https://i.ibb.co/HP3grV8/shopping-cart.png",
        img3: "https://i.ibb.co/wSWGpwy/5-star.png"

    },
    {
        img: "https://i.ibb.co/9tSksrQ/card-red-shoes.png",
        images: "https://i.ibb.co/tYSjBjc/10-off.png",
        imagesp: "https://i.ibb.co/WBb5240/new.png",
        heading: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        img2: "https://i.ibb.co/HP3grV8/shopping-cart.png",
        img3: "https://i.ibb.co/wSWGpwy/5-star.png"

    },
    {
        img: "https://i.ibb.co/dtKYQkC/card-gray-shoe.png",
        images: "https://i.ibb.co/tYSjBjc/10-off.png",
        imagesp: "https://i.ibb.co/WBb5240/new.png",
        heading: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        img2: "https://i.ibb.co/HP3grV8/shopping-cart.png",
        img3: "https://i.ibb.co/wSWGpwy/5-star.png"

    },
    {
        img: "https://i.ibb.co/9tSksrQ/card-red-shoes.png",
        images: "https://i.ibb.co/tYSjBjc/10-off.png",
        imagesp: "https://i.ibb.co/WBb5240/new.png",
        heading: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        img2: "https://i.ibb.co/HP3grV8/shopping-cart.png",
        img3: "https://i.ibb.co/wSWGpwy/5-star.png"

    },
    {
        img: "https://i.ibb.co/dtKYQkC/card-gray-shoe.png",
        images: "https://i.ibb.co/tYSjBjc/10-off.png",
        imagesp: "https://i.ibb.co/WBb5240/new.png",
        heading: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        img2: "https://i.ibb.co/HP3grV8/shopping-cart.png",
        img3: "https://i.ibb.co/wSWGpwy/5-star.png"

    },
]

const shoecardcontainer = document.getElementById("shoecardcontainer")

myshoecard.forEach(cards => {
    const cardelement = document.createElement("div")
    cardelement.className = ("shoecards")
    cardelement.innerHTML = `
    <div class="relative">
    <img class="w-[100%] "src=${cards.img} alt="img"/>
    <div class="absolute top-[-15px] left-[-12px]">
    <img  src=${cards.images} alt="img"/>
    </div>
     <div class="absolute top-[-4px] right-[1px]">
    <img  src=${cards.imagesp} alt="img"/>
    </div>
    </div>

    <div class="p-3">
  <div>
    <h1 class=" text-[#555555] text-[18px] font-medium leading-[34px] font-Poppins pt-2 ">${cards.heading}</h1>
      <div class="flex justify-between ">
    <div class="flex gap-2">
    <p class="text-[#999999] text-[18px] font-medium leading-[34px] font-Poppins">${cards.price1}</p>
    <p class="text-[#FF0000] text-[18px] font-medium leading-[34px] font-Poppins pb-2 ">${cards.price2}</p>
    </div>
     <img class="mt-[-35px] object-contain"src=${cards.img2} alt="img"/>
     </div>
      <img class="pb-4"  src=${cards.img3} alt="img"/>
      </div
    `
    shoecardcontainer.appendChild(cardelement)
})