userId();
const url = "https://jsonplaceholder.typicode.com/comments";
table = document.querySelector('table');
async function userId() {
    const response = await fetch(url);
    const data = await response.json();
    await data.forEach(element => {
        const {postId, id, name, email, body} = element;
        if( element.id <= 30 ) {
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
userId();