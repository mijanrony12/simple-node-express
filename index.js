const express = require('express');
const cors=require('cors')
const app = express()
const port = 5000;

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('hello world, i am happy, i am so excited');
});

const users = [
    { id: 0, name: 'mijan rony', email:'mijan@gmail.com',job:'student',age:25},
    { id: 1, name: 'kamrul rony', email:'mijan@gmail.com', job:'student',age:25},
    { id: 2, name: 'shagor rony', email:'mijan@gmail.com', job:'student',age:25},
    { id: 3, name: 'masfiq rony', email:'mijan@gmail.com', job:'student',age:25},
    { id: 4, name: 'shahin rony', email:'mijan@gmail.com', job:'student',age:25}
]

//query parameter
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search)
    {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult)
    }
    res.send(users)
   
    
});

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

//dynamic api
app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const user = users[ id ];
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango','banna','apple'])
})

app.get('/fruits/mangos/fazli', (req, res) => {
    res.send('banna')
})

app.listen(port, () => {
    console.log('listening to port', port);
});