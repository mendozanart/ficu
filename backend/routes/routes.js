const Router = require("express").Router();
const passport=require("../config/passport")

const citiesController = require("../controllers/datosControllers")
const {ObtenerTodosLosDatos , ObtenerItinerary,likeDislike}= citiesController


const eventsController = require("../controllers/eventsControllers")
const {ObtenerTodosDatos, ObtenerMiembros, ObtenerArtistas, ObtenerEvento }= eventsController


const usersControllers =require("../controllers/usersControllers")
const {nuevoUsuario, verifyEmail, accesoUsuario, cerrarSesion,verificarToken}= usersControllers

const commentControllers= require("../controllers/comentariosControllers")
const {cargaComentarios,obtenerComentarios,borrarComentario, modificarComentario}= commentControllers

const validator= require("../controllers/validator")

Router.route("/events")
.get(ObtenerTodosDatos)

/* Router.route("/events/:id")
.get(ObtenerEvento) */


Router.route("/nosotros")
.get(ObtenerMiembros)


Router.route("/artistas")
.get(ObtenerArtistas)











/* mytinerary */

Router.route("/datos")
.get(ObtenerTodosLosDatos)

Router.route("/itinerary/:city")
.get(ObtenerItinerary)

Router.route("/signup")
.post(validator,nuevoUsuario)

Router.route("/verify/:uniqueText")
.get(verifyEmail)


Router.route("/signIn")
.post(accesoUsuario)

Router.route("/signout")
.post(cerrarSesion)


Router.route("/comments")
.post(cargaComentarios)  

Router.route("/comments/:id")
.get(obtenerComentarios)
.delete(borrarComentario)
.put(modificarComentario)

Router.route("/signInToken")
.get(passport.authenticate("jwt", {session:false}), verificarToken)

Router.route("/likesDislike/:id")
.put(passport.authenticate("jwt", {session:false}), likeDislike)


module.exports= Router

