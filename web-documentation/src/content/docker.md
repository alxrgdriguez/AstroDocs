# Docker - Comandos Esenciales 🐳

Colección completa de comandos Docker para desarrollo y producción.

## Gestión de Contenedores

### Comandos Básicos

Listar todos los contenedores activos:

```bash
docker ps
```

Listar todos los contenedores (incluyendo detenidos):

```bash
docker ps -a
```

Crear y ejecutar un contenedor:

```bash
docker run -d --name mi-contenedor nginx:latest
```

Detener un contenedor:

```bash
docker stop mi-contenedor
```

Iniciar un contenedor detenido:

```bash
docker start mi-contenedor
```

Reiniciar un contenedor:

```bash
docker restart mi-contenedor
```

Eliminar un contenedor:

```bash
docker rm mi-contenedor
```

Eliminar un contenedor en ejecución (forzado):

```bash
docker rm -f mi-contenedor
```

### Comandos Avanzados

Ejecutar comando en contenedor en ejecución:

```bash
docker exec -it mi-contenedor bash
```

Ver logs de un contenedor:

```bash
docker logs mi-contenedor
```

Ver logs en tiempo real:

```bash
docker logs -f mi-contenedor
```

Inspeccionar un contenedor:

```bash
docker inspect mi-contenedor
```

Ver estadísticas de recursos:

```bash
docker stats mi-contenedor
```

## Gestión de Imágenes

### Comandos de Imágenes

Listar todas las imágenes:

```bash
docker images
```

Descargar una imagen:

```bash
docker pull nginx:latest
```

Construir una imagen desde Dockerfile:

```bash
docker build -t mi-app:v1.0 .
```

Construir con argumentos:

```bash
docker build --build-arg NODE_VERSION=18 -t mi-app:v1.0 .
```

Eliminar una imagen:

```bash
docker rmi nginx:latest
```

Eliminar imágenes no utilizadas:

```bash
docker image prune
```

Eliminar todas las imágenes no utilizadas:

```bash
docker image prune -a
```

Etiquetar una imagen:

```bash
docker tag mi-app:v1.0 mi-app:latest
```

## Docker Compose

### Comandos de Compose

Iniciar servicios en segundo plano:

```bash
docker-compose up -d
```

Iniciar servicios con rebuild:

```bash
docker-compose up --build
```

Detener servicios:

```bash
docker-compose down
```

Detener y eliminar volúmenes:

```bash
docker-compose down -v
```

Ver logs de todos los servicios:

```bash
docker-compose logs
```

Ver logs de un servicio específico:

```bash
docker-compose logs web
```

Escalar un servicio:

```bash
docker-compose up -d --scale web=3
```

Ejecutar comando en servicio:

```bash
docker-compose exec web bash
```

## Gestión de Volúmenes

### Comandos de Volúmenes

Listar volúmenes:

```bash
docker volume ls
```

Crear un volumen:

```bash
docker volume create mi-volumen
```

Inspeccionar un volumen:

```bash
docker volume inspect mi-volumen
```

Eliminar un volumen:

```bash
docker volume rm mi-volumen
```

Eliminar volúmenes no utilizados:

```bash
docker volume prune
```

Montar volumen en contenedor:

```bash
docker run -v mi-volumen:/data nginx:latest
```

Montar directorio del host:

```bash
docker run -v /host/path:/container/path nginx:latest
```

## Gestión de Redes

### Comandos de Red

Listar redes:

```bash
docker network ls
```

Crear una red:

```bash
docker network create mi-red
```

Inspeccionar una red:

```bash
docker network inspect mi-red
```

Conectar contenedor a red:

```bash
docker network connect mi-red mi-contenedor
```

Desconectar contenedor de red:

```bash
docker network disconnect mi-red mi-contenedor
```

Eliminar una red:

```bash
docker network rm mi-red
```

## Limpieza del Sistema

### Comandos de Limpieza

Eliminar contenedores detenidos:

```bash
docker container prune
```

Eliminar imágenes no utilizadas:

```bash
docker image prune
```

