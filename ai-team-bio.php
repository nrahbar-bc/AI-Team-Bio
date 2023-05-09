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
	if (!empty($attributes['finalAnswer'])) {
		return '<p>The Content Will Generate Here!!!</p>' . nl2br($attributes['finalAnswer']);
	} else {
		return '<div class="alert alert-danger" role="alert">Please set the parameters first and then generate the content.</div>';
	}
}
