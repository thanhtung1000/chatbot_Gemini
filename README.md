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

> Lưu ý: Không commit API key thật lên GitHub (xem mục Bảo mật).

### Chạy dự án cục bộ
Khuyến nghị chạy qua HTTP thay vì mở trực tiếp file `.html`.

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

### Triển khai GitHub Pages
1. Push mã nguồn lên GitHub.
2. Vào repo → Settings → Pages → Source: chọn `Deploy from a branch`.
3. Chọn `main` và thư mục gốc `/root`, Save.
4. Truy cập link GitHub Pages sau khi build xong.

> Quan trọng: GitHub Pages là public. Không để API key thật trong repo. Xem giải pháp ở phần Bảo mật.

### Bảo mật (rất quan trọng)
- Frontend thuần (tĩnh) KHÔNG thể giữ bí mật API key. Nếu để key trong `script.js`, bất kỳ ai cũng có thể xem.
- Khi public:
  - Thay `API_KEY` thành placeholder (ví dụ `"YOUR_API_KEY"`) trước khi push.
  - Tạo backend/proxy riêng để gọi Gemini thay cho trình duyệt, ví dụ Cloudflare Worker, Vercel Function, hoặc server Node/Java/Python của bạn. Trình duyệt sẽ gọi tới proxy, proxy mới gọi Gemini bằng secret thật ở server.

### Tuỳ biến nhanh
- Logo/tên app: Sửa phần header trong `index.html` (`.chat-header`).
- Màu sắc/bo góc: Chỉnh trong `style.css` (các lớp `.message`, `.chat-container`, v.v.).
- Model/endpoint: Sửa trong `script.js` hàm `callGeminiAPI`.

### Công nghệ
- HTML/CSS/JS thuần.
- Google Generative Language API (Gemini).

### Ghi chú chi phí
- Gọi API có thể tính phí theo quota/tài khoản của bạn. Kiểm tra hạn mức trong Google AI Studio.

### Giấy phép
- Tùy chọn: MIT hoặc theo nhu cầu của bạn.
<img width="1045" height="516" alt="image" src="https://github.com/user-attachments/assets/b8583f47-cc18-4e04-8774-53a009571dcc" />
