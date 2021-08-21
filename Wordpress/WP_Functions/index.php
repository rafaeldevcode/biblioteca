<?php 
// Plugin para adicionar um post type personalizado
/*
Plugin Name: My Custom Post Typs Temp
Desccription: Adicionar posts para Temp
Author: Rafael Vieira
*/

add_action('init', 'lc_custom_post_temp');

// Função para registrar meu tipo de post
function lc_custom_post_temp(){

    // Define os rótulos, esta variavel e usada no array $args 
    $labels = array(
        'name'               => __( 'Temp' ),
        'singular_name'      => __( 'Temps' ),
        'add_new'            => __( 'Add New Temp' ),
        'add_new_item'       => __( 'Add New Temp' ),
        'edit_item'          => __( 'Edit Temp' ),
        'new_item'           => __( 'New v' ),
        'all_items'          => __( 'All Temp' ),
        'view_item'          => __( 'View Temp' ),
        'search_items'       => __( 'Search Temp' ),
        'featured_image'     => 'Poster',
        'set_featured_image' => 'Add Poster'
    );


    // Os argumentos para o nosso tipo de postagem, a serem inseridos como parâmetro 2 de regyster_post_type()
    $args = array(
        'labels'            => $labels,
        'description'       => 'Holds our movies and movie specific data',
        'public'            => true,
        'menu_position'     => 4,
        'supports'          => array( 'title', 'editor', 'thumbnail', 'excerpt', 'comments', 'custom-fields' ),
        'has_archive'       => true,
        'show_in_admin_bar' => true,
        'show_in_nav_menus' => true,
        'has_archive'       => true,
        'query_var'         => 'film'
    );


    // Chame a função real do WordPress
    // Parâmetro 1 é um nome para o tipo de postagem
    // O parâmetro 2 é o array $ args
    register_post_type('Temp', $args);

}

// Adiconar classe ao body de acordo com a categoria
function category_id_class($classes) {
    global $post;
    foreach((get_the_category($post->ID)) as $single)
        $classes[] = $single->category_nicename;
    return $classes;
}
 
add_filter('body_class', 'category_id_class');