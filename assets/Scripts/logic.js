function edit_type_show (client_type) {
  let edit_modal = document.getElementById('edit-client-modal')
  let edit_type_divs = edit_modal.querySelectorAll('.edit-forms-divs')
  for (let i = 0; i < edit_type_divs.length; i++) {
    edit_type_divs[i].classList.remove('show')
  }
  let project = document.getElementById('project-edit-div')
  let sla = document.getElementById('SLA-edit-div')
  let resource = document.getElementById('resource-edit-div')

  switch (client_type) {
    case 'project': {
      project.classList.add('show')
      break
    }
    case 'SLA': {
      sla.classList.add('show')
      break
    }
    case 'resource': {
      resource.classList.add('show')
      break
    }
  }
}
