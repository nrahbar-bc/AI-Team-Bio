<?php

/**
 * Plugin Name:       AI Team Bio
 * Description:       Team Biography Generator Powered By ChatGPT
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            BC Hackathon Team Sixy
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ai-team-bio
 */

require dirname(__FILE__) . '/AiTeamBioOption.php';

function bcBlocksAiTeamBioBlockInit()
{
	$aiTeamBioOptions = get_option('ai_team_bio_option_name');
	$chatgptApiKey = $aiTeamBioOptions['chatgpt_api_key_0'];
	register_block_type_from_metadata(__DIR__ . '/build', [
		'attributes' => [
			'apiKey' => [
				'default' => $chatgptApiKey,
				'type'    => 'string'
			],
			"homeTeam" => [
				"type" => "string"
			],
			"awayTeam" => [
				"type" => "string"
			],
			"paragraphCount" => [
				"type" => "string",
				"default" => "1"
			],
			"showInfographicContent" => [
				"type" => "boolean",
				"default" => false
			],
			"language" => [
				"type" => "string",
				"default" => "English"
			],
			"showHead2Head" => [
				"type" => "boolean",
				"default" => false
			],
			"finalQuery" => [
				"type" => "array"
			],
			"finalAnswer" => [
				"type" => "string"
			]
		],
	]);
}
add_action('init', 'bcBlocksAiTeamBioBlockInit');
