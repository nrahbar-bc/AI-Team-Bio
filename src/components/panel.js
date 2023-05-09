import { InspectorControls } from '@wordpress/block-editor';
import { getChatGPTContent } from './api-chatGPT';
import {
	Panel,
	PanelBody,
	PanelRow,
	TextControl,
	SelectControl,
	CheckboxControl,
	Button,
	ButtonGroup,
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
	const { language, showHead2Head } = attributes;
	const languages = [
		{ label: 'English', value: 'English' },
		{ label: 'Danish', value: 'Danish' },
		{ label: 'French', value: 'French' },
		{ label: 'Greek', value: 'Greek' },
		{ label: 'Italian', value: 'Italian' },
		{ label: 'Farsi', value: 'Farsi' },
		{ label: 'Serbian', value: 'Serbian' },
	];
	const onShowHead2HeadChange = (newshowHead2Head) => {
		setAttributes({ showHead2Head: newshowHead2Head });
	};
	const onLanguageChange = (newLanguage) => {
		setAttributes({ language: newLanguage });
	};
	return (
		<PanelBody title="3. Extra Settings" initialOpen={false}>
			<PanelRow>Extra Information</PanelRow>
			<CheckboxControl
				label="Show the head to head history"
				checked={showHead2Head}
				onChange={onShowHead2HeadChange}
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
		showHead2Head,
		finalQuery,
		finalAnswer,
	} = attributes;

	const GenerateContent = () => {
		const queries = [];
		if (homeTeam)
			queries.push(
				`Write a biography in ${language} about "${homeTeam}" in ${paragraphCount} paragraphs.`
			);
		if (homeTeam && showInfographicContent)
			queries.push(
				`Write infography in ${language} about "${homeTeam}".`
			);
		if (awayTeam)
			queries.push(
				`Write a biography in ${language} about "${awayTeam}" in ${paragraphCount} paragraphs.`
			);
		if (awayTeam && showInfographicContent)
			queries.push(
				`Write infography in ${language} about "${awayTeam}".`
			);
		if (homeTeam && awayTeam && showHead2Head)
			queries.push(
				`some head to head history in ${language} between "${homeTeam}" and "${awayTeam}".`
			);
		setAttributes({ finalQuery: queries });
		getChatGPTContent(attributes, setAttributes).then((answer) => {
			let finalChoice = '';
			answer.choices.forEach((choice) => {
				finalChoice += choice.text;
			});
			setAttributes({ finalAnswer: finalChoice });
		});
	};

	const DeleteContent = () => {
		setAttributes({ finalAnswer: '' });
	};
	return (
		<PanelBody title="4. Generate Content" initialOpen={false}>
			<ButtonGroup>
				<Button
					icon="upload"
					variant="primary"
					onClick={GenerateContent}
					text="Generate"
				/>
				<Button
					icon="trash"
					variant="primary"
					onClick={DeleteContent}
					isDestructive
					text="Delete"
				/>
			</ButtonGroup>
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
