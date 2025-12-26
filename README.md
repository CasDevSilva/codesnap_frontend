# CodeSnap Frontend

Web application that transforms code snippets into stylized, shareable images.

![CodeSnap Preview](https://codesnap-frontend.vercel.app/codesnap.png)

## 🚀 Live Demo

**Production:** [https://codesnap-frontend.vercel.app](https://codesnap-frontend.vercel.app)

## ✨ Features

- **Real-time Preview** - See your styled code as you type
- **Syntax Highlighting** - Support for 10+ languages via Prism.js
- **Customization Options:**
  - 8 color themes (Tomorrow, Dracula, Okaidia, etc.)
  - 3 font families
  - Adjustable padding
  - Custom background colors
  - Optional shadow effects
- **Share & Export:**
  - Generate shareable URLs (1-hour expiration)
  - Download as PNG
  - Copy code to clipboard
- **Local History** - Last 5 snippets saved in localStorage
- **Responsive Design** - Works on desktop and mobile

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | UI Framework |
| Vite 7 | Build Tool |
| TailwindCSS 3 | Styling |
| Prism.js | Syntax Highlighting |
| html2canvas | Image Generation |
| React Router 7 | Client-side Routing |
| Axios | HTTP Client |
| Lucide React | Icons |

## 📁 Project Structure

```
src/
├── components/
│   ├── editor/
│   │   ├── CodeEditor.jsx      # Code input with Prism highlighting
│   │   ├── StyleCustomizer.jsx # Theme/font/color controls
│   │   ├── ActionsEditor.jsx   # Generate/Clear buttons
│   │   └── Editor.jsx          # Editor container
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── History.jsx             # Snippet history sidebar
│   ├── Main.jsx
│   └── SnippetModal.jsx        # Post-generation modal
├── layouts/
│   └── MainLayout.jsx          # Shared layout with Header/Footer
├── pages/
│   ├── HomePage.jsx            # Main editor page
│   └── SnippetView.jsx         # Public snippet view (/snippet/:id)
├── services/
│   └── api.js                  # Axios instance & API calls
├── utils/
│   └── constants.js            # Languages, themes, fonts config
├── main.jsx                    # App entry point with routing
└── index.css                   # Global styles + Tailwind
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/codesnap-frontend.git
cd codesnap-frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start development server
npm run dev
```

### Environment Variables

```env
VITE_API_URL=http://localhost:3000/api
```

For production, set this to your backend URL:
```env
VITE_API_URL=https://codesnap-api.onrender.com/api
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 5173) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🌐 Deployment (Vercel)

1. Connect your GitHub repository to Vercel
2. Set environment variable: `VITE_API_URL`
3. Deploy

**Important:** Add `vercel.json` for SPA routing:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

## 🔗 API Endpoints Used

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/snippets/generate` | Create new snippet |
| GET | `/snippets/:id` | Get snippet metadata |
| GET | `/snippets/:id/image` | Get snippet image (PNG) |

## 📱 Supported Languages

JavaScript, Python, Java, Go, Rust, Bash, SQL, JSON, CSS, HTML (Markup)

## 🎨 Available Themes

Tomorrow, Okaidia, Twilight, Dark, Funky, Coy, Solarized Light, Default

## 📄 License

MIT

## 👤 Author

**Carlos Rimachi Silva**

- GitHub: [@CasDevSilva](https://github.com/CasDevSilva)