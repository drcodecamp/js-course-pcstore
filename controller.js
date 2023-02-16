const handleClearCart = () => {
    clearCartItems()
}

const handleOnChange = ({ target }) => {
    const filterBy = target.value
    filterComputerList(filterBy)
}

const handleOnItemAddToCart = (ev) => {
    const computerId = ev.target.id
    setCartItem(computerId)
}

const onShopPageLoad = () => {
    initShopPage()
}

const onCartPageLoad = () => {
    initCartPage()
}
