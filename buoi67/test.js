$(document).ready(function(){
    $('#addStudentForm').submit(function(e){
        e.preventDefault();
        var ma = $('#ma').val();
        var ten = $('#ten').val();
        var email = $('#email').val();
        var ngaysinh = $('#ngaysinh').val();
        var gioitinh = $('input[name="gioitinh"]:checked').val();
        var newRow = `<tr>
            <td>${ma}</td>
            <td>${ten}</td>
            <td>${email}</td>
            <td>${ngaysinh}</td>
            <td>${gioitinh}</td>
            <td>                
                <a href="#editEmployeeModal" class="edit-btn" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i><span>Sửa</span></a>
			    <a href="#deleteEmployeeModal" class="delete-btn" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i><span>Xóa</span></a>
            </td>
        </tr>`;
        $('#studentTable tbody').append(newRow);
        this.reset();
    });

    // Xóa sinh viên
    $('#studentTable').on('click', '.delete-btn', function(){
        $(this).closest('tr').remove();
    });

    // Sửa sinh viên
    $('#studentTable').on('click', '.edit-btn', function(){
        var row = $(this).closest('tr');
        var ma = row.find('td').eq(0).text();
        var ten = row.find('td').eq(1).text();
        var email = row.find('td').eq(2).text();
        var ngaysinh = row.find('td').eq(3).text();
        var gioitinh = row.find('td').eq(4).text();
        // Đổ dữ liệu lên form
        $('#ma').val(ma);
        $('#ten').val(ten);
        $('#email').val(email);
        $('#ngaysinh').val(ngaysinh);
        if(gioitinh === 'Nam') {
            $('#nam').prop('checked', true);
        } else {
            $('#nu').prop('checked', true);
        }
        // Xóa dòng cũ
        row.remove();
        // Khi submit sẽ thêm lại dòng mới
    });
});
