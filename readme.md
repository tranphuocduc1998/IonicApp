# Thông tin ứng dụng
  Người thực hiện Bùi Văn Chuyên

# Câu lệnh chạy ứng dụng
  Thực hiện chạy lên 3 nền tảng: browser, android, ios

## Chạy trên android
  Các điều kiện bắc buộc
  - 1) [Cài đặt nodejs](https://nodejs.org/en/download/)
  - 2) [Cài đặt ionic framework](https://ionicframework.com/docs/intro/cli)
  - 3) [Cài đặt android  studio](https://developer.android.com/studio)
  - 4) [Cài đặt java](https://www.java.com/download/ie_manual.jsp)
  - 5) Kiểm tra các cài đặt xác nhận hoàn thành các cài đặt trên máy

**Tạo folder android và ios**
  Tạo folder android: `ionic capacitor add android`
  Tạo folder ios: `ionic capacitor add ios`

**Chạy debug trên android**
  Bước 1: Kết nối thiết bị di động android hoặc mở máy ảo từ android studio
  Bước 2: Chạy câu lệnh `ionic cap run android` (Nếu chạy liên tục `ionic cap run android -l --external`)

**Build file terminal**
  Android: `ionic capacitor build android`,
  ios (MacOs): `ionic capacitor build android`
  Build cả 2: `ionic capacitor build`



