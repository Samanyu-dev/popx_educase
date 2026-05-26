# PopX App - React JS Mobile Settings Flow

An interactive, pixel-perfect React JS replication of the **PopX** mobile application settings flow, designed as a qualifier assignment. The mobile App interface is centered responsively inside a physical-looking smartphone browser mockup frame, offering a highly tactile and immersive user experience.

Design Reference: [Adobe XD Design Link](https://xd.adobe.com/view/b68eea25-003d-4a5d-8fdd-d463eeb20b32-e3dd)  
Demo Reference: [PopX Vercel Demo](https://popx-app-ecru.vercel.app/)

---

## 📱 Visual Showcase & Key Features

This application comprises four seamlessly integrated, animated mobile views:

1. **Welcome Screen**:
   - Clean, modern layout presenting the brand introduction.
   - Dual actions: **Create Account** (Violet Brand Button) and **Already Registered? Login** (Soft Lavender Button) mapping to their respective views.
2. **Signin Screen**:
   - Semantic HTML forms fully optimized for browser secure password managers and autocomplete behavior (`autocomplete="username"`, `autocomplete="current-password"`).
   - Dynamic button transitions: The login trigger starts as a disabled slate grey button (matching the empty XD screen design) and reactive transitions to bright active brand violet once both fields are populated.
3. **Signup Screen**:
   - Comprehensive form inputs (Full Name*, Phone number*, Email address*, Password*, Company name) pre-loaded with Marry Doe placeholders matching the XD screenshot states to keep the initial rendering pixel-perfect, while remaining fully interactive and editable.
   - Customized brand agency selection radio elements with responsive custom indicator icons.
4. **Account Settings / Profile Screen**:
   - Dedicated title bar header styled on top of the layout.
   - Profile settings details utilizing a high-quality professional close-up avatar generated for "Marry Doe" with an absolute edit overlay camera button.
   - Layout elements partitioned via customized dashed separating borders matching original screenshots.
   - Includes a visual logout option to clear sessions and transition back to the welcome interface.

---

## 🛠️ Tech Stack & Design Choices

- **Core Library**: [React.js](https://react.dev/) (Vite-scaffolded for lightning-fast HMR)
- **Styling Architecture**: Vanilla CSS (Using high-quality CSS variables, fluid transitions, and Google Font **Outfit** to emulate premium circular sans-serif typography)
- **Asset Generation**: A customized high-fidelity professional portrait (`public/avatar.png`) represents "Marry Doe" without low-quality standard placeholders.
- **Float-in-Border CSS Input Labels**:
  Rather than standard forms, input containers feature custom CSS absolute rules: labels are centered vertically exactly across the top border line of the input fields, visually breaking the border segment to deliver a unique modern visual identity.

---

## 📂 Project Structure

```
popx_educase/
├── public/
│   ├── avatar.png       # Generated high-quality profile picture asset
│   └── favicon.svg      # Styled brand icon
├── src/
│   ├── components/
│   │   ├── WelcomeScreen.jsx  # Landing/Welcome Screen
│   │   ├── LoginScreen.jsx    # Signin Screen with validation
│   │   ├── SignupScreen.jsx   # Interactive signup forms & radio triggers
│   │   └── ProfileScreen.jsx  # Account Settings view with dashed partitions
│   ├── App.css          # Clean wrapper configurations
│   ├── App.jsx          # Hub routing state and device mockup wrapper
│   ├── index.css        # Core styling variables, fonts, input & button systems
│   └── main.jsx         # App mounting entrypoint
├── index.html           # Document wrapper with meta SEO tags
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite bundler parameters
```

---

## 🚀 Getting Started Locally

Follow these steps to run the project in your local development environment:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18+ is recommended).

### Installation
1. Clone this repository (or unzip the project folder):
   ```bash
   git clone <repository-link>
   cd popx_educase
   ```

2. Install the necessary packages:
   ```bash
   npm install
   ```

3. Launch the local development hot-reloading server:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to the local address displayed (typically `http://localhost:5173`).

### Production Compilation
To bundle the optimized assets for hosting services such as Vercel, Netlify, or similar providers, run:
```bash
npm run build
```
This outputs compiled static assets inside the `dist/` directory, optimized and zipped in less than 500ms.
