function getData(){
    fetch(
        "http://localhost:8080/api/cmt",
        {
            method: "GET",
            headers: {
                'Content-type': 'json/application'
            }
        }
    )
    .then(res => {
        return res.json();
    })
    .then(data => {
        const cmt = document.querySelector("#cmt");
        let cmtlist = data.map(item => {
            return `
            <div style = "display: flex">
                <div class="myclass-item text-small" id="myclass-item-text">
                    <input class="p-icon mb-2 cmt" id = "editcmt" readonly = "true">${item.cmt}</input>
                    <div class="myclass-item-head d-flex">
                        <a href="" class="mr-auto" rel="nofollow">
                            <span class="font-weight-bold">${item.id}</span>
                        </a>
                    </div>
                    <div class="myclass-item-body">
                        <p class="p-icon mb-2">
                            <i class="fa-solid fa-book"></i>
                            <b>${item.name}</b>
                        </p>
                        <p class="p-icon mb-2">
                            - 
                            ${item.time}
                        </p>
                        <p class="p-icon mb-2">
                            -
                            ${item.add}
                        </p>
                    </div>
                    <div class="text-right mt-3">
                    <button onclick = "editcmt('${item.id}')" class="btn btn-success">Sửa đánh giá</button>
                    </div>
                </div>
            </div>
            ` })
            cmt.innerHTML = cmtlist.join('');
    })
    .catch(err => {
        console.log("err: ", err);
    })
}
getData();
function editcmt(id){
    console.log(id);
}
function editcmt(id){
    const response = await fetch(`http://localhost:8080/api/cmt/${id}`,
    {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cmts)
    });
    // const element = document.querySelector('#editcmt');
    // const requestOptions = {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify()
    // };
    // fetch(`http://localhost:8080/api/cmt/${id}`, requestOptions)
        // .then(response => response.json())
        // .then(data => {
        //     element.innerHTML = data.updatedAt(){
    const data = await response.json();
                return `
                <form  method="POST">
                    <div class="form-group">
                        <label>${data.cmt}</label>
                        <input class="form-control" type="text" name='cmt'>${data.cmt}
                    </div>
                    <input id="update-btn" class="btn btn-primary" type="submit" value="SAVE">
                    <input id="update-btn" class="btn btn-secondary" type="button" value="DELETE" onclick="handleDeleteCmt('${data.id}')">
                </form>
            `;
        // }
        // });
}
// function editcmt(id){
//     fetch(`http://localhost:8080/api/cmt/${id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-type': 'json/application',
//                 body: JSON.stringify()
//             }
//         })
//         .then(res => res.json())
//         .then(data => {
//                 // Do some stuff...
//                 console.log("data:", data);
//                 const editcmt = document.querySelector("#cmt");
//                 editcmt.innerHTML = `
//                 <form  method="POST">
//                     <div class="form-group">
//                         <label>${data.cmt}</label>
//                         <input class="form-control" type="text" name='cmt' disabled>
//                     </div>
//                     <input id="update-btn" class="btn btn-primary" type="submit" value="SAVE">
//                     <input id="update-btn" class="btn btn-secondary" type="button" value="DELETE" onclick="handleDeleteCmt('${data.id}')">
//                 </form>
//             `;
//             getData()
//         })
//         .catch(err => console.log(err));
// }