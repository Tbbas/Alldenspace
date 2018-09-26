const axios = require('axios');


export const deleteProject = (project) => {
    var confirmed = window.confirm("Delete project " , project.name , " ?");
    if (confirmed == true) {
      axios.delete('/api/projects',project.id)
        .then(function (response) {

        })
        .catch(function (error) {
          console.log(error);
        })
    }
}
