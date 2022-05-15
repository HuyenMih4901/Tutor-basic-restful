function getData() {
    fetch(
        "http://localhost:8080/api/classdetail",
        {
            method: 'GET',
            headers: {
                'Content-type': 'json/application'
            }
        }
    )
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log("data:", data);
            const classlist = document.querySelector("#class-list");
            let list = [];
            list = data.map(item => {
                return `
                    <div class="myclass-item text-small" id = "myclass-item-text">
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
                                ${item.price}
                            </p>
                            <p class="p-icon mb-2">
                                -
                                ${item.time}
                            </p>
                            <p class="p-icon mb-2">
                                <i class="fa-solid fa-location-dot"></i>
                                ${item.add}
                            </p>
                            <p class="p-icon mb-2">
                                Yêu cầu: 
                                ${item.des}
                            </p>
                            <div class="text-right mt-3">
                                <a href="classdetail.html?id=${item.id}" class="btn btn-success">Xem chi tiết</a>
                            </div>
                        </div>
                    </div>
            `;
            });
            classlist.innerHTML = list.join('');
        })
        .catch(err => {
            console.log("err: ", err);
        })
}

function search(e) {
    console.log("searching...");
    const input = document.querySelector(".search-input").value;
    console.log("input: ", input);
    fetch(
        `http://localhost:8080/api/classdetail/${input}`,
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
            if (data) {
                console.log("data:", data);
                const findclass = document.querySelector("#search");
                findclass.innerHTML = `
                    <h5 class="text-primary">Kết quả</h5>
                        <div class="myclass-item text-small" id = "myclass-item-text">
                            <div class="myclass-item-head d-flex">
                                <a href="" class="mr-auto" rel="nofollow">
                                    <span class="font-weight-bold">${data.id}</span>
                                </a>
                            </div>
                            <div class="myclass-item-body">
                                <p class="p-icon mb-2">
                                    <i class="fa-solid fa-book"></i>
                                    <b>${data.name}</b>
                                </p>
                                <p class="p-icon mb-2">
                                    -
                                    ${data.price}
                                </p>
                                <p class="p-icon mb-2">
                                    -
                                    ${data.time}
                                </p>
                                <p class="p-icon mb-2">
                                    <i class="fa-solid fa-location-dot"></i>
                                    ${data.add}
                                </p>
                                <p class="p-icon mb-2">
                                    Yêu cầu: 
                                    ${data.des}
                                </p>
                                <div class="text-right mt-3">
                                    <a href="" class="btn btn-success"
                                        rel="nofollow">Xem chi tiết</a>
                                </div>
                            </div>
                        </div>
                `;
            }                                                
            else {
                alert("Not found")
            }
        })
}