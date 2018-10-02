module.exports = function(app) {
  var projects = require('../controllers/projectsController');

  app.route('/api/projects')
  .get(projects.list_all_projects)
  .post(projects.create_project)

  app.route('/api/projects/:projectId')
  .get(projects.view_project)
  .put(projects.update_project)
  .delete(projects.delete_project);
};
