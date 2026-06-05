# 🚀 VOCABTRAINER - Chinh Phục Từ Vựng Thông Minh

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![Electron](https://img.shields.io/badge/platform-Electron-blue.svg)]()
[![Angular](https://img.shields.io/badge/framework-Angular%2019-red.svg)]()
[![TailwindCSS](https://img.shields.io/badge/styling-TailwindCSS-38B2AC.svg)]()
[![AI](https://img.shields.io/badge/AI-Gemini%20Flash-orange.svg)]()

**VocabTrainer** là một ứng dụng Desktop hiện đại được thiết kế để tối ưu hóa việc học và ghi nhớ từ vựng. Bằng cách kết hợp thuật toán lặp lại ngắt quãng (Spaced Repetition) và trí tuệ nhân tạo (AI), ứng dụng mang lại trải nghiệm học tập cá nhân hóa, hiệu quả và không gây nhàm chán.

---

## ✨ Tính Năng Nổi Bật

- 🧠 **Thuật toán SM-2 (Spaced Repetition):** Tự động tính toán thời gian ôn tập lý tưởng dựa trên khả năng ghi nhớ của bạn, giúp từ vựng đi thẳng vào trí nhớ dài hạn.
- 🤖 **Tích hợp Gemini AI:** Tự động tạo các câu hỏi trắc nghiệm (MCQ) và các lựa chọn gây nhiễu (distractors) thông minh, giúp bài tập thực hành sát với thực tế.
- 🗂️ **Quản lý Topic thông minh:** Tổ chức từ vựng theo các chủ đề hoặc danh sách TOEIC chuyên sâu.
- 📉 **Thống kê & Báo cáo:** Theo dõi tiến độ học tập qua các biểu đồ trực quan, biết chính xác bạn đã thuộc bao nhiêu từ.
- 💡 **Flashcards sinh động:** Giao diện học tập tối giản, tập trung vào sự tập trung (Deep Learning).
- 📥 **Import Excel:** Nhanh chóng thêm hàng trăm từ vựng từ tệp Excel chỉ trong vài giây.

---

## 🛠️ Tech Stack

| Thành phần | Công nghệ sử dụng |
| :--- | :--- |
| **Frontend Framework** | [Angular 19+](https://angular.io/) |
| **Desktop Engine** | [Electron.js](https://www.electronjs.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Database** | [Google Firebase Firestore](https://firebase.google.com/) |
| **AI Integration** | [Google Gemini Flash 2.0](https://ai.google.dev/) |
| **State Management** | Angular Signals |

---

## 🏗️ Cấu Trúc Dự Án

```text
VocabTrainer/
├── src/
│   ├── app/                # Root component & routing
│   ├── components/         # Các UI components (Dashboard, Practice, Flashcards...)
│   ├── services/           # Logic xử lý dữ liệu, API Gemini, Firebase
│   ├── models/             # Định nghĩa interfaces & types (Vocabulary, Topic...)
│   └── assets/             # Hình ảnh & tài nguyên tĩnh
├── main.js                 # Electron main process
├── forge.config.js         # Cấu hình Electron Forge để build/package
├── angular.json            # Cấu hình Angular CLI
└── package.json            # Quản lý dependencies & scripts
```

---

## 🚀 Getting Started (Hướng dẫn cài đặt)

### Điều kiện tiên quyết
- [Node.js](https://nodejs.org/) (Phiên bản 18 trở lên)
- [NPM](https://www.npmjs.com/) hoặc [Yarn](https://yarnpkg.com/)

### Các bước cài đặt

1. **Clone repository:**
   ```bash
   git clone https://github.com/yourusername/VocabTrainer.git
   cd VocabTrainer
   ```

2. **Cài đặt các thư viện bổ trợ:**
   ```bash
   npm install
   ```

3. **Cấu hình biến môi trường:**
   Tạo file `.env` hoặc cấu hình biến môi trường trong hệ thống để sử dụng AI:
   ```env
   API_KEY=YOUR_GEMINI_API_KEY
   ```

---

## 💻 Cách Sử Dụng (Usage)

### Môi trường phát triển (Development)
Chạy ứng dụng trong chế độ Electron Dev:
```bash
npm run electron
```
*Lệnh này sẽ build Angular project và khởi chạy cửa sổ Electron.*

### Build bản chính thức (Production)
Tạo bản cài đặt cho Windows/Mac/Linux:
```bash
npm run make
```

### Ví dụ Code Block (Gemini Service)
Ứng dụng sử dụng Gemini để tạo các lựa chọn sai (distractors) một cách thông minh:
```typescript
async generateDistractors(correctItem: VocabularyItem, count: number) {
  const prompt = `Generate ${count} incorrect choices for the word "${correctItem.word}"...`;
  const result = await this.ai.generateContent(prompt);
  // ... xử lý kết quả
}
```

---

## 🤝 Contributing

Chúng tôi luôn hoan nghênh mọi đóng góp để hoàn thiện dự án!

1. **Fork** dự án này.
2. Tạo một **Branch** mới (`git checkout -b feature/AmazingFeature`).
3. **Commit** thay đổi của bạn (`git commit -m 'Add some AmazingFeature'`).
4. **Push** lên branch (`git push origin feature/AmazingFeature`).
5. Mở một **Pull Request**.

---

## 📄 License

Dự án này được cấp phép theo **MIT License**. Xem file `LICENSE` để biết thêm chi tiết.

---
*Phát triển với ❤️ bởi **[Tên của bạn/Team]***
