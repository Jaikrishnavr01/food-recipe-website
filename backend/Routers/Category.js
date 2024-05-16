const express = require('express');
const CategoryModel = require('../Models/CategoryModel');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/', (req, res) => {
    res.send('Category route');
});

router.post('/post', (req, res) => {
    console.log(res.body);
    const newCategory = new CategoryModel(req.body);
    newCategory.save()
   .then(response => console.log(response))
   .catch(err => console.log(err));
   res.send('Category added');
})

router.get('/get', (req, res) => {
    CategoryModel.find()
    .then(response => res.send(response))
    .catch(err => console.log(err))
})

router.get('/get/:id', (req, res) => {
    CategoryModel.findById(req.params.id)
    .then(response => res.send(response))
    .catch(err => console.log(err))
})

router.put('/update/:id', (req, res) => {
    CategoryModel.findByIdAndUpdate(req.params.id, req.body)
    .then(response => console.log(response))
    .catch(err => console.log(err))
    res.send('Category updated');
})


router.delete('/delete/:id', (req, res) => {
    CategoryModel.findByIdAndDelete(req.params.id)
    .then(response => console.log(response))
    .catch(err => console.log(err))
    res.send('Category deleted');
})

module.exports = router;


