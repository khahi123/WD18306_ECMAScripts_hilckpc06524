fetch('https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students')
    .then(response => response.json())
    .then(data => {

        const dataList = document.getElementById('dataList');

        // Loop through the data and add rows to the table
        data.forEach(item => {
            const row = `<tr>
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td><img src="${item.avatar}"></td>
                        <td>${item.createdAt}</td>
                    </tr>`;
            dataList.innerHTML += row;
        });

    })
    .catch(error => console.error('Error fetching data:', error));