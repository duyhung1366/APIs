// thêm sử xóa khóa học với fetch và rest api 

var listCourse = document.getElementById('list-courses');

var courseApi = "http://localhost:3000/courses";



function start() {
    getCourses(renderCourses);
    // create 
    createData();
    //delete 
    // deleteData(); 
}
start();
// get api
function getCourses(callback) {
    
    fetch(courseApi)
        .then(response => response.json())
        .then(callback)
}
// String HTML
function stringHtml(x) {
    return `<li id = "${x.id}">
    <h4>${x["name-courses"]}</h4>
    <p>${x.decription}</p>
    <button onclick = deleteData(${x.id})>xoa</button>
      </li>`;
}
// render screen 
function renderCourses(courses) {
    var htmls = courses.map(x => {
        return stringHtml(x); 
    })
    listCourse.innerHTML = htmls.join("");
}

//create data 
function createData() {
    var createBtn = document.getElementById('create');

    createBtn.onclick = () => {
        var name = document.querySelector('input[name="name-courses"]').value;
        var decription = document.querySelector('input[name="decription"]').value;

        var dataForm = {
            "name-courses": name,
            decription: decription
        }
        console.log('onclick')
        handleCreate(dataForm);

    }
}
// // handle create 
function handleCreate(dataForm) {

    fetch(courseApi, optionMethodsFetch('POST', dataForm))
        .then(response => response.json())
        .then(value => {
            // return phần tử vừa thêm 
            // console.log(value);
            listCourse.innerHTML += stringHtml(value);
        })
}

// delete 
function deleteData(id){ 
     fetch(courseApi + '/' + id, optionMethodsFetch('DELETE'))
        .then(response => response.json())
        .then(value => {
            document.getElementById('course-'+ id).remove();
        })
}

// option method fetch
function optionMethodsFetch(methods, data) {
    if (methods === 'POST') {
        return {
            method: methods,
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        }
    } else {
        return {
            method: methods,
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        }
    }
}