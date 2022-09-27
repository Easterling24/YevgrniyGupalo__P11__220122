import './index.css';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

export default function Collapse({ title, text, expanded, setExpanded }) {

	const handleExpand = () => {
		if (expanded) {
			setExpanded(false);
		} else {
			setExpanded(true);
		}
	};

	const isTextArr = Array.isArray(text);

	const aboutPage = window.location.href.includes('/about');

	return (
		<div className={aboutPage ? 'collapse-wrapper-about' : 'collapse-wrapper'}>
			<div className="label-area">
				<span>{title}</span>
				<button className="collapse-main-btn" onClick={handleExpand}>
					{expanded ? <FaAngleUp /> : <FaAngleDown />}
				</button>
			</div>

			{aboutPage ? (
				<div className="descitpion-content-wrapper-about">
					<div className={expanded ? 'description-content-about' : 'description-content-about-folded'}>
						<p>{text}</p>
					</div>
				</div>
			) : (
				<div className="descitpion-content-wrapper">
					{isTextArr ? (
						<div className={expanded ? 'description-content' : 'description-content-folded'}>
							<ul>
								{text.map((elt) => {
									return <li key={elt}>{elt}</li>;
								})}
							</ul>
						</div>
					) : (
						<div className={expanded ? 'description-content' : 'description-content-folded'}>
							<p>{text}</p>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
