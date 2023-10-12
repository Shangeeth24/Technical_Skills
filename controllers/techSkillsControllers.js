const TechnicalSkill = require('../models/techSkillsModel.js');

exports.getTechSkills = async (req, res) => {
  try {
    const skills = await TechnicalSkill.find({});
    const skillNames = skills.map(skill => skill.skill);
    res.json(skillNames);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'An error occurred while displaying the skills' });
  }
};

exports.postTechSkill = async (req, res) => {
  try {
    const newSkill = new TechnicalSkill({
      skill: req.body.skill
    });
    await newSkill.save();
    res.status(201).json({ message: 'Skill added successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'An error occurred while adding the skill' });
  }
};
