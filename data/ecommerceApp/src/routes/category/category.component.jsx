import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product.card.component';

import { selectCategoriesMap } from '../../store/categories/category.selector';

import './category.style.scss';

const Category = () => {
	const { category } = useParams();
	console.log('render/re-rendering category component');
	const categoriesMap = useSelector(selectCategoriesMap);
	// it only rerenders this whole component if
	// the return of the selector function you passed to it is diffrent
	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		console.log('effect fired celling setProducts');
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<Fragment>
			<h2 className='category-title'>{category.toUpperCase()}</h2>
			<div className='main-category-container'>
				{products &&
					products.map((product) => <ProductCard key={product.id} product={product} />)}
			</div>
		</Fragment>
	);
};

export default Category;
