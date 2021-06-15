var express = require('express');
var router = express.Router();
var AuthorControllers = require('../controllers/Author');
var AdvisorControllers = require('../controllers/Advisor');
var CompetitionControllers = require('../controllers/Competition');
var FieldControllers = require('../controllers/Field')
var TopicContollers = require('../controllers/Topic')
var Validate = require('../config/validation');
var ScalesControllers = require('../controllers/Scales')
var passport = require('passport');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
//=============================================== Author =========================================
/* GET Author Data. */
router.get('/all_data_author', AuthorControllers.getAllAuthor);

/* Delete Author */
router.delete('/delete_author', AuthorControllers.deleteAuthor);

/* Search Author Data */
router.get('/search_author', AuthorControllers.Search);

//============================ Belum Ada Axios Method ===============================
/* Create Author */
router.post('/create-author', Validate.validate('author_create'), AuthorControllers.addNewAuthor);

/* Edit Author */
router.post('/edit-author', AuthorControllers.editAuthor);
//=============================================== End Author =========================================
//=============================================== Advisor =========================================
/* Get All Advisor */
router.get('/all_data_advisor', AdvisorControllers.getAdvisor);
/* Create New Advisor */
router.post('/create-advisor', Validate.validate('create_advisor'), AdvisorControllers.createAdvisor)
/* Delete Advisor */
router.delete('/delete-advisor', AdvisorControllers.deleteAdvisor);
router.get('/search-advisor', AdvisorControllers.Search);
//===============================================End Advisor =========================================
//=============================================== Competition =========================================
/* Create New Competition */
router.post('/create-competition', CompetitionControllers.createCompetition);
router.get('/all_data_competition', CompetitionControllers.getAllCompetition);
router.delete('/delete-competition', CompetitionControllers.deleteCompetition);
router.get('/search-competition', CompetitionControllers.Search);
router.put('/update-competition/:id', CompetitionControllers.UpdateCompetition);
//===============================================End Competition =========================================
//=============================================== Filed =========================================
router.post('/create-field', FieldControllers.createFields)
router.get('/all_data_field', FieldControllers.getFields)
router.delete('/delete-field', FieldControllers.deleteFields)
router.get('/search-fields', FieldControllers.Search)
//=============================================== End Filed =========================================

//=============================================== Topic =========================================
router.get('/all_data_topic', TopicContollers.TopicData)
router.post('/create-topic', TopicContollers.createTopic)
router.delete('/delete-topic', TopicContollers.deleteTopic)
router.get('/search-topic', TopicContollers.Search)
router.put('/update-topic/:id', TopicContollers.UpdateTopic)
//=============================================== End Topic =========================================
//=============================================== Scales =========================================
router.get('/all_data_scales', ScalesControllers.getScales)
router.delete('/delete-scales', ScalesControllers.deleteScales)
router.get('/search-scales', ScalesControllers.Search);
router.put('/update-scales', ScalesControllers.UpdateScales)
// router.get('/find-scale', ScalesControllers.findScaleByid)
//=============================================== End Scales =========================================

module.exports = router;
