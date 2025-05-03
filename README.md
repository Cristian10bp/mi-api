# Mi API

## 🚀 Instalación

```bash
npm install
npm start
```

## 🧪 Pruebas

```bash
npm test
```

## 📏 Linter

```bash
npm run lint
```

## 🐳 Docker

```bash
docker build -t mi-api .
docker run -p 3000:3000 mi-api
```

## 🔐 Seguridad (Trivy)

```bash
trivy image mi-api
```

## ⚙️ CI

Este repositorio incluye un pipeline de GitHub Actions que ejecuta:

- Linter
- Pruebas
- Trivy

Solo se permite merge si el CI pasa.
