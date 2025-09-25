


## 流程總結（React + GitHub Pages）
1. 用 Vite 建立 React 專案
2. 開發時跑 npm run dev
### 打包: 
3. npm run build → 產生 dist/
### ( 方法 1: ) 使用 gh-pages (把dist內的檔案推送到 branch: gh-pages)
4. 用 gh-pages 把 dist/ 部署到 GitHub Pages 
    ```bash
    npm run deploy
    ```
5. 開啟 GitHub Pages到 repo → Settings → Pages  , Source 選擇 gh-pages branch → /root  
6. 開啟網頁 (https://achawang.github.io/)


## 其他註記
npm install gh-pages --save-dev

指定要部署的目錄  
```=bash
gh-pages -d dist 
```

使用者網站（achawang.github.io）→ vite.config.js 裡的 base 要設成 /
專案展示網站（例如 achawang.github.io/myproject/）→ base 要設成 /myproject/  