# Migrar Bitbucket para GitHub
## Empurrar todas as branchs

---------------------------------------------------------------------------------
## Faça um clone espelhado do repositório
git clone --mirror https://bitbucket.org/exampleuser/repository-to-mirror.git

## Navegue para dentro do diretório
cd repository-to-mirror.git

### Defina o local de envio para o seu espelho
git remote set-url --push origin https://github.com/exampleuser/mirrored

## Depois envia repositório para o remoto
git push --mirror

---------------------------------------------------------------------------------
# Visualizar e alterar usuários do git

## Define um novo nome
git config --global user.name "My Name"

## Define um novo e-mail
git config --global user.email "myemail@example.com"

---------------------------------------------------------------------------------
# Para excluir um branch local, você pode usar um dos seguintes comandos do Git:

#### A opção -d (–delete) vai remover o seu branch local se você já fez o push e o merge com o branch remoto.
git branch -d nome_do_branch

#### Já a opção -D  (–delete –force) vai remover a branch local independentemente de você ter feito os processos de push ou de merge com o branch remoto.
git branch -D nome_do_branch

### Deletar somente a branch remota
git branch -dr origin/login 

#### Você também pode remover um branch remoto ao especificar os nomes tanto do branch remoto quanto do local. Na maioria dos casos, o nome remoto é a origem, e o comando ficará assim:

git push nome_remoto --delete nome_do_branch
git push nome_remoto :nome_do_branch

---------------------------------------------------------------------------------
# Voltar a um commit específico

## Exibir todos os commits realizado

git log

### EX:   
        commit 3584df991c2d7b3c4457667ef68e69851bf31a47 (HEAD -> main, origin/main, origin/HEAD)
        Author: Rafael Vieira <rafaelvieirapalmital@outlook.com>
        Date:   Tue Dec 7 07:11:55 2021 -0300

            Adicionando Load-2 e style.css no shortcode de video

## Escolher o commit que deseja voltar

git reset --hard 3584df991c2d7b3c4457667ef68e69851bf31a47

---------------------------------------------------------------------------------

# Desconectar o repositório remoto

## Apenas desconectar
git remote remove origin

## Selecionar outro repositório remoto
git remote set-url origin git://new.url.here

---------------------------------------------------------------------------------

# Conectar github via ssh

## Verificar se tem chaves públicas no seu PC - Se estiver usando windons abra o terminal Git Bash
ls -l ~/.ssh

## Se não houver nenhuma chave digite esse comando para gerar uma
ssh-keygen -t rsa -C "descricaoDaChave"

## Navegue até o diretório das chaves
cd ~/.ssh

## Abra o diretório com uma ide de sua preferência - No meu caso vai ser o vs code
code .

## Copie a sua chave  que tiver o .pub no final

## Vá até o git hub em adicionar chave ssh, e cole essa chave

## Verificar se a chave foi adicionada corretamente
ssh -T git@github.com

## Se no terminal aparecer seu nome de usuário a chave foi configurada com sucesso

# em seguida deve adicionar a sua chave ao SSH-Agent

## Caso não estiver usando um sistema operacional baseado em linux e no git bash digite o seguinte comando, caso contrário pode passar para o póximo
eval "$(ssh-agent -s)"

## Se algo parecido com isso for mostrado seu agente estará funcionando corretamente
### Agent pis 1234

## Assim q o SSH-Agent estiver em execução digite:
ssh-add ~/.ssh/nomeDaSuaChavePrivada

## Se algo parecido for exibido, então está tudo certo
### Identity added: /Users/convidado/.ssh/

---------------------------------------------------------------------------------

# Remover arquivos do rastreio do git

git rm --cached NOME_DO_ARQUIVO