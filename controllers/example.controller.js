let example = (req, res) => {
    res.status(200).json({
        "message": "example route"
    }).end()
}

module.exports = {
    example
}