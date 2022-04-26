export const formatPrice = (number) => {
    return new Intl.NumberFormat("en-GB", {
        style: "decimal",
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
    }).format(number);
};

export const sumTotalCartPrice = (cart) => {
    let totalAmount = cart.reduce((total, item) => {
        const count = parseInt(item.count, 10)
        const price = parseFloat(item.price, 10) * 100
        return total += count * price
    }, 0)

    totalAmount = totalAmount / 100;

    return totalAmount;
}
