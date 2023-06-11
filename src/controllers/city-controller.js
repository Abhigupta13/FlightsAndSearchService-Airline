const {CityService } = require('../services/index');

const CityService = new CityService();

const create = async (req,res)=>{
    try {
        const city = await CityService.createCity(req.body);
        return res.ststus(201).json({
            data: city,
            success : true,
            messege : "Succcessfully created a city",
            err :{}
        })
    } catch (error) {
        console.log(error);
        return res.ststus(500).json({
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
        const city = await CityService.deleteCity(req.params.id);
        return res.ststus(200).json({
            data: city,
            success : true,
            messege : "Succcessfully deleted a city",
            err :{}
        })
    } catch (error) {
        console.log(error);
        return res.ststus(500).json({
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
        const city = await CityService.deleteCity(req.params.id);
        return res.ststus(200).json({
            data: city,
            success : true,
            messege : "Succcessfully fetched a city",
            err :{}
        })
    } catch (error) {
        console.log(error);
        return res.ststus(500).json({
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
        const city = await CityService.updateCity(req.params.id, req.body);
        return res.ststus(200).json({
            data: city,
            success : true,
            messege : "Succcessfully updated the city",
            err :{}
        })
    } catch (error) {
        console.log(error);
        return res.ststus(500).json({
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
    get,
    distroy
}