Eliminar volúmenes no utilizados:

```bash
docker volume prune
```

Eliminar redes no utilizadas:

```bash
docker network prune
```

Limpieza completa del sistema:

```bash
docker system prune
```

Limpieza completa incluyendo volúmenes:

```bash
docker system prune -a --volumes
```

Ver uso de espacio en disco:

```bash
docker system df
```

## Registry y Repositorios

### Comandos de Registry

Hacer login en Docker Hub:

```bash
docker login
```

Hacer login en registry privado:

```bash
docker login mi-registry.com
```

Subir imagen a registry:

```bash
docker push mi-usuario/mi-app:v1.0
```

Hacer logout:

```bash
docker logout
```

Buscar imágenes en Docker Hub:

```bash
docker search nginx
```

## Dockerfile - Mejores Prácticas

### Ejemplo de Dockerfile Optimizado

```dockerfile
# Usar imagen base oficial
FROM node:18-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci --only=production

# Copiar código fuente
COPY . .

# Crear usuario no-root
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Cambiar propietario de archivos
RUN chown -R nextjs:nodejs /app
USER nextjs

# Exponer puerto
EXPOSE 3000

# Comando por defecto
CMD ["npm", "start"]
```

## Docker Swarm

### Comandos de Swarm

Inicializar swarm:

```bash
docker swarm init
```

Unirse a swarm como worker:

```bash
docker swarm join --token TOKEN IP:PORT
```

Listar nodos del swarm:

```bash
docker node ls
```

Crear un servicio:

```bash
docker service create --name web --replicas 3 nginx:latest
```

Listar servicios:

```bash
docker service ls
```

Escalar servicio:

```bash
docker service scale web=5
```

Ver logs de servicio:

```bash
docker service logs web
```

Actualizar servicio:

```bash
docker service update --image nginx:1.20 web
```

## Monitoreo y Debugging

### Comandos de Monitoreo

Ver procesos en contenedor:

```bash
docker top mi-contenedor
```

Ver cambios en filesystem:

```bash
docker diff mi-contenedor
```

Exportar contenedor como tar:

```bash
docker export mi-contenedor > contenedor.tar
```

Importar imagen desde tar:

```bash
docker import contenedor.tar mi-imagen:tag
```

Guardar imagen como tar:

```bash
docker save mi-imagen:tag > imagen.tar
```

Cargar imagen desde tar:

```bash
docker load < imagen.tar
```

## Variables de Entorno y Configuración

### Gestión de Variables

Ejecutar con variables de entorno:

```bash
docker run -e NODE_ENV=production -e PORT=3000 mi-app
```

Usar archivo de variables:

```bash
docker run --env-file .env mi-app
```

Ver variables de entorno de contenedor:

```bash
docker exec mi-contenedor env
```

## Consejos y Trucos

### Comandos Útiles

Copiar archivos desde/hacia contenedor:

```bash
docker cp mi-contenedor:/app/file.txt ./file.txt
```

Copiar hacia contenedor:

```bash
docker cp ./file.txt mi-contenedor:/app/
```

Crear contenedor sin iniciarlo:

```bash
docker create --name mi-contenedor nginx:latest
```

Pausar/despausar contenedor:

```bash
docker pause mi-contenedor
docker unpause mi-contenedor
```

Renombrar contenedor:

```bash
docker rename viejo-nombre nuevo-nombre
```

Actualizar configuración de contenedor:

```bash
docker update --memory 512m mi-contenedor
```

## Seguridad

### Comandos de Seguridad

Escanear imagen por vulnerabilidades:

```bash
docker scan mi-imagen:tag
```

Ejecutar contenedor como usuario específico:

```bash
docker run --user 1000:1000 mi-imagen
```

Ejecutar con capacidades limitadas:

```bash
docker run --cap-drop ALL --cap-add NET_BIND_SERVICE mi-imagen
```

Ejecutar en modo solo lectura:

```bash
docker run --read-only mi-imagen
```

Limitar recursos:

```bash
docker run --memory 512m --cpus 1.5 mi-imagen
```
