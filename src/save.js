import { useBlockProps } from '@wordpress/block-editor';
export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ 'AI Team Bio – hello from the saved content!' }
		</p>
	);
}
