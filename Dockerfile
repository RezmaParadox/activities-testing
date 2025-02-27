# Usar una imagen base ligera de Ubuntu
FROM ubuntu:22.04

# Instalar dependencias mínimas necesarias
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    gnupg \
    ca-certificates \
    fonts-liberation \
    libappindicator3-1 \
    libasound2 \
    libgdk-pixbuf2.0-0 \
    libnspr4 \
    libnss3 \
    xdg-utils \
    # Agregar el repositorio de Google Chrome
    && wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | tee /etc/apt/trusted.gpg.d/google.asc \
    && echo "deb [signed-by=/etc/apt/trusted.gpg.d/google.asc] https://dl.google.com/linux/chrome/deb/ stable main" | tee /etc/apt/sources.list.d/google-chrome.list \
    && apt-get update && apt-get install -y --no-install-recommends \
    google-chrome-stable \
    && rm -rf /var/lib/apt/lists/*

# Instalar chromedriver
RUN CHROME_VERSION=$(google-chrome --version | awk '{print $3}' | cut -d '.' -f 1) && \
    CHROMEDRIVER_VERSION=$(wget -qO- https://chromedriver.storage.googleapis.com/LATEST_RELEASE_${CHROME_VERSION}) && \
    wget -q -O /tmp/chromedriver.zip https://chromedriver.storage.googleapis.com/${CHROMEDRIVER_VERSION}/chromedriver_linux64.zip && \
    unzip /tmp/chromedriver.zip -d /usr/local/bin/ && \
    rm /tmp/chromedriver.zip && \
    chmod +x /usr/local/bin/chromedriver

# Instalar Node.js y npm (versión 18)
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar solo package.json y package-lock.json para aprovechar la caché de Docker
COPY package.json package-lock.json ./

# Instalar dependencias de Angular
RUN npm install -g @angular/cli

# Copiar el resto del proyecto
COPY . .

# Exponer el puerto de Angular
EXPOSE 4200
