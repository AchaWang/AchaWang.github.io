


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