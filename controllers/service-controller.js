const Service = require("../models/service-model")

const services = async (req, res) => {
    try {
        const response = await Service.find();
        if (!response) {
            return res.status(400).json({ message: "No service response found" });
        }
        console.log(response);
        return res.status(200).json({ message: response });

    }
    catch (error) {
        console.log(`services: ${error}`);
    }
}

module.exports = services;