base: Referencia a url que será utilizada para montar a paginação. Está vendo esse número grande (999999999) no str_replace()? Mantenha assim, pois, caso utilize um número que possa aparecer na url do seu site, você certamente terá problemas. Por exemplo, informando somente um 9, e se por acaso seu site for o 9gag, nos links gerados para cada item da paginação o 9 será substituído pelo número da página. Você passará a ter o 1gag, 2gag, 3gag, [n]gag;
format: Define o formato do parâmetro de paginação;
current: Número da página atualmente em exibição;
total: A quantidade total de páginas na query atual. Perceba que nesse parâmetro está sendo utilizada a global $wp_query.


type: Define o tipo de retorno que a função terá, uma lista não ordenada (ul), uma string simples com os links, ou um array para ser tratado pelo desenvolvedor. Esse paramêtro nos dá bastante flexibilidade em relação à marcação html possível de ser gerada.
prev_next: Deseja exibir os botões de próxima página e página anterior?
prev_text e next_text: É possível definir o texto, ou html, dos botões de próxima página e página anterior.
before_page_number e after_page_number: Mais uma possibilidade bacana de personalização do html gerado, podendo inserir alguma coisa antes e depois de cada número na paginação.
mid_size: Quantos links serão exibidos de cada lado da página atual.
end_size: Quantos links serão exibidos ao lado da primeira página e da última página.
show_all: Aqui controlamos se desejamos sempre exibir os links de todas as páginas ou se consideramos o que foi definido em mid_size e end_size para a quantidade de links exibidos.