const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello Woooooorld');
});

app.get('/users/:userId/books/:bookId', (req, res) => {
    console.log(req.params);
    const { userId, bookId } = req.params
    console.log(userId);
    console.log(bookId);
    res.send(req.params);
});

app.listen(PORT, () => {
    console.log(`O servidor está funcionando na porta: ${PORT}`);
});
