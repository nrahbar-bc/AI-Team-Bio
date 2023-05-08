import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { PanelOptions } from './components/panel';
import './editor.scss';

const AIQuery = ({ attributes }) => {
	const {
		language,
		homeTeam,
		awayTeam,
		paragraphCount,
		showInfographicContent,
		showPrediction,
	} = attributes;
	let q = `Write a biography in ${language} about `;
	q += homeTeam ? `"${homeTeam}"` : '';
	q += homeTeam && awayTeam ? ' and ' : '';
	q += awayTeam ? `"${awayTeam}"` : '';
	q += ` in ${paragraphCount} paragraphs`;
	q += homeTeam && awayTeam ? ' separately' : '';
	q += showInfographicContent ? ' with infography about the teams.' : '.';
	q +=
		homeTeam && awayTeam && showPrediction
			? " At the end, what is the result's prediction in a match between these teams."
			: '';
	if (homeTeam || awayTeam) {
		return (
			<>
				<h3>We will ask this from the ChatGPT:</h3>
				<blockquote>
					<p>{q}</p>
				</blockquote>
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
