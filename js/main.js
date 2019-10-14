const issueForm = document.getElementById('issueForm');

issueForm.addEventListener('submit', (e) =>{
    const description = document.getElementById('description').value;
    const severityInput = document.getElementById('severityInput').value;
    const assign = document.getElementById('assign').value;
    const id = chance.guide();
    const status = 'Open';

     

     issue = {
         id: id,
         description: description,
         severityInput: severityInput,
         assign: assign,
         status :status
     }
     
     if(localStorage.getItem('issues') == null){

        const issues = [];
        issues.push(issue);
        
        localStorage.setItem('issues', JSON.stringify(issues));
          
     }
     else{
        const issues = JSON.parse(localStorage.getItem('issues'));
        issues.push(issue);
        localStorage.setItem('issues'.JSON.stringify(issues))
     }
     e.preventDefault();
     fetchIssues();
     document.getElementById('issueForm').reset();
    
});





function fetchIssues(){
    const issues = JSON.parse(localStorage.getItem('issues')); 
    //get output results
     const issuelist = document.getElementById('issuelist');
     
     //build output
     issuelist.innerHTML = '';
     for(let i = 0; i<issues.length; i++){
         let id = issues[i].id;
         let description = issues[i].description;
         let severityInput = issues[i].severityInput;
         let assign = issues[i].assign;
         let status = issues[i].status;

         issuelist.innerHTML += '<div class="well">' + 
                                        '<h6> issue id:' + id +'<h6>' +
                                        '<p> <span class="label label-info">'+ status +'</p>'+
                                        '<h3>'+ description +'</h3>'+
                                        '<p> <span class="glyphicon glyphicon-time">'+ severityInput +'</p>'+
                                        '<p> <span class="glyphicon glyphicon-user">'+ assign +'</p>'+
                                        '<a  onclick="setStatusClosed(\''+id+'\')" class= "btn btn-warning" href = "#">close</a>' +
                                        '<a onclick="deleteIssue(\''+id+'\')" class= "btn btn-danger" href = "#">Delete</a>' + 
                                         '</div>'

     }
     
  }
  
