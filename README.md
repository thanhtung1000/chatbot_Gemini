## Chatbot Gemini – Giao diện web đơn giản, hiện đại

Ứng dụng web trò chuyện với Google Gemini, giao diện hiện đại, hỗ trợ Light/Dark mode, avatar bot, typing indicator và empty state thân thiện.

### Tính năng
- **Giao diện**: Header có trạng thái trực tuyến, avatar 🤖, nút đổi theme 🌙/🌞.
- **Bong bóng chat**: Căn phải cho người dùng, có avatar cho bot.
- **Typing indicator**: Hiển thị đang soạn khi chờ phản hồi.
- **Empty state**: Gợi ý thân thiện khi chưa có tin nhắn.
- **Light/Dark mode**: Nhớ lựa chọn bằng `localStorage`.
- **Responsive**: Hiển thị tốt trên máy tính và di động.

### Yêu cầu
- Trình duyệt hiện đại (Chrome/Edge/Firefox/Safari).
- API Key của Google AI Studio (Gemini).

### Cấu hình API Key
Mở file `script.js` và thay giá trị API key:

```js
// script.js
const API_KEY = "YOUR_API_KEY"; // Thay bằng API Key của bạn
```

- Cách 1: VS Code + Live Server
  - Cài extension “Live Server”.
  - Click “Go Live” ở góc phải hoặc chuột phải `index.html` → “Open with Live Server”.

- Cách 2: Python (nếu đã cài)
```powershell
cd Appchatbox_Gemini
python -m http.server 5173
# Mở trình duyệt: http://localhost:5173
```

- Cách 3: Node (không cần cấu hình)
```powershell
cd Appchatbox_Gemini
npx serve -s . --listen 5173
# Mở trình duyệt: http://localhost:5173
```

### Công nghệ
- HTML/CSS/JS thuần.
- Google Generative Language API (Gemini).

### Giấy phép
- Tùy chọn: MIT hoặc theo nhu cầu của bạn.
<img width="1045" height="516" alt="image" src="https://github.com/user-attachments/assets/b8583f47-cc18-4e04-8774-53a009571dcc" />
