const url = "https://jsonplaceholder.typicode.com/comments";
table = document.querySelector('table');
const method = "GET";
const async = true;
const request = new XMLHttpRequest();
request.open(method, url, async);
request.onload = () => {
    const data = JSON.parse(request.response);
    data.forEach(element => {
        const {postId, id, name, email, body} = element;
       if(element.id <= 30) {
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
}
request.send();