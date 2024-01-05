fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {

                const dataList = document.getElementById('dataList');

                // Loop through the data and add rows to the table
                const row = `<tr>
                            <td><img style="width: 200px;"src="${data.message}"></td>
                            <td>${data.status}</td>
                        </tr>`;
                dataList.innerHTML += row;

            })
            .catch(error => console.error('Error fetching data:', error));