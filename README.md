# Rutas hijas con otras rutas hijas

## A TENER EN CUENTA
* Chequear que el `RouterModule` tenga a continuación su `.forChild(routes)` en los IMPORTS de cada `X-routing.module.ts`, de lo contrario, Angular jamás va a adivinar cuáles son las rutas que debe usar. *MUCHO OJO CON ESTO* (para luego no andar con dolores de cabeza ya que es fácil que se pase por alto porque casi ni te avisa que es un "error").

## NOTAS
+ Omití instalar el Angular Material ya que esto es tema del Angular propio. No usé ningúna herramienta para los estilos porque no ví necesario utilizarlos, es algo sencillo para demostrar sólo funcionamiento.
+ Dejé notas en distintos lugares (archivos HTML) como tips o notas.
