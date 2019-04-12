
const handleIndexRoute = async (request, response) => {
    response.status(200).render('pages/index')
}

const handleDateRoute = async (request, response) => {
    response.status(200).render('pages/date')
}

const handleTimeRoute = async (request, response) => {
    response.status(200).render('pages/time')
}

module.exports =  {
    handleIndexRoute,
    handleDateRoute,
    handleTimeRoute
}