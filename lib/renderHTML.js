const fs = require('fs');


const renderHTML = (teamArr) => {
    let renderedHTML = '';
    teamArr.forEach(element => {
        let data = `
        <div class="col-4">
        <div class="card employeeCards">
            <div class="card-header">
                <h3 class="card-title">${element.name}</h3>
                <h4 class="card-title">${element.role}</h4>
            </div>

            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${element.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${element.email}">${element.email}</a></li>`
                    
        
        if(element.role == 'Engineer') {
            data += `<li class="list-group-item">GitHub: <a href="https://github.com/${element.github}">${element.github}</a></li>`;
        }
        else if (element.role == 'Intern') {
            data += `<li class="list-group-item">School: ${element.school}</li>`;

        }
        else if (element.role == 'Manager') {
            data += `<li class="list-group-item">Office Number: ${element.officeNum}</li>`;
        }
        data += `
            </ul>
        </div>
        </div>
        </div>
        `;
        renderedHTML += data;
    })


let htmlTemp = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <!-- Internal CSS -->
    <link rel="stylesheet" href="style.css">
    </head> 

    <body>
        <!--nav-->
        <header>
            <nav class="navbar navbar-dark bg-dark mb-5" id="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
            </nav>
        </header>
        <main class="container">
            <div class="row employeeCard" id="employeeSect">
                ${renderedHTML}
            </div>
        </main>
    </body>
    </html>
`;
    createhtml(htmlTemp);
}

const createhtml = (htmlTemp) => {
    try {
        fs.writeFileSync('./dist/index.html', htmlTemp);
        console.log('Success!');
        fs.writeFileSync('./dist/style.css', cssTemplate);
        console.log('Success');
    } catch (error) {
        console.log(error);
    }
}

const cssTemplate = `
#navbar {
    padding: 15px;
}
.employeeCard {
    display: inline;
    justify-content: space-evenly;
}
.employeeCards {
    background-color: white;
    width: 18rem;
    margin-top: 20px;
}
.card-title {
    color: white;
}
.card-header {
    background-color: rgb(24, 71, 99);
    color: white;
}`;

module.exports = renderHTML;