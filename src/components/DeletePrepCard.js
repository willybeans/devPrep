import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineWarning } from 'react-icons/ai';
import '../styles/utilities.css';

const DeletePrepCard = () => {
	const cards = useSelector((state) => state.cards);
	const current = useSelector((state) => state.current);

	const card = cards[current];
	const dispatch = useDispatch();

	async function deletePrepCard() {
		dispatch({ type: 'DELETE_CARD_MODAL', payload: false });
	}
	return (
		<div className="flex modal--container ">
			<AiOutlineWarning size={70} color="red" />
			<h2 className="fs-900 ff-cardo">Before you pull the trigger...</h2>
			<p className="fs-600">
				Are you sure you want to delete <em>{card.CARD_FRONT}</em>
			</p>
			<button onClick={deletePrepCard} className="primary-btn">
				Yes, Delete it
			</button>
		</div>
	);
};

export default DeletePrepCard;
