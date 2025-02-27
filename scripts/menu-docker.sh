#!/bin/bash
# --------------------------------------------------
# Script: menu-docker.sh
# Descripción: Crea y ejecuta un contenedor con la aplicación Angular.
# Uso: ./menu-docker.sh
# --------------------------------------------------

# Paso 1: Construir la imagen de Docker sin usar la caché
docker build --no-cache -t test-angular ../

# Paso 2: Ejecutar el contenedor en segundo plano
docker run -it -p 4200:4200 --name test-angular test-angular

# Salir del contenedor
exit
sleep 5

# Iniciar el contenedor
docker start test-angular

# Paso 3: Ejecutar el script 'menu.sh' dentro del contenedor
docker exec  -it test-angular bash -c "

  #Acceder a la carpeta scripts
  cd /scripts

  # Asegurarse de que el script 'menu.sh' tiene permisos de ejecución
  chmod +x menu.sh

  #Convertir Formato
  dos2unix menu.sh

  # Ejecutar el script 'menu.sh'
  echo 'Abriendo el script de menu...'
  ./menu.sh
"

