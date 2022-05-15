// let deleBook;
function getData() {
    fetch(
        "http://localhost:8080/api/book",
        {
            method: 'GET',
            headers: {
                'Content-type': 'json/application'
            }
        },
    )
        .then(res => {
            return res.json();
        })
        .then(data => {
            const book = document.querySelector("#book");
            // let books = [];
            
            let books = data.map(item => {
                return `
                        <div class="file-item-text">
                            <h2 class="file-item-title">${item.id}</h2>
                            <div class = "file-item-des">
                                <p class="mt-1"><b>Tên tài liệu:</b> ${item.name}</p>
                                <p class="mt-1"><b>Môn học:</b> ${item.subject}</p>
                                <p class="mt-1"><b>Cấp học:</b> ${item.level}</p>
                                <button class = "view btn">Xem tài liệu</button>
                                <button class = "del btn" onclick="delBook('${item.id}')">Xóa tài liệu</button>
                            </div>
                        </div>
            `;

            });

            book.innerHTML = books.join('');

        })
        .catch(err => {
            console.log("err: ", err);
        })
}
// const handleDelete = (id) =>{
//     console.log((id));
// }
getData();
function delBook(id) {
    let result = confirm("Want to delete?");
    if(result){
    
        fetch(`http://localhost:8080/api/book/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'json/application'
            }
        })
            .then(res => res.json())
            .then(data => {
                // Do some stuff...
                getData()
            })
            .catch(err => console.log(err));
    }
    
}