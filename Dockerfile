# Usa una imagen base de Ubuntu o Debian
FROM ubuntu:latest

# Evita que las preguntas interrumpan la instalación
ARG DEBIAN_FRONTEND=noninteractive

# Actualiza los repositorios y luego instala los paquetes en una sola capa
RUN apt update && apt upgrade -y && \
    apt install -y nano curl wget gnupg2 git nodejs npm python3 dos2unix && \
    npm install -g @angular/cli && \
    apt clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Instalar chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list && \
    apt-get update && \
    apt-get install -y google-chrome-stable

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar solo package.json y package-lock.json para aprovechar la caché de Docker
COPY package.json package-lock.json ./

#Instalar dependencias de Node.js
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Exponer el puerto de Angular
EXPOSE 4200
