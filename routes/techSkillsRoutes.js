const express = require('express');
const router = express.Router();
const {getTechSkills,postTechSkill} = require('../controllers/techSkillsControllers');

router.get('/api/technical-skills', getTechSkills);
router.post('/api/technical-skill', postTechSkill);

module.exports = router;