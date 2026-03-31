


## 流程總結（React + GitHub Pages）
0. 安裝 nvm
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    source ~/.bashrc
    nvm install 22
    nvm use 22
    node -v
    npm -v
    ```
1. 用 Vite 建立 React 專案
    ```bash
    npm create vite@latest achawang.github.io -- --template react
    cd achawang.github.io/
    npm install
    npm install gh-pages --save-dev
    ```
2. 開發時測試執行
    ```bash
    npm run dev
    ```
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
6. 若已經有設定 Custom Domain 要再設定一次 Domain 否則自動轉只會404 Not Found
7. 開啟網頁 (https://achawang.github.io/)

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
    ---

    ## github 開發佈署流程
    * 主要有三個branch
        * `gh-pages` 分支：只用來存放交給瀏覽器執行的打包編譯後靜態檔案（由 Vite 生成的 dist 目錄內容）。不需要、也不應該手動編輯這個分支，而是靠自動指令來更新它。
        * `main` 分支：用來存放正式的原始碼。
        * `dev` 分支：用來存放開發的原始碼（如 src/App.jsx、package.json 等等）。編輯與開發在這個分支上進行，再PR 到`main`
        
    ### 開發流程
    1. 切換到`main`分支，create `dev` 分支
        ```bash
        git checkout main
        git checkout -b dev
        ```
    2. 啟動本地開發環境來預覽
        ```bash
        npm run dev
        ```
        這時候會在本機的瀏覽器開啟一個 http://localhost: 開頭的網址，你可以邊改程式碼（通常是 src/ 底下的檔案）邊看即時變更結果
    3. 開發告一段落後，把 `dev` 分支的變更合併回 `main` 分支
        ```bash
        git add .
        git commit -m "Add new feature"
        git push origin dev
        ```
    4. 回到 `main` 分支，把 `dev`   
    分支的變更merge 到 `main`把`main``push到`origin/main`
        ```bash
        git checkout main
        git pull origin main 
        git merge dev
        git push origin main
        ```
    
    ### 部屬流程
    1. 切換到`main`分支
        ```bash
        git checkout main
        ```
    2. 把`main`push到`origin/main`
        ```bash
        git push origin main
        ```
    3.  執行打包指令，把打包後的檔案（dist/）自動推送到 gh-pages 分支
        ```bash
        npm run deploy
        ```
        * 它會先自動觸發 npm run build，將所有 React 程式碼打包為純前端能懂的極致壓縮檔案，全部放在隱藏的 dist 資料夾內。
        * 接著它會自動接手，將你剛剛產生的 dist 目錄內容，強制覆蓋推送到 Github 上的 gh-pages 分支。
    4. 到 GitHub 專案頁面 → Settings → Pages，確認 Source 是 gh-pages 分支，如果 Custom domain 之前有設定過，記得重新設定一次，否則自動轉址會失敗。