//bài 1: Quản lý tuyển sinh
document.getElementById('btnKetQua').onclick = function () {
    var diemChuan = Number(document.getElementById('diemChuan').value);
    var khuVuc = Number(document.getElementById('khuVuc').value);
    var doiTuong = Number(document.getElementById('doiTuong').value);
    var diemMon1 = Number(document.getElementById('diemMon1').value);
    var diemMon2 = Number(document.getElementById('diemMon2').value);
    var diemMon3 = Number(document.getElementById('diemMon3').value);


    var tongDiem = 0;
    tongDiem = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong;
    if (tongDiem >= diemChuan) {
        ketQua = 'Bạn đã đậu';
    } else if (diemMon1 <= 0 || diemMon2 <= 0 || diemMon3 <= 0) {
        ketQua = 'Bạn đã trượt';
    } else {
        ketQua = 'Bạn đã trượt';
    }
    document.getElementById('ketQua').innerHTML = ketQua + 'Tổng điểm' + tongDiem;
}

//bài 2: tính tiền điện
document.getElementById('btnTinhTien').onclick = function () {
    var hoTen = document.getElementById('hoTen').value;
    var soKW = document.getElementById('soKW').value;

    var tinhTien = 0;
    if (soKW <= 50) {
        tinhTien = soKW * 500;
    } else if (soKW >= 51 && soKW <= 100) {
        tinhTien = (50 * 500) + (soKW - 50) * 650;
    } else if (soKW >= 101 && soKW <= 150) {
        tinhTien = (101 * 650) + (soKW - 101) * 650;
    } else {
        tinhTien = 150 * 650;
    }

    document.getElementById('ketQua_1').innerHTML = 'Họ tên ' + hoTen + ', Tiền điện: ' + tinhTien;
}
