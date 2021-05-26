const service = require("./movies.service");

async function checkMovieId(req, res, next) {
    const { movieId } = req.params; 
    const movie = await service.read(Number(movieId));
    if(movie){
        res.locals.movie = movie;
        return next();
    }
    
    return next({
        status: 404,
        message: "Movie cannot be found.",
    });
}

async function list(req, res) {
    const { is_showing = false } = req.query; 
    const data = await service.list(Boolean(is_showing))
    res.json({ data });
}

async function read (req, res) { 
    res.json({ data: await res.locals.movie })
}

module.exports = {
    list,
    read: [checkMovieId, read],
    checkMovieId,
}