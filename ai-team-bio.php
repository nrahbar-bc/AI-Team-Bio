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
 *
 * @package           create-block
 */

function bc_blocks_ai_team_bio_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'bc_blocks_ai_team_bio_block_init' );