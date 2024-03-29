import ProductCard from '../product-card/product-card.component';

import {
	Title,
	CategoryPreviewContainer,
	Preview,
} from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
	return (
		<CategoryPreviewContainer>
			<h2>
				<Title to={title}>{title.toUpperCase()}</Title>
			</h2>
			<Preview>
				{/* Now filter for ONLY 4 objects per category */}
				{products
					.filter((_, idx) => idx < 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</Preview>
		</CategoryPreviewContainer>
	);
};
export default CategoryPreview;
