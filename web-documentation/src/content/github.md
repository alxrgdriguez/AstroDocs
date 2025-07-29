# GitHub - Comandos Git Esenciales 🚀

Colección completa de comandos Git y GitHub para control de versiones y colaboración.

## Configuración Inicial

### Configuración Global

Configurar nombre de usuario:

```bash
git config --global user.name "Tu Nombre"
```

Configurar email:

```bash
git config --global user.email "tu@email.com"
```

Ver configuración actual:

```bash
git config --list
```

Configurar editor por defecto:

```bash
git config --global core.editor "code --wait"
```

Configurar herramienta de merge:

```bash
git config --global merge.tool vimdiff
```

## Repositorios

### Crear y Clonar

Inicializar repositorio local:

```bash
git init
```

Clonar repositorio remoto:

```bash
git clone https://github.com/usuario/repositorio.git
```

Clonar con nombre específico:

```bash
git clone https://github.com/usuario/repositorio.git mi-proyecto
```

Clonar solo la rama principal:

```bash
git clone --single-branch --branch main https://github.com/usuario/repositorio.git
```

Clonar con profundidad limitada:

```bash
git clone --depth 1 https://github.com/usuario/repositorio.git
```

## Gestión de Archivos

### Staging y Commits

Ver estado del repositorio:

```bash
git status
```

Ver estado resumido:

```bash
git status -s
```

Añadir archivo al staging:

```bash
git add archivo.txt
```

Añadir todos los archivos:

```bash
git add .
```

Añadir archivos por patrón:

```bash
git add "*.js"
```

Añadir interactivamente:

```bash
git add -i
```

Añadir por parches:

```bash
git add -p
```

Hacer commit:

```bash
git commit -m "Mensaje del commit"
```

Commit con descripción detallada:

```bash
git commit -m "Título" -m "Descripción detallada del cambio"
```

Commit añadiendo archivos modificados:

```bash
git commit -am "Mensaje del commit"
```

Modificar último commit:

```bash
git commit --amend -m "Nuevo mensaje"
```

## Historial y Logs

### Ver Historial

Ver historial de commits:

```bash
git log
```

Ver historial resumido:

```bash
git log --oneline
```

Ver historial con gráfico:

```bash
git log --graph --oneline --all
```

Ver historial de un archivo:

```bash
git log archivo.txt
```

Ver cambios en commits:

```bash
git log -p
```

Ver estadísticas de commits:

```bash
git log --stat
```

Ver commits por autor:

```bash
git log --author="Nombre"
```

Ver commits por fecha:

```bash
git log --since="2023-01-01" --until="2023-12-31"
```

Ver diferencias:

```bash
git diff
```

Ver diferencias en staging:

```bash
git diff --staged
```

Ver diferencias entre commits:

```bash
git diff commit1 commit2
```

## Ramas (Branches)

### Gestión de Ramas

Listar ramas locales:

```bash
git branch
```

Listar todas las ramas:

```bash
git branch -a
```

Crear nueva rama:

```bash
git branch nueva-rama
```

Crear y cambiar a nueva rama:

```bash
git checkout -b nueva-rama
```

Cambiar a rama existente:

```bash
git checkout nombre-rama
```

Cambiar a rama (Git 2.23+):

```bash
git switch nombre-rama
```

Crear y cambiar a rama (Git 2.23+):

```bash
git switch -c nueva-rama
```

Eliminar rama local:

```bash
git branch -d nombre-rama
```

Eliminar rama forzadamente:

```bash
git branch -D nombre-rama
```

Renombrar rama actual:

```bash
git branch -m nuevo-nombre
```

## Repositorios Remotos

### Gestión de Remotos

Ver repositorios remotos:

```bash
git remote -v
```

Añadir repositorio remoto:

```bash
git remote add origin https://github.com/usuario/repositorio.git
```

Cambiar URL del remoto:

```bash
git remote set-url origin https://github.com/usuario/nuevo-repositorio.git
```

Eliminar repositorio remoto:

```bash
git remote remove origin
```

Obtener cambios del remoto:

```bash
git fetch origin
```

Obtener y fusionar cambios:

```bash
git pull origin main
```

Subir cambios al remoto:

```bash
git push origin main
```

Subir nueva rama:

```bash
git push -u origin nueva-rama
```

Subir todas las ramas:

```bash
git push --all origin
```

Eliminar rama remota:

```bash
git push origin --delete nombre-rama
```

## Fusión y Rebase

### Merge

Fusionar rama en la actual:

```bash
git merge nombre-rama
```

Fusión sin fast-forward:

```bash
git merge --no-ff nombre-rama
```

Abortar fusión:

```bash
git merge --abort
```

### Rebase

Rebase interactivo:

```bash
git rebase -i HEAD~3
```

Rebase sobre otra rama:

```bash
git rebase main
```

Continuar rebase después de resolver conflictos:

```bash
git rebase --continue
```

Abortar rebase:

```bash
git rebase --abort
```

## Etiquetas (Tags)

### Gestión de Tags

Listar etiquetas:

```bash
git tag
```

Crear etiqueta ligera:

```bash
git tag v1.0.0
```

Crear etiqueta anotada:

```bash
git tag -a v1.0.0 -m "Versión 1.0.0"
```

Crear etiqueta en commit específico:

```bash
git tag -a v1.0.0 commit-hash -m "Versión 1.0.0"
```

