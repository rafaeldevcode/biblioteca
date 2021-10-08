#### Migrar Bitbucket para GitHub
## Empurrar todas as branchs

git clone --mirror https://bitbucket.org/exampleuser/repository-to-mirror.git
# Faça um clone espelhado do repositório

cd repository-to-mirror.git
git remote set-url --push origin https://github.com/exampleuser/mirrored
# Defina o local de envio para o seu espelho

git push --mirror
