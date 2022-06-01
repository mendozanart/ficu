const Events = require("../models/events")


const eventsController={
    ObtenerTodosDatos:async(req,resp)=>{
       /*  console.log(req)
        console.log(resp) */
        let events

        let error =null

        try {
            events = await Events.find()
            
        } catch (err) {
            error =err
            console.log(error)
        }

        resp.json({
            response:error?"ERROR":{events},
            success:error? false:true,
            error:error
        })
    },

    



  
}

module.exports=eventsController