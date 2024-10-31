const usuario = require('../components/usuario/interface')
/**
 * @swagger
 * tags:
 *   name: usuario
 *   description: Operaciones Usuario
 */

/**
 * @swagger
 * /usuario:
 *   post:
 *     tags: [Registra Usuarios]
 *     summary: Inserta un nuevo usuario
 *     description: Crea un nuevo usuario en la base de datos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Sandra"
 *               apellido:
 *                 type: string
 *                 example: "Abril"
 *     responses:
 *       200:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Usuario creado exitosamente"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "60d0fe4f5311236168a109ca"
 *                     nombre:
 *                       type: string
 *                       example: "Sandra"
 *                     apellido:
 *                       type: string
 *                       example: "Abril"
 *                     fecha_registro:
 *                       type: string
 *                       format: date-time
 *                       example: "2023-10-29T12:34:56Z"
 *                     fecha_actualizacion:
 *                       type: string
 *                       format: date-time
 *                       example: "2023-10-29T12:34:56Z"
 *       400:
 *         description: Error al crear el usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Error al crear el usuario: campo requerido"
 */

/**
 * @swagger
 * /usuario:
 *   delete:
 *     tags: [Elimina Usuarios]
 *     summary: Elimina un usuario
 *     description: Elimina un usuario existente de la base de datos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *                 example: "60d0fe4f5311236168a109ca"
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Usuario eliminado exitosamente"
 *       400:
 *         description: Error al eliminar el usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Error al eliminar el usuario: ID no válido"
 */

/**
 * @swagger
 * /usuario:
 *   put:
 *     tags: [Actualiza Usuarios]
 *     summary: Actualiza un usuario
 *     description: Actualiza los datos de un usuario existente en la base de datos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *                 example: "60d0fe4f5311236168a109ca"
 *               nombre:
 *                 type: string
 *                 example: "Sandra"
 *               apellido:
 *                 type: string
 *                 example: "Abril"
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Usuario actualizado exitosamente"
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "60d0fe4f5311236168a109ca"
 *                     nombre:
 *                       type: string
 *                       example: "Sandra"
 *                     apellido:
 *                       type: string
 *                       example: "Abril"
 *                     fecha_registro:
 *                       type: string
 *                       format: date-time
 *                       example: "2023-10-29T12:34:56Z"
 *                     fecha_actualizacion:
 *                       type: string
 *                       format: date-time
 *                       example: "2023-10-29T12:34:56Z"
 *       400:
 *         description: Error al actualizar el usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Error al actualizar el usuario: ID no válido"
 */

/**
 * @swagger
 * /usuario:
 *   get:
 *     tags: [Obtiene Usuarios]
 *     summary: Obtener todos los usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: ID del usuario
 *                     example: "60d0fe4f5311236168a109ca"
 *                   nombre:
 *                     type: string
 *                     description: Nombre del usuario
 *                     example: "Sandra"
 *                   apellido:
 *                     type: string
 *                     description: Apellido del usuario
 *                     example: "Abril"
 *       400:
 *         description: Error al obtener usuarios
 */
const routes = function( server ) {
    server.use('/usuario', usuario)
}

module.exports = routes