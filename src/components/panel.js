import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { getChatGPTContent, nl2br } from '../helpers/helpers';
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
		<PanelBody
			title={__('1. Block Settings', 'ai-team-bio')}
			initialOpen={false}
		>
			<PanelRow>{__('Teams Information', 'ai-team-bio')}</PanelRow>
			<TextControl
				label={__('Home Team Name', 'ai-team-bio')}
				value={homeTeam}
				onChange={onHomeChange}
			/>
			<TextControl
				label={__('Away Team Name', 'ai-team-bio')}
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
		<PanelBody
			title={__('2. Content Settings', 'ai-team-bio')}
			initialOpen={false}
		>
			<PanelRow>{__('Content Information', 'ai-team-bio')}</PanelRow>
			<SelectControl
				label={__(
					'How many paragraph for the Biography',
					'ai-team-bio'
				)}
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
		<PanelBody
			title={__('3. Extra Settings', 'ai-team-bio')}
			initialOpen={false}
		>
			<PanelRow>{__('Extra Information', 'ai-team-bio')}</PanelRow>
			<CheckboxControl
				label={__('Show the head to head history', 'ai-team-bio')}
				checked={showHead2Head}
				onChange={onShowHead2HeadChange}
			/>
			<SelectControl
				label={__('Content language', 'ai-team-bio')}
				options={languages}
				value={language}
				onChange={onLanguageChange}
				__nextHasNoMarginBottom
			/>
		</PanelBody>
	);
};

const GenerateSection = ({ attributes, setAttributes }) => {
	const [loading, setLoading] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);

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
		setLoading(true);

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
				finalChoice += nl2br(choice.text);
			});
			setAttributes({ finalAnswer: finalChoice });
			setLoading(false);
		});
	};

	const DeleteContent = () => {
		setIsDeleting(true);
		setTimeout(() => {
			setIsDeleting(false);
			setAttributes({ finalAnswer: '' });
		}, 2000);
	};
	return (
		<PanelBody
			title={__('4. Generate Content', 'ai-team-bio')}
			initialOpen={false}
		>
			<ButtonGroup>
				<Button
					icon={loading ? 'update' : 'upload'}
					variant="primary"
					onClick={GenerateContent}
					text={
						loading
							? __('Generating…', 'ai-team-bio')
							: __('Generate', 'ai-team-bio')
					}
					disabled={loading}
					isBusy={loading}
				/>
				{isDeleting ? (
					<Button
						icon="update"
						variant="primary"
						isBusy
						isDestructive
						text={__('Deleting…', 'ai-team-bio')}
					/>
				) : (
					<Button
						icon="trash"
						variant="primary"
						onClick={DeleteContent}
						isDestructive
						text={__('Delete', 'ai-team-bio')}
					/>
				)}
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
