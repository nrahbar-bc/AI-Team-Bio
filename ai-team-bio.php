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

function ai_team_bio_settgins_submenu() {
	add_submenu_page(
		'options-general.php',
		'ChatGPT API Key for AI-Team-Bio',
		'API KEY',
		'administrator',
		'api-key-ai-team-bio',
		'ai_team_bio_settings_page' );
}
add_action("admin_menu", "ai_team_bio_settgins_submenu");

function ai_team_bio_settings_page() { ?>
	<h1>AI Team Bio</h1>
	<form method="POST">
		<label>Enter your API Key</label>
		<input type="password" name="chatgtp_api_key">
		<input type="submit" class="button button-primary" value="Save">
	</form>
 <?php }

function save_api_key() {
	if ( isset( $_POST['chatgtp_api_key'] ) ) {
		update_option( 'chatgtp_api_key', sanitize_text_field( $_POST['chatgtp_api_key'] ) );
	}
}
add_action( 'admin_init', 'save_api_key' );
