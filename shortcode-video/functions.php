<?php
// Plugin Shortcode Para Inserir Iframe do Vimeo e Youtube
function register_button( $buttons ) {
	array_push( $buttons, "|", "add_video_button" );
	return $buttons;
 }
 
 function add_plugin( $plugin_array ) {
	$plugin_array['add_video_button'] = get_template_directory_uri() . '/shortcode/custom-shortcodes-video.js';
	return $plugin_array;
 }
 
 function my_video_button() {
 
	if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') ) {
	   return;
	}
 
	if ( get_user_option('rich_editing') == 'true' ) {
	   add_filter( 'mce_external_plugins', 'add_plugin' );
	   add_filter( 'mce_buttons', 'register_button' );
	}
 
 }

 // VIMEO
function add_video_vimeo( $atts = array(), $content = null ) {
	extract(shortcode_atts(array(
	 'id' => '#',
	 'lang' => '',
	), $atts));
 
	return '<div></div><div class="video"><div class="top"></div><iframe src="https://player.vimeo.com/video/'. $id . '?badge=0&autopause=0&player_id=0&app_id=58479" 
	frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><div class="botton"></div>
	<span>'. $lang .'<span></div>';
 }
 
 // YOUTUBE
function add_video_youtube($atts, $content = null) {
    extract(shortcode_atts(array(
       'id' => '#',
	   'lang' => '',
    ), $atts));
 
    return '<div></div><div class="video"><div class="top"></div><iframe src="https://www.youtube.com/embed/'. $id . '?autoplay=1" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><div class="botton"></div>
	<span>'. $lang .'<span></div>';
 }

 add_action('init', 'my_video_button');
 add_shortcode('vimeo', 'add_video_vimeo');
 add_shortcode('youtube', 'add_video_youtube');
?>

<!-- No arquivo functions.php inserir -->
<!-- require get_template_directory(). '/shortcode-video/custom-shortcodes-video.php'; -->