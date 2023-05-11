import { __ } from '@wordpress/i18n';

export const nl2br = (str) => {
	if (typeof str === 'undefined' || str === null) {
		return '';
	}
	const breakTag = '<br>';
	return (str + '').replace(
		/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
		'$1' + breakTag + '$2'
	);
};

export const getChatGPTContent = async (finalQuery) => {
	try {
		const response = await fetch('https://api.openai.com/v1/completions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization:
					'Bearer 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',
			},
			body: JSON.stringify({
				model: 'text-davinci-003',
				prompt: finalQuery,
				temperature: 0,
				max_tokens: 1000,
				user: 'user',
			}),
		});
		if (await response.ok) {
			const answer = await response.json();
			return answer;
		}
		return {
			choices: [
				{
					text: 'Error ' + response.status + ': ',
				},
				{
					text: __(
						'We had an issue in getting the data, please push "Delete" and "Generate" again.',
						'ai-team-bio'
					),
				},
			],
		};
	} catch (error) {
		return error;
	}
};