Ver información de etiqueta:

```bash
git show v1.0.0
```

Subir etiqueta al remoto:

```bash
git push origin v1.0.0
```

Subir todas las etiquetas:

```bash
git push origin --tags
```

Eliminar etiqueta local:

```bash
git tag -d v1.0.0
```

Eliminar etiqueta remota:

```bash
git push origin --delete v1.0.0
```

## Stash

### Guardar Trabajo Temporal

Guardar cambios en stash:

```bash
git stash
```

Guardar con mensaje:

```bash
git stash save "Trabajo en progreso"
```

Listar stashes:

```bash
git stash list
```

Aplicar último stash:

```bash
git stash apply
```

Aplicar stash específico:

```bash
git stash apply stash@{2}
```

Aplicar y eliminar stash:

```bash
git stash pop
```

Ver contenido del stash:

```bash
git stash show -p
```

Eliminar stash:

```bash
git stash drop stash@{0}
```

Limpiar todos los stashes:

```bash
git stash clear
```

## Deshacer Cambios

### Reset y Revert

Deshacer cambios en archivo:

```bash
git checkout -- archivo.txt
```

Restaurar archivo (Git 2.23+):

```bash
git restore archivo.txt
```

Quitar archivo del staging:

```bash
git reset HEAD archivo.txt
```

Quitar del staging (Git 2.23+):

```bash
git restore --staged archivo.txt
```

Reset suave (mantiene cambios):

```bash
git reset --soft HEAD~1
```

Reset mixto (por defecto):

```bash
git reset HEAD~1
```

Reset duro (elimina cambios):

```bash
git reset --hard HEAD~1
```

Revertir commit:

```bash
git revert commit-hash
```

## GitHub CLI

### Comandos gh

Autenticarse:

```bash
gh auth login
```

Clonar repositorio:

```bash
gh repo clone usuario/repositorio
```

Crear repositorio:

```bash
gh repo create mi-proyecto --public
```

Ver issues:

```bash
gh issue list
```

Crear issue:

```bash
gh issue create --title "Bug encontrado" --body "Descripción del bug"
```

Ver pull requests:

```bash
gh pr list
```

Crear pull request:

```bash
gh pr create --title "Nueva funcionalidad" --body "Descripción de los cambios"
```

Ver estado de checks:

```bash
gh pr checks
```

Hacer merge de PR:

```bash
gh pr merge 123
```

## Workflows y Actions

### GitHub Actions

Ver workflows:

```bash
gh workflow list
```

Ejecutar workflow:

```bash
gh workflow run ci.yml
```

Ver ejecuciones:

```bash
gh run list
```

Ver logs de ejecución:

```bash
gh run view 123456789
```

Descargar artefactos:

```bash
gh run download 123456789
```

## Colaboración

### Fork y Pull Requests

Hacer fork de repositorio:

```bash
gh repo fork usuario/repositorio
```

Añadir upstream:

```bash
git remote add upstream https://github.com/usuario-original/repositorio.git
```

Sincronizar fork:

```bash
git fetch upstream
git checkout main
git merge upstream/main
```

Crear rama para feature:

```bash
git checkout -b feature/nueva-funcionalidad
```

Subir rama y crear PR:

```bash
git push -u origin feature/nueva-funcionalidad
gh pr create
```

## Configuración Avanzada

### Alias Útiles

Configurar alias para log:

```bash
git config --global alias.lg "log --oneline --graph --all"
```

Alias para status:

```bash
git config --global alias.st "status -s"
```

Alias para commit:

```bash
git config --global alias.cm "commit -m"
```

Alias para checkout:

```bash
git config --global alias.co "checkout"
```

Alias para branch:

```bash
git config --global alias.br "branch"
```

### Configuración SSH

Generar clave SSH:

```bash
ssh-keygen -t ed25519 -C "tu@email.com"
```

Añadir clave al agente SSH:

```bash
ssh-add ~/.ssh/id_ed25519
```

Probar conexión SSH:

```bash
ssh -T git@github.com
```

## Gitignore

### Patrones Comunes

Ignorar archivos por extensión:

```gitignore
*.log
*.tmp
*.cache
```

Ignorar directorios:

```gitignore
node_modules/
dist/
build/
```

Ignorar archivos específicos:

```gitignore
.env
config.local.js
```

Excepciones:

```gitignore
*.log
!important.log
```

## Hooks

### Git Hooks Útiles

Pre-commit hook para linting:

```bash
#!/bin/sh
npm run lint
```

Pre-push hook para tests:

```bash
#!/bin/sh
npm test
```

Commit-msg hook para formato:

```bash
#!/bin/sh
# Verificar formato de mensaje de commit
```

## Resolución de Conflictos

### Merge Conflicts

Ver archivos con conflictos:

```bash
git status
```

Abrir herramienta de merge:

```bash
git mergetool
```

Marcar conflicto como resuelto:

```bash
git add archivo-resuelto.txt
```

Continuar merge:

```bash
git commit
```

## Comandos de Mantenimiento

### Limpieza y Optimización

Limpiar archivos no rastreados:

```bash
git clean -f
```

Limpiar directorios no rastreados:

```bash
git clean -fd
```

Optimizar repositorio:

```bash
git gc
```

Verificar integridad:

```bash
git fsck
```

Ver tamaño del repositorio:

```bash
git count-objects -vH
```

Comprimir base de datos:

```bash
git repack -ad
```
