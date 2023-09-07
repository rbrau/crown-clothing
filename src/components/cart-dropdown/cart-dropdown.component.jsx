import {
	CartDropdowContainer,
	CartItems,
	EmptyMessage,
} from './cart-dropdown.styles';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component.jsx';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate('/checkout');
	};

	return (
		<CartDropdowContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
				) : (
					<EmptyMessage>Empty cart</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={goToCheckoutHandler}> GO TO CHECKOUT </Button>
		</CartDropdowContainer>
	);
};
export default CartDropdown;
