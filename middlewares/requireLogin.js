module.exports = (req, res, next) => {
  // next is an argument that we call when we want it done running
    if(!req.user){
        return res.status(401).send({error: 'You must be login to access this route'})
    }

    next();

};
