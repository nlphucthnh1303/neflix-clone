# 🎬 NEFLIX-CLONE — Giao diện Xem Phim (Angular + Electron)

Một bản demo/khoá học nhỏ mô phỏng giao diện tương tự Netflix, xây dựng bằng Angular và thiết kế để dễ mở rộng, học tập và thử nghiệm các tính năng UI/UX xem phim.

---

## ✨ Mục tiêu dự án

- Xây dựng giao diện người dùng responsive cho trang xem phim.
- Thực hành cấu trúc ứng dụng Angular (components, services, routing).
- Tích hợp các thành phần như navbar, search, danh sách phim, flash cards thông tin phim.
- Luyện tập kết nối tới API phim (TMDB) qua `tmdb.service.ts` và xử lý state cơ bản.

---

## 📚 Tính năng chính

- Thanh điều hướng (search, logo, user actions).
- Trang chủ với các stripe danh sách phim theo thể loại.
- Component `movie-card` hiển thị poster, điểm đánh giá và tương tác hover.
- Modal hoặc phần thông tin chi tiết phim (`more-infos`) khi chọn phim.
- Tìm kiếm phim theo từ khoá với component `search`.
- Cấu trúc service `tmdb.service.ts` để gọi API và model hoá dữ liệu.

---

## 🛠️ Tech Stack

- **Framework:** Angular
- **Styling:** SCSS (project hiện tại), có thể chuyển sang Tailwind nếu muốn
- **API phim:** TMDB (The Movie Database)
- **State:** Services + RxJS / Signals (tuỳ nhu cầu)

---

## 🏗️ Cấu trúc dự án (tóm tắt)

```text
src/
├── app/
│   ├── navbar/
│   ├── home/
│   │   ├── main-content/
│   │   └── more-infos/
│   ├── search/
│   └── service/
│       ├── tmdb.service.ts
│       └── model/
└── assets/
```

Tham khảo các file chính: `app.component.ts`, `home.component.ts`, `movie-list.component.ts`, `movie-card.component.ts`, `tmdb.service.ts`.

---

## 🚀 Chạy dự án (Development)

### Yêu cầu

- Node.js 18+ và `npm` hoặc `yarn`.

### Các bước

```bash
git clone <repo>
cd neflix-clone
npm install
# Chạy Angular dev server
npm run start
```

Gợi ý: nếu repo có script `electron` hoặc `dev`, dùng tương ứng.

---

## ⚙️ Biến môi trường

- Nếu dùng API TMDB hoặc key ngoài, tạo file `.env` hoặc cấu hình environment files trong `src/environments/`:

```env
TMDB_API_KEY=your_tmdb_api_key
```

---

## 🧩 Hướng dẫn phát triển nhanh

- Thêm component mới: `ng generate component <name>`.
- Thêm service: `ng generate service service/<name>`.
- Kiểm thử component: viết spec trong `.spec.ts` tương ứng và chạy `npm run test`.

---

## 🤝 Đóng góp

- Fork → Tạo branch → Commit → Push → Pull request
- Viết unit test cho tính năng mới khi có thể.

---

## 📄 License

Kiểm tra `LICENSE` trong repo hoặc thêm giấy phép phù hợp (ví dụ MIT).

---

Muốn tôi chuyển file này thành `README.md`, thêm logo, hoặc dịch sang tiếng Anh không?
