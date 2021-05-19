# Server
El servidor por defecto iniciara en el puerto 4000. La base de datos está alojada en la página [remotemysql](https://remotemysql.com/) así que no es necesario tener instalado MySql ni es necesario configurar nada respecto a este.

## Rutas
Esta API consta de respuestas a las siguientes rutas

---
### Rutas del usuario
#### POST: /user/register
La ruta encargada de registrar un usuario. Una vez que la información del usuario pasa la validación se verifica que este usuario no exista en la base de datos, y de no ser asi, queda registrado.
#### POST: /user/login
La ruta encargada de iniciar la sesión del usuario. Si el usuario está registrado y la informacion es correcta, se response con un token para identificarlo.
#### GET: /user/whoami
Esta ruta responde con cierta información del usuario siempre y cuando en la petición exista un token valido  

---
### Rutas de los presupuestos
#### POST: /budget
Esta ruta se encarga de registrar el presupuesto asociado al usuario que hace la petición una vez que se verifica que el token es válido y la información es validada.

#### GET: /budget
Esta ruta response con todos los presupuestos del usuario.

#### PUT: /budget/edit/:id
Ruta para editar un presupuesto

#### DELETE: /budget/delete/:id
Ruta para eliminar un presupuesto
