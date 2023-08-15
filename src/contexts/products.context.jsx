import { createContext, useState, useEffect } from 'react';
import PRODUCTS from '../shop-data.json';

// Value you want to access
export const ProductsContext = createContext({
	products: [],
});

// The actual component is called a PROVIDER
export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState(PRODUCTS);
	const value = { products };
	return (
		<ProductsContext.Provider value={value}>
			{' '}
			{children}
		</ProductsContext.Provider>
	);
};
