const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = require('express')();

// const mongoURL = 'mongodb://localhost/express-mongo';
// Path to connect to MongoDB from docker container instead of local
const mongoURL = 'mongodb://mongo:27017/expressmongo';

// connect to Mongo daemon
mongoose
  .connect(mongoURL, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// DB schema
const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

Item = mongoose.model('item', ItemSchema);
app.use(bodyParser.urlencoded({ extended: false }));

// Post routes
app.post('/item/add', async (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });

  await newItem.save();

  res.json({ item: newItem });
});

// Get routes
app.get('/', (req, res) => {
  res.send("it's working!");
});

app.get('/items', async (req, res) => {
  try {
    const items = await Item.find({});
    res.json({ items });
  } catch (error) {
    res.status(500).end();
  }
});

const port = 3000;

app.listen(port, () => console.log(`Server running at ${port}`));
