const generateCartItem = (item) => {
    return `
        <div class="cart-item">
        <img src="${item.image}" alt="item"/>
        <div>${item.name}</div>
        <div class="item-price">${formatter.format(item.price)}</div>
</div>
    `
}

const generateCartList = (cart) => {
    if (!cart) return ``
    let htmlStr = ''
    cart.forEach((item) => {
        const cartItem = generateCartItem(item)
        htmlStr += cartItem
    })
    let totalSum = 0
    cart.forEach((item) => {
        const price = +item.price
        totalSum += price
    })
    htmlStr += `<div class="cart-total">Total Order: ${formatter.format(
        totalSum
    )}</div>`
    return htmlStr
}

const renderCartItems = (cartItems) => {
    document.querySelector(`#root`).innerHTML = generateCartList(cartItems)
}

const renderCartSumArea = (cartItems) => {
    document.querySelector(`#cart-information`).innerHTML = `You have ${
        cartItems.length || '0'
    } items on your cart.`
}

const renderComputerList = (computerList) => {
    document.querySelector(`#root`).innerHTML = generateComputerListElements(
        computerList
    )
    const buttons = document.querySelectorAll('.cart-button')
    buttons.forEach((button) => {
        button.addEventListener('click', handleOnItemAddToCart)
    })
}

const addSearchEventListener = () => {
    const searchInput = document.querySelector('#search')
    searchInput.addEventListener('input', (e) => {
        handleOnChange(e)
    })
}

const generateComputerListElements = (computerList) => {
    let htmlStr = ''
    computerList.forEach((computer) => {
        const computerCard = generateComputerItem(computer)
        htmlStr += computerCard
    })
    return htmlStr
}

const generateComputerItem = (computer) => {
    return `
     <div class="computer-card">
            <img src="${computer.image}" alt="image" width="250px"/>
            <p class="computer-category">${computer.manufacturer.toUpperCase()}</p>
            <div class="computer-description">${pipeString(computer.name)}</div>
            <div class="computer-price">${formatter.format(
                computer.price
            )}</div>
            <div class="cart-button" id="${computer._id}">Add to Cart</div>
    </div>`
}

const pipeString = (str) => {
    return str.length > 100 ? str.substring(0, 115) + '...' : str
}

const addClearCartEventListener = () => {
    document
        .querySelector('#clear-cart')
        .addEventListener('click', handleClearCart)
}

const formatter = new Intl.NumberFormat('he-IL', {
    style: 'currency',
    currency: 'ILS',
})
