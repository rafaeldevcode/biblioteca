<?php 
/*
Plugin Name: My Custom Post Typs Scroll
Desccription: Add post typs for Scroll
Author: Rafael Vieira
*/

add_action('init', 'lc_custom_post_scroll');

// Função para registrar meu tipo de post
function lc_custom_post_scroll(){

    // Define os rótulos, esta variavel e usada no array $args 
    $labels = array(
        'name'               => __( 'Scroll' ),
        'singular_name'      => __( 'Scrolls' ),
        'add_new'            => __( 'Add New Scroll' ),
        'add_new_item'       => __( 'Add New Scroll' ),
        'edit_item'          => __( 'Edit Scroll' ),
        'new_item'           => __( 'New v' ),
        'all_items'          => __( 'All Scroll' ),
        'view_item'          => __( 'View Scroll' ),
        'search_items'       => __( 'Search Scroll' ),
        'featured_image'     => 'Poster',
        'set_featured_image' => 'Add Poster'
    );


    // Os argumentos para o nosso tipo de postagem, a serem inseridos como parâmetro 2 de regyster_post_type()
    $args = array(
        'labels'            => $labels,
        'description'       => 'Holds our movies and movie specific data',
        'public'            => true,
        'menu_position'     => 5,
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
    register_post_type('scroll', $args);

}