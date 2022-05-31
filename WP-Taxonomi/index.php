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
        'search_items' =>__( 'Pesquisar TopicC' ),
        'all_items' =>__( 'Todos os TopicC' ),
        'parent_item' =>__( 'TopicC pai' ),
        'parent_item_colon' =>__( 'TopicC pai:' ),
        'edit_item' =>__( 'Editar TopicC' ),
        'update_item' =>__( 'Atualizar TopicC' ),
        'add_new_item' =>__( 'Adicionar Novo TopicC' ),
        'new_item_name' =>__( 'Novo Nome TopicC' ),
        'menu_name' =>__( 'TopicsC' ),
 );  

    // Agora registre a taxonomia
    register_taxonomy('topics',array('post'), array(
        'hierarchical' =>true,
        'labels' =>$labels,
        'show_ui' =>true,
        'show_admin_column' =>true,
        'query_var' =>true,
        'rewrite' =>array( 'slug' => 'topicC' ),
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
        'add_new_item' =>__( 'Adicionar Novo Topic' ),
        'new_item_name' =>__( 'Novo Nome Topic' ),
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