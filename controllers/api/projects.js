exports.getAllProjects = (req, res) => {
    const projects = [
      { id: 1, name: 'Project 1', description: 'Description of Project 1' },
      { id: 2, name: 'Project 2', description: 'Description of Project 2' },
    ]
    res.json(projects);
  }