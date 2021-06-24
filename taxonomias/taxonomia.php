<?php
// Funcao para adicionar no arquivo funcions.php

// Taxonomias de forma hierarquica "Categoria"
//conecte-se à ação init e chame create_book_taxonomies quando ela disparar

add_action( 'init', 'create_topics_hierarchical_taxonomy', 0 );

//crie uma taxonomia personalizada com o nome de tópicos para suas postagens
function create_topics_hierarchical_taxonomy() {
    // Adicionar nova taxonomia, torná-la hierárquica, como categorias
    // primeiro faça a parte das traduções para a GUI

    $labels = array(
        'name' =>_x( 'Topics', 'taxonomy general name' ),
        'singular_name' =>_x( 'Topic', 'taxonomy singular name' ),
        'search_items' =>__( 'Search Topics' ),
        'all_items' =>__( 'All Topics' ),
        'parent_item' =>__( 'Parent Topic' ),
        'parent_item_colon' =>__( 'Parent Topic:' ),
        'edit_item' =>__( 'Edit Topic' ),
        'update_item' =>__( 'Update Topic' ),
        'add_new_item' =>__( 'Add New Topic' ),
        'new_item_name' =>__( 'New Topic Name' ),
        'menu_name' =>__( 'Topics' ),
 );  

    // Agora registre a taxonomia
    register_taxonomy('topics',array('post'), array(
        'hierarchical' =>true,
        'labels' =>$labels,
        'show_ui' =>true,
        'show_admin_column' =>true,
        'query_var' =>true,
        'rewrite' =>array( 'slug' => 'topic' ),
 ));
}
?>



<?php
// Taxonomias de forma nao hierarquica "Tag"
// conecte-se à ação init e chame create_book_taxonomies quando ela disparar
add_action( 'init', 'create_topics_hierarchical_taxonomy', 0 );

// crie uma taxonomia personalizada com o nome de tópicos para suas postagens
function create_topics_hierarchical_taxonomy() {
    // Adicionar nova taxonomia, torná-la hierárquica, como categorias
    // primeiro faça a parte das traduções para a GUI

    $labels = array(
        'name' =>_x( 'Topics', 'taxonomy general name' ),
        'singular_name' =>_x( 'Topic', 'taxonomy singular name' ),
        'search_items' =>__( 'Pesquisar Topics' ),
        'all_items' =>__( 'Todos os Topics' ),
        'parent_item' =>__( 'Topic pai' ),
        'parent_item_colon' =>__( 'Topic Pai:' ),
        'edit_item' =>__( 'Ediatr Topic' ),
        'update_item' =>__( 'Atualizar Topic' ),
        'add_new_item' =>__( 'Adicionar novo Topic' ),
        'new_item_name' =>__( 'Novo nome Topic' ),
        'menu_name' =>__( 'Topics' ),
 );  

    // Agora registre a taxonomia
    register_taxonomy('topics',array('post'), array(
        'hierarchical' => true,
        'labels' => $labels,
        'show_ui' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array( 'slug' => 'topic' ),
 ));
}
?>

<?php
// Adicionar no arquivo single.php
the_terms( $post-ID, 'topics', 'Topics: ', ', ', ' ' );
?>