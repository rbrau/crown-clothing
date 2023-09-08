import { useContext } from 'react';
import {
	CheckoutItemContainer,
	Imagecontainer,
	BaseSpan,
	Quantity,
	Arrow,
	Value,
	RemoveButton,
} from './checkout-item.styles.jsx';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	const { clearItemFromCart, addItemToCart, removeItemFromCart } =
		useContext(CartContext);

	const clearItemHandler = () => clearItemFromCart(cartItem);
	const addItemHandler = () => addItemToCart(cartItem);
	const removeItemHandler = () => removeItemFromCart(cartItem);

	return (
		<CheckoutItemContainer>
			<Imagecontainer>
				<img src={imageUrl} alt={`${name}`} />
			</Imagecontainer>
			<BaseSpan> {name}</BaseSpan>
			<Quantity>
				<Arrow onClick={removeItemHandler}>&#10094;</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={addItemHandler}>&#10095;</Arrow>
			</Quantity>
			<BaseSpan>${price}</BaseSpan>
			<RemoveButton onClick={clearItemHandler}>&Chi;</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
