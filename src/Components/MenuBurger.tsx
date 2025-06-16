import { useState } from "react";
import { Link } from "react-router";
import ArrowDown from "../img/Pictos/Picto-Arrow-Down.svg";
import ArrowRight from "../img/Pictos/Picto-Arrow-Right.svg";

interface Item {
	url: string;
	title: string;
}
interface MenuBurgerProps {
	pagesLevel: {
		title: string;
		list: Array<Item>;
	};
}

const MenuBurger = ({ pagesLevel }: MenuBurgerProps) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="dropdown">
			<div
				className="dropdown-header"
				onClick={() => setIsOpen(!isOpen)}
				onKeyUp={() => setIsOpen(!isOpen)}
			>
				<span>{pagesLevel.title}</span>
				{isOpen ? (
					<img src={ArrowDown} alt="" />
				) : (
					<img src={ArrowRight} alt="" />
				)}
			</div>
			{isOpen && (
				<ul className="dropdown-list">
					{pagesLevel.list.map((item) => (
						<li key={item.title}>
							<Link className="lienList" to={item.url}>
								{item.title}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default MenuBurger;
