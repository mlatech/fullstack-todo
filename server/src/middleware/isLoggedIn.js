//code that will run before every endpoint request
module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader){
        res.status(401).send("invalid credentials")
    } else {
        const token = authHeader.split("")[1]
    }
}