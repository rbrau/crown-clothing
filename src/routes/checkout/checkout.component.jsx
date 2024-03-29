import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
	CheckoutContainer,
	CheckoutHeader,
	HeaderBlock,
	Total,
} from './checkout.styles.jsx';
const Checkout = () => {
	const { cartItems, cartTotal } = useContext(CartContext);

	return (
		<div>
			<CheckoutContainer>
				<CheckoutHeader>
					<HeaderBlock>
						<span>Product</span>
					</HeaderBlock>
					<HeaderBlock>
						<span>Description</span>
					</HeaderBlock>
					<HeaderBlock>
						<span>Quantity</span>
					</HeaderBlock>
					<HeaderBlock>
						<span>Price</span>
					</HeaderBlock>
					<HeaderBlock>
						<span>Remove</span>
					</HeaderBlock>
				</CheckoutHeader>
				<div>
					{cartItems.map((cartItem) => {
						return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
					})}
				</div>
				<Total>Total: ${cartTotal}</Total>
			</CheckoutContainer>
		</div>
	);
};

export default Checkout;
