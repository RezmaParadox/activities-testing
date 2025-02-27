#!/bin/bash
# --------------------------------------------------
# Script: menu.sh
# Descripción: Un ejemplo de menú interactivo en Bash.
# Uso: ./menu.sh
# --------------------------------------------------

ANGULAR_PID=""

while true; do
    clear
    echo "Menú Principal"
    echo "1. Opción 1: Mensaje en python"
    echo "2. Opción 2: Lanzar Proyecto Angular"
    echo "3. Opción 3: Ejecutar Prueba Selenium"
    echo "4. Opción 4: Ejecutar Prueba Cucumber"
    echo "5. Opción 5: Detener el Proyecto Angular"
    echo "6. Salir"
    echo
    read -p "Elige una opción [1-6]: " opcion

    case $opcion in
        1)
            echo "Has seleccionado la Opción 1."
            python3 hello.py
            read -p "Presiona Enter para volver al menú..."
            ;;

        2)
            echo "Has seleccionado la Opción 2."

            # Verificar si el proyecto Angular ya está en ejecución
            if [ -n "$ANGULAR_PID" ] && ps -p $ANGULAR_PID > /dev/null; then
                echo "El proyecto Angular ya está en ejecución."
            else
                # Iniciar la aplicación Angular en segundo plano
                echo "Iniciando la aplicación Angular..."
                nohup npm run start > app.log 2>&1 &
                # Guardar el PID del proceso de Angular
                ANGULAR_PID=$!

                # Esperar un momento para que Angular se inicie
                sleep 10

                # Abrir el navegador en Windows
                echo "Abriendo el navegador en Windows..."
                start http://localhost:4200

                echo "Proyecto Angular iniciado. Puedes acceder en http://localhost:4200"
            fi

            read -p "Presiona Enter para volver al menú..."
            ;;

        3)
            echo "Has seleccionado la Opción 3."

            echo "Ejecutando pruebas de Selenium..."
            npm run test-selenium

            read -p "Presiona Enter para volver al menú..."
            ;;

        4)
            echo "Has seleccionado la Opción 4."

            echo "Ejecutando pruebas de Cucumber..."
            npm run test-cucumber

            read -p "Presiona Enter para volver al menú..."
            ;;

        5)
            echo "Has seleccionado la Opción 5."

            if [ -n "$ANGULAR_PID" ] && ps -p $ANGULAR_PID > /dev/null; then
                echo "Deteniendo la aplicación Angular..."
                pkill -P $ANGULAR_PID
                kill $ANGULAR_PID
                ANGULAR_PID=""
                echo "Proceso de Angular detenido."
            else
                echo "No hay ningún proyecto Angular en ejecución."
            fi

            read -p "Presiona Enter para volver al menú..."
            ;;

        6)
            echo "Saliendo..."
            exit 0
            ;;

        *)
            echo "Opción inválida, intenta de nuevo."
            read -p "Presiona Enter para continuar..."
            ;;
    esac
done
