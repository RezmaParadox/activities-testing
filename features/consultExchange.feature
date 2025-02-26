Feature: Precio de Cambio
Como consultar el precio de cambio
Scenario: Otener el precio de cambio
  Given Abrir la aplicación en la ventana de intercambio de divisas
  When Seleccionar la divisa de origen "USD"
  And Seleccionar la divisa de destino "MXN"
  Then Obtener el precio de cambio
