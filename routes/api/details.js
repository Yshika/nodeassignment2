const express = require('express');
const router = express.Router();

const Details = require('../../models/Details');

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

router.post('/', (req, res) => {
    Details.create(req.body)
        .then(details => res.json({ msg: 'Details added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this Details' }));
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