export const getChatGPTContent = async () => {
  try {
    const response = await fetch( 'https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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',
      },
      body: JSON.stringify( {
        model: 'text-davinci-003',
        prompt: 'Write a biography in English about "Aris" and "Paok" in 1 paragraphs separately. At the end, what is the head to head history between these teams.',
        temperature: 0,
        max_tokens: 1000,
      } ),
    } );
    const answer = await response.json();
    console.log(answer.choices[0].text);
  } catch ( error ) {
    console.error( error );
  }
}