// Hàm để lấy dữ liệu từ API
function fetchData() {
    return fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
        .then(response => response.json())
        .catch(error => {
            console.error('Lỗi khi truy xuất dữ liệu:', error);
        });
}

// Hàm để tạo HTML dựa trên dữ liệu đã lấy
function renderData() {
    fetchData().then(data => {
        const dataDisplay = document.getElementById('dataDisplay');

        if (data) {
            // Duyệt qua mỗi đối tượng trong dữ liệu
            for (const obj of data.data) {
                // Tạo một hàng trong bảng
                const row = document.createElement('tr');

                // Duyệt qua mỗi thuộc tính và tạo ô trong bảng
                Object.values(obj).forEach(value => {
                    const cell = document.createElement('td');
                    cell.textContent = value;
                    row.appendChild(cell);
                });

                // Thêm hàng vào tbody của bảng
                dataDisplay.appendChild(row);
            }
        }
    });
}

// Gọi hàm renderData khi trang được tải
document.addEventListener('DOMContentLoaded', renderData);
