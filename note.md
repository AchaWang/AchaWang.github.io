


## 流程總結（React + GitHub Pages）
1. 用 Vite 建立 React 專案
2. 開發時跑 npm run dev
### 打包: 
3. 產生 dist/
    ```bash
    npm run build
    ```
4. 執行 server 測試 dist
    ```bash
    npx serve dist
    ```
### 部屬 Push ( 方法 1) 使用 gh-pages (把dist內的檔案推送到 branch: gh-pages)
4. 用 gh-pages 把 dist/ 部署到 GitHub Pages 
    ```bash
    npm run deploy
    ```
5. 開啟 GitHub Pages到 repo → Settings → Pages  , Source 選擇 gh-pages branch → /root  
6. 開啟網頁 (https://achawang.github.io/)

## Custom domain
1. 專案新增一個CNAME檔案
    ```=bash
    me.achawang.com
    ```
2. 到DNS Provider 新增四條 A Record
    ```=bash
     me   A   185.199.108.153
     me   A   185.199.109.153
     me   A   185.199.110.153
     me   A   185.199.111.153
    ```
3. 設定 GitHub Pages  
進入 GitHub Repo → Settings → Pages。  
在 Custom domain 欄位填入 me.achawang.com。  
勾選 Enforce HTTPS（如果 Cloudflare/Let's Encrypt 憑證生成成功）。  
## 其他註記
npm install gh-pages --save-dev

指定要部署的目錄  
```=bash
gh-pages -d dist 
```

使用者網站（achawang.github.io）→ vite.config.js 裡的 base 要設成 /
專案展示網站（例如 achawang.github.io/myproject/）→ base 要設成 /myproject/  



## 安裝 Tailwind CSS 
1. 安裝 Tailwind CSS
    ```=bash
    npm install tailwindcss @tailwindcss/vite
    ```
2. 加入te.config.js 加入
    ```bash
    import tailwindcss from '@tailwindcss/vite'
    ```
    ```bash
    export default defineConfig({
    plugins: [react(),
        tailwindcss(),
    ],
    base: '/', // 使用者網站 (achawang.github.io) 要設成 '/'
    })
    ```
3. index.css 加入
    ```bash
    @import "tailwindcss";
    ```
4. 測試
    ```bash
    npm run dev
    ```
5. html 中使用 Tailwind CSS
    ```bash
    <!doctype html>
    <html>
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/src/style.css" rel="stylesheet">
    </head>
    <body>
    <h1 class="text-3xl font-bold underline">
        Hello world!
    </h1>
    </body>
    </html>
    ```