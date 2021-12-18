import React, { useState } from 'react';
import { render } from 'react-dom';
import { IconContext } from 'react-icons';
import { FiSliders, FiPlus } from 'react-icons/fi';
import Carousel from '../../components/Carousel';
import currentTime from '../../../public/scripts/currentTime';
import '../../styles/index.css';
import '../../styles/utilities.css';
import './newtab.css';
import AddPrepCard from '../../components/AddPrepCard';

const cardsArray = [
	{
		CARD_FRONT: 'Hello World 1',
		CARD_BACK: 'Lorem Ipsum',
	},
	{
		CARD_FRONT: 'Hello World 2',
		CARD_BACK: 'Lorem Ipsum',
	},
	{
		CARD_FRONT: 'Hello World 3',
		CARD_BACK: 'Lorem Ipsum',
	},
	{
		CARD_FRONT: 'Hello World 4',
		CARD_BACK: 'Lorem Ipsum',
	},
];

const NewTab = () => {
	const [time, setTime] = useState(currentTime());
	const [showModal, setShowModal] = useState(false);
	const [cards, setCards] = useState(cardsArray);

	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};
	const DATE = new Date().toLocaleDateString(undefined, options);
	setInterval(() => {
		setTime(currentTime());
	}, 1000);
	function openModal() {
		setShowModal(true);
	}
	return (
		<IconContext.Provider value={{ color: '' }}>
			<div className="container container--newtab">
				<div className="flex justify-content-sb">
					<div>
						<h2 className="ff-cardo fs-900">Hello, User Name</h2>
					</div>
					<div className="text-right">
						<h2 className="fs-900">{time}</h2>
						<p>{DATE}</p>
					</div>
				</div>
				<div className="flex container--card">
					<Carousel cards={cards} />
				</div>

				<div className="text-right floating-buttons">
					<button className="rounded-buttons" onClick={openModal}>
						<span>
							<FiPlus size={30} />
						</span>
						Add PrepCard
					</button>
					<button className="rounded-buttons">
						<FiSliders size={30} />
					</button>
				</div>

				<AddPrepCard
					modalState={{ showModal, setShowModal }}
					cardState={{ cards, setCards }}
				/>
			</div>
		</IconContext.Provider>
	);
};
export default NewTab;
render(<NewTab />, document.getElementById('newtab'));
