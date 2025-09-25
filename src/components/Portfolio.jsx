import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';

// Usage notes (放在檔案最上方以便快速上手):
// 1. 此檔可放在 create-react-app / Vite 專案的 src/components/Portfolio.jsx
// 2. 需要 Tailwind CSS (本範例使用 Tailwind 工具類別)
// 3. 安裝相依：
//    npm install framer-motion lucide-react
// 4. 可把此檔作為 App.jsx 的預設頁面或路由中的一頁

export default function Portfolio() {
  const [dark, setDark] = useState(false);

  const projects = [
    {
      title: '即時封包分析器',
      desc: '使用 Rust + WebAssembly 建立的輕量即時封包視覺化儀表板',
      tags: ['Rust', 'WASM', 'WebSocket'],
      repo: '#'
    },
    {
      title: '分布式日誌收集系統',
      desc: '基於 Kafka 與 ElasticSearch 的高可用日誌平台',
      tags: ['Kafka', 'ElasticSearch', 'Docker'],
      repo: '#'
    },
    {
      title: '自動化滲透測試工具',
      desc: '模組化腳本 + CI 管線自動化測試報告',
      tags: ['Python', 'CI', 'Kali'],
      repo: '#'
    }
  ];

  const skills = ['React', 'Node.js', 'Docker', 'Kubernetes', 'Linux', 'Python', 'Networking'];

  return (
    <div className={dark ? 'min-h-screen bg-neutral-900 text-neutral-100' : 'min-h-screen bg-white text-neutral-900'}>
      <div className="max-w-5xl mx-auto p-6">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div>
            <motion.h1
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-3xl md:text-4xl font-semibold"
            >
              王小明 · 資訊工程師
            </motion.h1>
            <p className="text-sm opacity-70">系統設計 / 後端工程 / 自動化測試</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-2xl shadow-sm hover:shadow-md transition-all"
              aria-label="切換深色模式"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <nav className="flex items-center gap-3">
              <a href="#projects" className="text-sm px-3 py-2 rounded-lg hover:bg-neutral-100/30">Projects</a>
              <a href="#skills" className="text-sm px-3 py-2 rounded-lg hover:bg-neutral-100/30">Skills</a>
              <a href="#contact" className="text-sm px-3 py-2 rounded-lg hover:bg-neutral-100/30">Contact</a>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section className="grid md:grid-cols-3 gap-6 items-center mb-10">
          <div className="md:col-span-2">
            <motion.p initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4 }} className="text-lg md:text-xl leading-relaxed">
              我是資安與系統工程背景的軟體工程師，專注於大規模系統設計、效能優化與自動化測試。
              喜歡把複雜問題拆解成模組化的工程解法，並用程式與基礎設施自動化來減少重複性工作。
            </motion.p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a href="#projects" className="px-4 py-2 rounded-2xl bg-neutral-100/20 border border-neutral-200/20">查看作品集</a>
              <a href="#contact" className="px-4 py-2 rounded-2xl bg-indigo-600 text-white shadow">聯絡我</a>
            </div>
          </div>

          <div className="p-4 rounded-2xl shadow-lg border border-neutral-200/10">
            <div className="w-full h-48 md:h-56 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-cyan-400 rounded-xl text-white">
              <div className="text-center">
                <div className="text-2xl font-medium">王小明</div>
                <div className="text-sm opacity-80">資深資訊工程師 · 系統設計</div>
                <div className="mt-3 flex gap-3 justify-center">
                  <a href="#" aria-label="github"><Github size={18} /></a>
                  <a href="#" aria-label="linkedin"><Linkedin size={18} /></a>
                  <a href="#contact" aria-label="mail"><Mail size={18} /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">作品集</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {projects.map((p, idx) => (
              <motion.article key={idx} whileHover={{ y: -6 }} className="p-4 rounded-2xl shadow-md border border-neutral-200/10 bg-gradient-to-tr from-white/60 to-neutral-50/40">
                <h3 className="font-medium text-lg">{p.title}</h3>
                <p className="text-sm opacity-80 mt-2">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full border">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <a href={p.repo} className="text-sm px-3 py-1 rounded-lg hover:underline">Repo</a>
                  <button className="text-sm px-3 py-1 rounded-lg bg-neutral-100/20">更多</button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Skills & Tools */}
        <section id="skills" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">技能</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <div key={s} className="p-2 px-3 rounded-2xl border shadow-sm text-sm">{s}</div>
            ))}
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl shadow-inner border"> 
              <h4 className="font-medium">專長領域</h4>
              <ul className="mt-2 list-disc ml-5 text-sm opacity-80">
                <li>高可用系統設計</li>
                <li>CI/CD 自動化與測試</li>
                <li>網路協定分析與資安測試</li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl shadow-inner border">
              <h4 className="font-medium">每日工具</h4>
              <div className="mt-2 flex flex-wrap gap-2 text-sm">
                <span className="px-2 py-1 border rounded">Docker</span>
                <span className="px-2 py-1 border rounded">tmux</span>
                <span className="px-2 py-1 border rounded">VSCode</span>
                <span className="px-2 py-1 border rounded">git</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">聯絡我</h2>
          <div className="p-4 rounded-2xl shadow-md border max-w-2xl">
            <form className="grid gap-3">
              <input className="p-2 rounded-lg border" placeholder="你的姓名" />
              <input className="p-2 rounded-lg border" placeholder="電子信箱" />
              <textarea className="p-2 rounded-lg border" placeholder="簡短訊息" rows={4} />
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 rounded-2xl bg-indigo-600 text-white">送出</button>
                <button type="button" className="px-4 py-2 rounded-2xl border">下載履歷</button>
              </div>
            </form>
          </div>
        </section>

        <footer className="text-sm opacity-70 text-center py-8">© {new Date().getFullYear()} 王小明 — Built with React</footer>
      </div>
    </div>
  );
}
