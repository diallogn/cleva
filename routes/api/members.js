var express = require('express');
var router = express.Router();
var membersController = require('../../controllers/membersController');

// Get All Members
router.get('/', membersController.get_members);

// Get Single Member
router.get('/:id', membersController.get_single_member);

// Create a Member
router.post('/', membersController.crete_new_member);

// Update Member
router.put('/:id', membersController.update_member);

// Delete Member
router.delete('/:id', membersController.delete_member);

module.exports = router;