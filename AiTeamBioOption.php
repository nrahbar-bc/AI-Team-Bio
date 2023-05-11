<?php
class AiTeamBioOption
{
    private $ai_team_bio_options;
    public function __construct()
    {
        add_action('admin_menu', array($this, 'aiTeamBioAddPluginPage'));
        add_action('admin_init', array($this, 'aiTeamBioPageInit'));
    }
    public function aiTeamBioAddPluginPage()
    {
        add_options_page(
            'AI Team Bio', // page_title
            'AI Team Bio', // menu_title
            'manage_options', // capability
            'ai-team-bio', // menu_slug
            array($this, 'aiTeamBioCreateAdminPage') // function
        );
    }
    public function aiTeamBioCreateAdminPage()
    {
        $this->ai_team_bio_options = get_option('ai_team_bio_option_name'); ?>
        <div class="wrap">
            <h2>AI Team Bio</h2>
            <p></p>
            <?php settings_errors(); ?>
            <form method="post" action="options.php">
                <?php
                settings_fields('ai_team_bio_option_group');
                do_settings_sections('ai-team-bio-admin');
                submit_button();
                ?>
            </form>
        </div>
<?php }
    public function aiTeamBioPageInit()
    {
        register_setting(
            'ai_team_bio_option_group', // option_group
            'ai_team_bio_option_name', // option_name
            array($this, 'aiTeamBioSanitize') // sanitize_callback
        );
        add_settings_section(
            'ai_team_bio_setting_section', // id
            'Settings', // title
            array($this, 'aiTeamBioSectionInfo'), // callback
            'ai-team-bio-admin' // page
        );
        add_settings_field(
            'chatgpt_api_key_0', // id
            'ChatGPT Api Key', // title
            array($this, 'chatgptApiKeyCallback'), // callback
            'ai-team-bio-admin', // page
            'ai_team_bio_setting_section' // section
        );
    }
    public function aiTeamBioSanitize($input)
    {
        $sanitary_values = array();
        if (isset($input['chatgpt_api_key_0'])) {
            $sanitary_values['chatgpt_api_key_0'] = sanitize_text_field($input['chatgpt_api_key_0']);

            // $headers = array(
            //     'Content-Type: application/json',
            //     'Authorization: Bearer ' . $sanitary_values['chatgpt_api_key_0'],
            // );
            // $fields = array(
            //     'model' => 'text-davinci-003',
            //     'messages' => ['{"message":"Say this is a test!"}'],
            //     "temperature" => '0.7'
            // );
            // $ch = curl_init();
            // curl_setopt($ch, CURLOPT_URL, "https://api.openai.com/v1/chat/completions");
            // curl_setopt($ch, CURLOPT_POST, true);
            // curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
            // curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));
            // $result = curl_exec($ch);
            // curl_close($ch);
            // $result = json_decode($result);
            // var_dump($result);
            // die();
        }
        return $sanitary_values;
    }
    public function aiTeamBioSectionInfo()
    {
    }
    public function chatgptApiKeyCallback()
    {
        printf(
            '<input class="regular-text" type="text" name="ai_team_bio_option_name[chatgpt_api_key_0]" id="chatgpt_api_key_0" value="%s">',
            isset($this->ai_team_bio_options['chatgpt_api_key_0']) ? esc_attr($this->ai_team_bio_options['chatgpt_api_key_0']) : ''
        );
    }
}
if (is_admin()) {
    $ai_team_bio = new AITeamBioOption();
}
