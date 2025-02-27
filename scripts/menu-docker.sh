#!/bin/bash
# --------------------------------------------------
# Script: menu-docker.sh
# Descripción: Crea y ejecuta un contenedor con la aplicación Angular.
# Uso: ./menu-docker.sh
# --------------------------------------------------

# Paso 1: Construir la imagen de Docker sin usar la caché
docker build --no-cache -t test-angular .

# Paso 2: Ejecutar el contenedor en segundo plano
docker run -d -p 4200:4200 --name test-angular test-angular

# Paso 3: Ejecutar el script 'menu.sh' dentro del contenedor
docker exec -it test-angular bash -c "
  # Asegurarse de que el script 'menu.sh' tiene permisos de ejecución
  chmod +x /app/scripts/menu.sh

  # Ejecutar el script 'menu.sh'
  echo 'Abriendo el script de menu...'
  bash /app/scripts/menu.sh
"

