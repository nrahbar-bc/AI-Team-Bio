export const getChatGPTContent = async (attributes) => {
	try {
		const { finalQuery, finalAnswer } = attributes;
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
		const answer = await response.json();
		return answer;
	} catch (error) {
		console.error(error);
		return error;
	}
};
