const {CityService } = require('../services/index');

const cityService = new CityService();

const create = async (req,res)=>{
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success : true,
            messege : "Succcessfully created a city",
            err :{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success : false,
            messege : "not able to create a city",
            err : error
        })
    }
}
// delete -> /city/:id ->req.params.id
const distroy = async (req,res)=>{
    try {
        const city = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: city,
            success : true,
            messege : "Succcessfully deleted a city",
            err :{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success : false,
            messege : "not able to delete the city",
            err : error
        })
    }
}
// get -> /city/:id ->req.params.id
const get = async (req,res)=>{
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: city,
            success : true,
            messege : "Succcessfully fetched a city",
            err :{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success : false,
            messege : "not able to fetch the city",
            err : error
        })
    }
}
// patch -> /city/:id ->req.params.id
const update = async (req,res)=>{
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: city,
            success : true,
            messege : "Succcessfully updated the city",
            err :{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success : false,
            messege : "not able to update the city",
            err : error
        })
    }
}
module.exports={
    create,
    update,
    distroy,
    get
}