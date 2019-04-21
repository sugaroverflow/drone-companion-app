const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));

// Test username retrieval 
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
