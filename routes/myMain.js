module.exports = (app) => {
  app.get('/', (req, res) =>{
      res.send('This is the main page yo!')
  })
};