# Strapi × Next.js プラクティスアプリ

## 📦 概要

このプロジェクトは、Strapi（ヘッドレスCMS）と Next.js（Reactベースのフロントエンド）を使って、  
APIからデータを取得し一覧表示する基本構成を構築したものです。

フロントとバックエンドがそれぞれ独立したディレクトリに分かれており、開発やデプロイの分離も容易です。

---

## 🛠 ディレクトリ構成

```
strapi_practice/
├── frontend/         # Next.js（フロントエンド）
└── strapi-backend/   # Strapi（バックエンドAPI）
```

---

## ⚙️ セットアップ方法

### 1. このリポジトリをクローン

```bash
git clone https://github.com/RyoYamashiro/strapi-practice.git
cd strapi-practice
```

---

### 2. Strapi（バックエンド）のセットアップ

```bash
cd strapi-backend
npm install
npm run develop
```

- 初回起動時はブラウザで `http://localhost:1337/admin` を開いて、管理者ユーザーを作成してください。
- 「Content-Type Builder」から `Project` コレクションを作成します。

#### ✅ Projectコレクションのフィールド一覧

| フィールド名       | タイプ        | 備考                                  |
|--------------------|---------------|---------------------------------------|
| `docId`            | Text          | 一意（Unique）                        |
| `title`            | Text          | 必須（Required）                      |
| `projectStatus`    | Enumeration   | `in_progress`, `done`, `hold`         |
| `tags`             | Text (long)   | カンマ区切りで複数タグを記述可能       |
| `releasedDate`     | Date          | 公開日付                              |
| `isActive`         | Boolean       | 有効／無効                            |

#### ✅ 公開設定（APIアクセス許可）

`Settings → Roles → Public` から  
`Project` の `find` を ✅ にして保存します。

---

### 3. フロントエンドのセットアップ

```bash
cd ../frontend
npm install
npm run dev
```

- ブラウザで `http://localhost:3000` にアクセス
- Strapiで登録したプロジェクト一覧が表示されます🎉

---

## 🚀 開発補足

- Strapi側のAPIレスポンス構造は「フラット構造（attributesなし）」になっているため、
  Next.js側では直接 `item.docId` のようにアクセスしています。
- `data.db`（SQLite）は `.gitignore` で除外済。データは手動で追加してください。

---

## 📄 ライセンス

このプロジェクトは [MITライセンス](LICENSE) です。

---

## 📅 更新履歴

- 2025/05/26: 初期構成（Strapi + Next.js）完成＆プッシュ 🎉
