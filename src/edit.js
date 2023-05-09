import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { PanelOptions } from './components/panel';
import './editor.scss';

const AIQuery = ({ attributes, setAttributes }) => {
	const { finalQuery } = attributes;
	const onFinalQueryChange = (newFinalQuery) => {
		setAttributes({ finalQuery: newFinalQuery });
	};

	if (finalQuery) {
		return (
			<>
				<h3>
					{__(
						"We will ask this from the ChatGPT (It's editable):",
						'ai-team-bio'
					)}
				</h3>
				<RichText value={finalQuery} onChange={onFinalQueryChange} />
			</>
		);
	}
	return '';
};

export default function Edit(props) {
	return (
		<div {...useBlockProps()}>
			<PanelOptions {...props} />
			<p>
				{__(
					'AI Team Bio – set the parameters on sidebar!',
					'ai-team-bio'
				)}
			</p>
			<AIQuery {...props} />
		</div>
	);
}
