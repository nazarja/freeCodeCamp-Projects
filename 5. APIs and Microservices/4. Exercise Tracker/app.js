/********
 * REQUIRES
 ********/
var express = require('express');
var app = express();
var bodyParser = require("body-parser");

/********
 * DIRS
 ********/
var css = __dirname + '/public/';
var html = __dirname + '/views/index.html';
var port = process.env.PORT || 3000;

/********
 * MONGOOSE
 ********/
var mongoose = require('mongoose')
var database = 'mongodb://nazarja:mongo1password@ds259410.mlab.com:59410/exercise-tracker'
mongoose.connect(database);

// Test Mongoose connection to database is open
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection-error:'));
db.once('open', function() {
    console.log('Connected to mLab database.')
})

// Schema
var userSchema = {
    username: String,
    count: Number,
    log: []
}
// Modal
var User = mongoose.model('User', userSchema);

/********
 *  EXPRESS
 ********/

// Serve up static files
app.use(express.static(css));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

// Route to serve up the homepage
app.get('/', function(req, res) {
    res.sendFile(html);
});

/********
* POST 
********/

// Get Info from Username form
app.post('/api/exercise/new-user', function(req, res) {
    // Check if person exists
    User.findOne({username: req.body.username}, function(err, results) {

        if (err) console.log(err);

        // if no results - create new user
        if (results == null) {
            let user = new User({
                username: req.body.username,
                count: 0,
                log: []
            });
            // Save user and return object
            user.save(function (err, data) {
                if (err) console.log(err);
                res.send({
                    username: data.username,
                    _id: data._id 
                })
            })
        }
        else {
            // if user exists return with string
            res.send('Error: Username already exists. Please choose another username.')
        }
    })
})

// Get Info from Username form
app.post('/api/exercise/add', function (req, res) {

    let log = {
        description: req.body.description,
        duration: parseInt(req.body.duration),
        date: new Date(req.body.date).toString().slice(0,15)
    }

    User.findOneAndUpdate({ username: req.body.username }, { new: true }, function(err, results) {
        if (err) console.log(err);
        if (results == null) {
            User.findByIdAndUpdate(req.body.username, { new: true }, function(err, results) {
                if (err) console.log(err);
                if (results == null) {
                    return res.send('No user found, please try again with a valid userrname or _id.')
                }
                else {
                    results.count = results.count + 1;
                    results.log.push(log);
                    results.save(function(err, results) {
                        return res.send(results);
                    });
                }
            }) 
        }
        else {
            results.count = results.count + 1;
            results.log.push(log);
            results.save(function (err, results) {
                return res.send(results);
            })
        }
    }) 
});

/********
 * GET 
 ********/

// Get Username from form and put into database
app.get('/api/exercise/users', function(req, res) {
    User.find({}, function (err, results) {
        let array = [];
        results.map(document => {
            array.push({
                _id: document.id,
                username: document.username
            });
        });
        return res.send(array);
    });
});

// Get User log
app.get('/api/exercise/log', function(req, res) {

    let date_from;
    let date_to;
    let limit;

    if (req.query.from) {date_from = new Date(req.query.from).toString();}
    if (req.query.to) {date_to = req.query.to;}
    if (req.query.limit) {limit = req.query.limit;}

    function sortReturn(data) {
        
        let array = [...data.log];
        let userObject = {
            _id: data._id,
            username: data.username,
            count: array.length,
            log: array
        }

        if (date_from) {
            userObject.log = array.filter(log => new Date(log.date) > new Date(date_from));
            userObject.from = new Date(date_from).toString().slice(0,15);
        }
        if (date_to) {
            userObject.log = array.filter(log => new Date(log.date) < new Date(date_to));
            userObject.to = new Date(date_to).toString().slice(0,15);
        }
        if (limit) {
            userObject.log = userObject.log.slice(0, limit);
        }
        return res.send(userObject);
    }

    User.findOne({ username: req.query.userId}, function(err, results) {
            if (err) console.log(err);
            if (results == null) {
                User.findById(req.query.userId, function (err, results) {
                    if (err) console.log(err);
                    if (results == null) {
                        return res.send('No user found, please try another valid username or _id.')
                    }
                    else {
                        return sortReturn(results);
                    }
                })
            }
            else {
                return sortReturn(results);
            }
    })
});


/********
 * SERVER
 ********/

// Create Server and Listen on port
var server = app.listen(port, function() {
    console.log(`Server is listening on port: ${port}`);
});
