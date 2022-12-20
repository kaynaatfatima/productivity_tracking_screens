function create_type_show (client_type) {
  let create_type_divs = document.querySelectorAll('.create-forms-divs')
  for (let i = 0; i < create_type_divs.length; i++) {
    create_type_divs[i].classList.remove('show')
  }
  let project = document.getElementById('project-create-div')
  let sla = document.getElementById('SLA-create-div')
  let resource = document.getElementById('resource-create-div')

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

// New resource input
var resource_count = 1
function add_new_resource () {
  let max_resource_count = 8
  resource_count++
  resource_input_html =
    '<div id="new-resource-input' +
    resource_count +
    '" class="col-md-12"> <div class="position-relative form-group"> <label for="res_email' +
    resource_count +
    '" class="" >' +
    resource_count +
    ' - Resource</label ><select name="res_email' +
    resource_count +
    '" id="res_email' +
    resource_count +
    '" type="text" class="form-control"> <option value=""> 1resourceEmail1jbs.live </option> <option value=""> 2resourceEmail2jbs.live </option> <option value=""> 3resourceEmail3jbs.live </option> <option value=""> 4resourceEmail4jbs.live </option> </select> </div> </div>'
  document
    .getElementById('assign-resource-form')
    .children.item(1).firstElementChild.innerHTML += resource_input_html

  if (resource_count >= max_resource_count) {
    document.getElementById('add-new-resource-btn').disabled = true
  }
}

var task_count = 1
function add_new_task () {
  max_tasks = 5

  task_count++
  new_task_input_html =
    '<div class=""> <div class="form-row p-4 m-2 mb-4 border rounded task-detail-form"> <div class="col-md-6"> <div class="position-relative form-group"> <label for="task_type' +
    task_count +
    '" class="" >Type</label ><select name="task_type' +
    task_count +
    '" id="task_type' +
    task_count +
    '" type="text" class="form-control"> <option value="project"> Project </option> <option value="job">Job</option> <option value="SLA">SLA</option> </select> </div> </div> <div class="col-md-6"> <div class="position-relative form-group"> <label for="task_client' +
    task_count +
    '" class="" >Client</label ><select name="task_client' +
    task_count +
    '" id="task_client' +
    task_count +
    '" type="text" class="form-control"> <option value="client1"> client1 </option> <option value="client2"> client2 </option> <option value="client3"> client3 </option> <option value="client4"> client4 </option> <option value="happening"> happening </option> </select> </div> </div> <div class="col-md-6"> <div class="position-relative form-group"> <label for="task_description' +
    task_count +
    '" class="" >Description</label ><select name="task_description' +
    task_count +
    '" id="task_description' +
    task_count +
    '" type="text" class="form-control"> <option value=" description1"> description1 </option> <option value=" description2"> description2 </option> <option value=" description3"> description3 </option> <option value=" description4"> description4 </option> <option value="happening"> happening </option> </select> </div> </div> <div class="col-md-6"> <div class="position-relative form-group"> <label for="task_comment' +
    task_count +
    '" class="" >Comment</label ><input class="form-control" type="text" name="task_comment' +
    task_count +
    '" id="task_comment' +
    task_count +
    '" /> </div> </div> <div class="col-md-6"> <div class="position-relative form-group"> <label for="task_date' +
    task_count +
    '">Date</label ><input name="task_date' +
    task_count +
    '" id="task_date' +
    task_count +
    '" placeholder="date placeholder" type="date" class="form-control" /> </div> </div> <div class="col-md-6"> <div class="position-relative form-group"> <label for="task_hours' +
    task_count +
    '" class="" >Hours</label ><select name="task_hours' +
    task_count +
    '" id="task_hours' +
    task_count +
    '" type="text" class="form-control"> <option value="">1</option> <option value="">2</option> <option value="">3</option> <option value="">4</option> <option value="">5</option> <option value="">6</option> <option value="">7</option> <option value="">8</option> <option value="">9</option> <option value="">10</option> <option value="">11</option> <option value="">12</option> <option value="">13</option> <option value="">14</option> </select> </div> </div> </div> </div>'

  document.querySelector('#resource-task-detail').firstElementChild.innerHTML +=
    new_task_input_html

  if (task_count == max_tasks) {
    document.getElementById('add-new-task-btn').disabled = true
  }
}
