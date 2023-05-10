import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { PanelOptions } from './components/panel';
import './editor.scss';

const AIQuery = ({ attributes, setAttributes }) => {
	const { finalQuery, finalAnswer } = attributes;
	const finalAnswerChange = (newAnswer) => {
		setAttributes({ finalAnswer: newAnswer });
	};

	return (
		<>
			{finalQuery && !finalAnswer && (
				<>
					<h3>
						{__(
							'We will ask this from the ChatGPT:',
							'ai-team-bio'
						)}
					</h3>
					<p>{finalQuery.join(' ')}</p>
				</>
			)}
			{finalAnswer && (
				<RichText
					value={finalAnswer}
					tagName="div"
					allowedFormats={[
						'core/bold',
						'core/italic',
						'core/link',
						'core/image',
					]}
					onChange={finalAnswerChange}
				/>
			)}
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
