let computerList = null
let cart = []

const getComputers = (filterBy = '') => {
    if (computerList) {
        return computerList.filter((item) => {
            return item.name.toLowerCase().includes(filterBy.toLowerCase())
        })
    } else {
        computerList = dataList
        return computerList.filter((item) => {
            return item.name.toLowerCase().includes(filterBy.toLowerCase())
        })
    }
}

const setCartItem = (computerId) => {
    const cartItems = getCartItems()
    const computer = computerList.find(
        (computer) => computer._id === computerId
    )
    cartItems.push(computer)
    saveCart(cartItems)
    swal(`${computer.name},was added successfully to your cart!`)
}

const getCartItems = () => {
    const cartItems = localStorage.getItem('cart-items')
    const cartObj = JSON.parse(cartItems)
    if (cartObj) {
        cart = cartObj
        return cart
    } else return []
}

const clearCartItems = () => {
    localStorage.removeItem('cart-items')
    renderCartItems([])
    renderCartSumArea([])
}

const saveCart = (cart) => {
    localStorage.setItem('cart-items', JSON.stringify(cart))
}

const initShopPage = () => {
    const computerList = getComputers()
    renderComputerList(computerList)
    addSearchEventListener()
}

const initCartPage = () => {
    const cartItems = getCartItems()
    renderCartItems(cartItems)
    renderCartSumArea(cartItems)
}

const filterComputerList = (filterBy) => {
    const computerList = getComputers()
    const filteredList = computerList.filter((item) => {
        return item.name.toLowerCase().includes(filterBy.toLowerCase())
    })
    renderComputerList(filteredList)
}
