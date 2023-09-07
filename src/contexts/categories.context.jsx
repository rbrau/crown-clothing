import { createContext, useState, useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';
// -- DO ONLY ONCE -- HOW TO POPULATE THE FIRESTORE DB --
// import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils.js';
//import SHOP_DATA from '../shop-data.js';

// Value you want to access
export const CategoriesContext = createContext({
	categoriesMap: {},
});

// The actual component is called a PROVIDER
export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({});
	// -- DO ONLY ONCE -- HOW TO POPULATE THE FIRESTORE DB --
	// useEffect(() => {
	//	addCollectionAndDocuments('categories', SHOP_DATA);
	//}, []);
	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			setCategoriesMap(categoryMap);
		};
		getCategoriesMap();
	}, []);

	const value = { categoriesMap };
	return (
		<CategoriesContext.Provider value={value}>
			{' '}
			{children}
		</CategoriesContext.Provider>
	);
};
