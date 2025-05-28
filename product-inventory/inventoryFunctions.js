function calculateDiscount(price, discountRate) {
  if (typeof price !== "number" || typeof discountRate !== "number")
    return null;
  if (discountRate < 0 || discountRate > 1) return null;
  let discountAmount = price * discountRate;
  let finalPrice = price - discountAmount;
  return finalPrice;
}

function filterProducts(products, callback) {
  if (!Array.isArray(products) || typeof callback !== "function") return [];
  if (products = []) {
    return undefined;
  }

  return products.filter(callback);
}

function sortInventory(inventory, key) {
  if (!Array.isArray(inventory) || typeof key !== "string") return [];
  // TODO: Implement sorting logic
  return [];
}

module.exports = { calculateDiscount, 
    filterProducts,
    sortInventory,
}