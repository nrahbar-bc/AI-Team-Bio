import { useBlockProps, RichText } from '@wordpress/block-editor';
export default function save({ attributes }) {
	const { finalQuery } = attributes;
	return (
		<>
			{!finalQuery && (
				<p {...useBlockProps.save()}>
					{'AI Team Bio – hello from the saved content!'}
				</p>
			)}
			<RichText.Content value={finalQuery} />
		</>
	);
}
