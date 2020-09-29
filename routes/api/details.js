const express = require('express');
const multer = require('multer');
const router = express.Router();

const Details = require('../../models/Details');
var date_store;

// router.use('/static', express.static(__dirname + 'assests'));

var Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./assests");
    },
    filename: (req, file, cb) => {
        cb(null, `${(date_store = Date.now())}`);
    },
});

var upload = multer({
    storage: Storage
})

router.get('/test', (req, res) => res.send('Details route testing'));

router.get('/', (req, res) => {
    Details.find()
        .then(details => res.json(details))
        .catch(err => res.status(400).json({ nodetailsfound: 'No Details Found' }));

});

router.get('/:id', (req, res) => {
    Details.findById(req.params.id)
        .then(details => res.json(details))
        .catch(err => res.status(400).json({ nodetailsfound: 'No Details Found' }));

})

router.post('/', upload.single("file"), (req, res) => {
    // console.log(req.file);
    const data = {
        name: req.body.name,
        gender: req.body.gender,
        email: req.body.email,
        mobile: req.body.mobile,
        category: req.body.category,
        // profilepicture: req.body.profilepicture,
        filename: `${date_store}`
    };

    Details.create(data)
        .then(details => {
            console.log('Responnnnnnce in backend : ', res);
            res.json({ msg: 'Details added successfully' });
        })
        .catch(err => {
            console.log('Error in backend', err);
            res.status(400).json({ error: 'Unable to add this Details' })
        });
});


router.put('/:id', (req, res) => {
    Details.findByIdAndUpdate(req.params.id, req.body)
        .then(details => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

router.delete('/:id', (req, res) => {
    Details.findByIdAndRemove(req.params.id, req.body)
        .then(details => res.json({ mgs: 'Details entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such a book' }));
});

module.exports = router;