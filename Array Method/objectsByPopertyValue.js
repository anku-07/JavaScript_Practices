function filterObjectsByPrice(objects, maxPrice) {
    // Use the filter method to return objects with price less than or equal to maxPrice
    const filteredObjects = objects.filter(obj => obj.price <= maxPrice);
  
    return filteredObjects;
  }
  
  // Example usage:
  const products = [
    { name: "Product A", price: 25 },
    { name: "Product B", price: 30 },
    { name: "Product C", price: 20 },
    { name: "Product D", price: 40 }
  ];
  
  const maxAllowedPrice = 30;
  
  const filteredProducts = filterObjectsByPrice(products, maxAllowedPrice);
  console.log(filteredProducts);
  // Output should be an array with objects having price less than or equal to 30
  