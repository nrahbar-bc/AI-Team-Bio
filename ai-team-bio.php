<?php

/**
 * Plugin Name:       AI Team Bio
 * Description:       Team Biography Generator Powered By ChatGPT
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            BC Hackathon Team Sixy
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ai-team-bio
 */

function bcBlocksAiTeamBioBlockInit()
{
	register_block_type_from_metadata(__DIR__ . '/build');
}
add_action('init', 'bcBlocksAiTeamBioBlockInit');
