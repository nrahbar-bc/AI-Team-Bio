import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { PanelOptions } from './components/panel';
import './editor.scss';

const AIQuery = ({ attributes }) => {
	const { finalQuery, finalAnswer } = attributes;

	return (
		<>
			{finalQuery && (
				<>
					<h3>
						{__(
							'We will ask this from the ChatGPT:',
							'ai-team-bio'
						)}
					</h3>
					<p>{finalQuery}</p>
				</>
			)}
			{finalAnswer && <div>{finalAnswer}</div>}
		</>
	);
};

export default function Edit(props) {
	return (
		<div {...useBlockProps()}>
			<PanelOptions {...props} />
			{!props.attributes.finalQuery && (
				<p>
					{__(
						'AI Team Bio – set the parameters on sidebar!',
						'ai-team-bio'
					)}
				</p>
			)}
			<AIQuery {...props} />
		</div>
	);
}
