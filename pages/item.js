import SingleItem from '../components/SingleItem';

const Item = (props) => {
	return (
		<div>
			<p>Single Item</p>
			<SingleItem id={props.query.id} />
		</div>
	);
};

export default Item;
