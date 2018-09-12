
  export default function getAllProjects() {
    console.log("CALLTHEFUCKINGPROJECTAPI")
    fetch('http://localhost:8080/projects')
      .then(response => {
        return response.json();
      }).then(data => {
        console.log("Response: ", data)
        const response = data;
        let fetchedProjects = [];
          response.map(project => {
            const projectData = {
              id: project._id,
              name: project.name,
              description: project.description,
              date: project.date,
              image: project.image,
              area: project.area,
              link: project.link
            };
            fetchedProjects.push(projectData);
      });
      return fetchedProjects;
  }).catch(error => {
    throw(error);
  }).catch(error=> {
    throw(error);
  });
}
