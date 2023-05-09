import { InspectorControls } from '@wordpress/block-editor';
import {
	Panel,
	PanelBody,
	PanelRow,
	TextControl,
	SelectControl,
	CheckboxControl,
	Button,
} from '@wordpress/components';

const BlockSettings = ({ attributes, setAttributes }) => {
	const { homeTeam, awayTeam } = attributes;
	const onHomeChange = (newHome) => {
		setAttributes({ homeTeam: newHome });
	};
	const onAwayChange = (newAway) => {
		setAttributes({ awayTeam: newAway });
	};
	return (
		<PanelBody title="1. Block Settings" initialOpen={false}>
			<PanelRow>Teams Information</PanelRow>
			<TextControl
				label="Home Team Name"
				value={homeTeam}
				onChange={onHomeChange}
			/>
			<TextControl
				label="Away Team Name"
				value={awayTeam}
				onChange={onAwayChange}
			/>
		</PanelBody>
	);
};

const ContentSettings = ({ attributes, setAttributes }) => {
	const { paragraphCount, showInfographicContent } = attributes;
	const onParagraphCountChange = (newCount) => {
		setAttributes({ paragraphCount: newCount });
	};
	const onInfographicContentChange = (newInfographicContent) => {
		setAttributes({ showInfographicContent: newInfographicContent });
	};
	return (
		<PanelBody title="2. Content Settings" initialOpen={false}>
			<PanelRow>Content Information</PanelRow>
			<SelectControl
				label="How many paragraph for the Biography"
				options={[
					{ label: '1', value: '1' },
					{ label: '2', value: '2' },
					{ label: '3', value: '3' },
					{ label: '4', value: '4' },
					{ label: '5', value: '5' },
				]}
				value={paragraphCount}
				onChange={onParagraphCountChange}
				__nextHasNoMarginBottom
			/>
			<CheckboxControl
				label="Show Infographic content"
				checked={showInfographicContent}
				onChange={onInfographicContentChange}
			/>
		</PanelBody>
	);
};

const ExtraSettings = ({ attributes, setAttributes }) => {
	const { language, showPrediction } = attributes;
	const languages = [
		{ label: 'English', value: 'English' },
		{ label: 'Danish', value: 'Danish' },
		{ label: 'French', value: 'French' },
		{ label: 'Greek', value: 'Greek' },
		{ label: 'Italian', value: 'Italian' },
		{ label: 'Farsi', value: 'Farsi' },
		{ label: 'Serbian', value: 'Serbian' },
	];
	const onShowPredictionChange = (newShowPrediction) => {
		setAttributes({ showPrediction: newShowPrediction });
	};
	const onLanguageChange = (newLanguage) => {
		setAttributes({ language: newLanguage });
	};
	return (
		<PanelBody title="3. Extra Settings" initialOpen={false}>
			<PanelRow>Extra Information</PanelRow>
			<CheckboxControl
				label="Show the prediction"
				checked={showPrediction}
				onChange={onShowPredictionChange}
			/>
			<SelectControl
				label="Content language"
				options={languages}
				value={language}
				onChange={onLanguageChange}
				__nextHasNoMarginBottom
			/>
		</PanelBody>
	);
};

const GenerateSection = ({ attributes, setAttributes }) => {
	const {
		language,
		homeTeam,
		awayTeam,
		paragraphCount,
		showInfographicContent,
		showPrediction,
		finalQuery,
	} = attributes;

	const GenerateContent = () => {
		let q = `Write a biography in ${language} about `;
		q += homeTeam ? `"${homeTeam}"` : '';
		q += homeTeam && awayTeam ? ' and ' : '';
		q += awayTeam ? `"${awayTeam}"` : '';
		q += ` in ${paragraphCount} paragraphs`;
		q += homeTeam && awayTeam ? ' separately' : '';
		q += showInfographicContent ? ' with infography about the teams.' : '.';
		q +=
			homeTeam && awayTeam && showPrediction
				? " What is the result's prediction in a match between these teams. Also give some head to head history for the teams."
				: '';
		setAttributes({ finalQuery: q });
	};
	return (
		<PanelBody title="4. Generate Content" initialOpen={true}>
			<Button icon="upload" variant="primary" onClick={GenerateContent}>
				Generate!!
			</Button>
		</PanelBody>
	);
};

export const PanelOptions = (props) => {
	return (
		<InspectorControls>
			<Panel>
				<BlockSettings {...props} />
			</Panel>
			<Panel>
				<ContentSettings {...props} />
			</Panel>
			<Panel>
				<ExtraSettings {...props} />
			</Panel>
			<Panel>
				<GenerateSection {...props} />
			</Panel>
		</InspectorControls>
	);
};
