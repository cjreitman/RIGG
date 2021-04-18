const express = require('express');

const router = express.Router();

const Carrier = require('../../models/Carrier');

router.get('/test', (req, res) => res.send('carrier route testing!'));

router.get('/', (req, res) => {
  Carrier.find()
    .then((carriers) => res.json(carriers))
    .catch((err) => res.status(404).json({ noCarriersFound: 'No carriers found' }));
});

router.get('/:id', (req, res) => {
  Carrier.findById(req.params.id)
    .then((carrier) => res.json(carrier))
    .catch((err) => res.status(404).json({ noCarrierFound: 'No carrier found' }));
});

router.post('/', (req, res) => {
  Carrier.create(req.body)
    .then((carrier) => res.json({ msg: 'Carrier added successfully' }))
    .catch((err) => res.status(400).json({ error: 'Unable to add this carrier' }));
});

router.put('/:id', (req, res) => {
  Carrier.findByIdAndUpdate(req.params.id, req.body)
    .then((carrier) => res.json({ msg: 'Updated successfully' }))
    .catch((err) => res.status(400).json({ error: 'Unable to update the Database' }));
});

router.delete('/:id', (req, res) => {
  Carrier.findByIdAndRemove(req.params.id, req.body)
    .then((carrier) => res.json({ mgs: 'Carrier entry deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'No such a carrier' }));
});

module.exports = router;
