#### Migrar Bitbucket para GitHub
## Empurrar todas as branchs

git clone --mirror https://bitbucket.org/exampleuser/repository-to-mirror.git
# Faça um clone espelhado do repositório

cd repository-to-mirror.git
git remote set-url --push origin https://github.com/exampleuser/mirrored
# Defina o local de envio para o seu espelho

git push --mirror

#### Visualizar e alterar usuários do git

git config --global user.name "My Name"
# Define um novo nome

git config --global user.email "myemail@example.com"
# Define um novo e-mail

Para excluir um branch local, você pode usar um dos seguintes comandos do Git:

git branch -d nome_do_branch
git branch -D nome_do_branch
A opção -d (–delete) vai remover o seu branch local se você já fez o push e o merge com o branch remoto.

Já a opção -D  (–delete –force) vai remover a branch local independentemente de você ter feito os processos de push ou de merge com o branch remoto.

Você também pode remover um branch remoto ao especificar os nomes tanto do branch remoto quanto do local. Na maioria dos casos, o nome remoto é a origem, e o comando ficará assim:

git push nome_remoto --delete nome_do_branch
git push nome_remoto :nome_do_branch
