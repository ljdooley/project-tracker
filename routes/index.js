const router = require('express').Router();

router.get('/api', (req, res)=> {
    res.send('You started your project! Good job!')
});

module.exports = router;