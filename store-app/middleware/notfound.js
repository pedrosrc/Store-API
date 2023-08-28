const notFound = (req, res) => res.status(404).send('Routes Not Exist')

module.exports = notFound;