import { useBlockProps, RichText } from '@wordpress/block-editor';
import './style.scss';
export default function save({ attributes }) {
	const { finalAnswer } = attributes;
	return (
		<div {...useBlockProps.save()}>
			{finalAnswer ? (
				<RichText.Content value={finalAnswer} />
			) : (
				<RichText.Content
					className="alert alert-danger my-5"
					value="Please set the parameters first and then generate the content."
					tagName="div"
				/>
			)}
		</div>
	);
}
