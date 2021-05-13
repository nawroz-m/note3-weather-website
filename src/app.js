const express = require('express')
const geocode = require('./utils/jeocode.js')
const forecast = require('./utils/forecast.js')
const path = require('path')
const hbs = require('hbs')
const app = express()

// Creat port var 
const port = process.env.PORT || 3000 

// Define path for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../viewsPath')
const partialPaths = path.join(__dirname, '../viewsPath/partial')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', 'viewsPath/views')
hbs.registerPartials(partialPaths)


// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

//Home rout
app.get('', (req, res)=> {
    res.render('index', {
        
        name: 'Nawroz',
        title: 'Home '
    })
})

//About rout
app.get('/about', (req, res)=>{
    res.render('about',{
        title: 'About Me',
        name: "Nawroz",
        location: "Pune"
    })
})

//Help rout
app.get('/help', (req, res)=>{
    res.render('help', {
        title: 'Help',
        name: 'Help Center',
        description: "I am here to help !!"
    })
})

// Weather rout
app.get('/weather', (req, res)=>{
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address in search bar. The address looks like "/weather?address=YourAddres"'
        })
    } 

    geocode(req.query.address, (error, {atitude, longtitude, location} = {})=>{
        if(error){
            return res.send(error)
        } 
        forecast(atitude, longtitude, (error, data)=>{
            if(error){
                return res.send(error)
            }

            res.send({
                forecast: data,
                location,
                address: req.query.address
            })
        })
    })

})

// Create an /path/*
app.get('/help/*', (req, res)=>{
    res.render('my404', {
        title: 'Error 404',
        name: 'Error Handler',
        errorMessage: "Hepl Article Not Found!!"
    })
})

// Create an 404 rout
app.get('*', (req, res)=>{
    res.render('my404', {
        title: 'Error 404!',
        name: 'Error Handler',
        errorMessage: 'Page not found!. Try to another search'
    })
})

app.listen(port, ()=>{
    console.log("The server has been started! on port "+port)
})