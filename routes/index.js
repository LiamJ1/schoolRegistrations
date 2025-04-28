var express = require('express');
var router = express.Router();
const courseController = require('../controllers/courseController');
const studentController = require('../controllers/studentController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/courses', courseController.viewAll);
router.get('/courses/profile/:id', courseController.viewProfile);
router.get('/courses/edit/:id', courseController.renderEditForm)
router.get('/courses/add',courseController.renderAddForm)
router.post('/courses/add',courseController.addCourse)
router.get('/courses/delete/:id',courseController.deleteCourse)


router.get('/students', studentController.viewAll);
router.get('/students/profile/:id', studentController.viewProfile);
router.get('/student/edit/:id', studentController.renderEditForm);
router.get('/students/add', studentController.renderAddForm);
router.post('/students/add', studentController.addStudent)
router.get('/students/delete/:id', studentController.deleteStudent)
router.post('/students/:studentId/enroll', studentController.enrollStudent);
router.get('/students/:studentId/removeCourse/:courseId', studentController.removeCourse);
router.post('/courses/:courseId/enroll', courseController.enrollStudent);
router.get('/courses/:courseId/removeStudent/:studentId',courseController.removeStudent);

module.exports = router;
