<?php

/**
 * Plugin Name:       AI Team Bio
 * Description:       Team Biography Generator Powered By ChatGPT
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            BC Hackathon Team 6
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ai-team-bio
 */

function bcBlocksAiTeamBioBlockInit()
{
	register_block_type_from_metadata(__DIR__ . '/build', [
		'render_callback' => 'bcBlocksAiTeamBioBlockGenerate'
	]);
}
add_action('init', 'bcBlocksAiTeamBioBlockInit');

function bcBlocksAiTeamBioBlockGenerate($attributes)
{
	return '<p>The Content Will Generate Here!!!</p>' . '<h4>Attributes: </h4><pre class="custom-debug">' . print_r($attributes, true) . '</pre>';
}
