const url = "https://jsonplaceholder.typicode.com/comments";
table = document.querySelector('table');
fetch(url)
.then(response => response.json())
.then(data =>{
    data.forEach(element => {
       if(element.id <= 30) {
        const {postId, id, name, email, body} = element;
        table.innerHTML +=
        `
            <tr>
                <td>${postId}</td>
                <td>${id}</td>
                <td>${name}</td>
                <td>${email}</td>
                <td>${body}</td>
            </tr>
        `
       }
    });
})
.catch( () => console.error("data is not success"))
.finally ( () => console.log("this code aways execut!") );