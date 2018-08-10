import React, {Component} from 'react';
import {
  Container, Header, Segment, Grid
} from 'semantic-ui-react';

export function fetchAllProjects() {
  return new Promise((resolve, reject) => {
  var fetchedProjects = [];
  fetch('http://localhost:8080/projects',)
    .then(results => {
      return results.json();
    }).then(data => {
    data.forEach((project) => {
      fetchedProjects.push(project);
    })
      return fetchedProjects;
  });
});
}
export function postNewProject( ) {
  
}
