const express = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/url-shortener', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// URL Schema
const urlSchema = new mongoose.Schema({
    originalUrl: String,
    shortUrl: String,
});

const Url = mongoose.model('Url', urlSchema);

// Create shortened URL
app.post('/shorten', async (req, res) => {
    console.log(req.body);
    const originalUrl = req.body.url;
    const shortUrl = shortid.generate();
    // console.log(originalUrl);
    const newUrl = new Url({
        originalUrl,
        shortUrl: shortUrl,
    });
    // console.log(shortUrl);
    await newUrl.save();
    res.json({ originalUrl, shortUrl });
});

// Retrieve original URL
app.get('/url/:shortUrl', async (req, res) => {
    const { shortUrl } = req.params;
    const url = await Url.findOne({ shortUrl });

    if (url) {
        return res.redirect(url.originalUrl);
    } else {
        return res.status(404).send('URL not found');
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});