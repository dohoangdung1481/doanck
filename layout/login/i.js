// Lấy giá trị của input tên đăng nhập
const usernameInput = document.querySelector("input[type='text']");

// Khi click vào input checkbox "Đăng ký"
document.querySelector("#is_register").addEventListener("click", () => {
  // Nếu checkbox được chọn
  if (document.querySelector("#is_register").checked) {
    // Hiển thị form đăng ký
    document.querySelector(".form-register").style.display = "block";
  } else {
    // Ẩn form đăng ký
    document.querySelector(".form-register").style.display = "none";
  }
});
