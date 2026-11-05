# 🎬 Disney+ Clone (React + Vite + Tailwind CSS)

Clon de la interfaz de **Disney+** desarrollado con **React**, **Vite** y **Tailwind CSS**, consumiendo datos reales de películas y tendencias en tiempo real desde la API de **The Movie Database (TMDB)**. Cuenta con un diseño 100% **responsive** adaptado a dispositivos móviles, tablets, laptops y pantallas grandes.

---

## ✨ Características Principales

- **Header Responsivo:** Barra de navegación adaptable con menú completo en escritorio y menú desplegable compacto en dispositivos móviles y tablets.
- **Carrusel Principal (Hero Slider):** Banner panorámico estilo Disney+ con desplazamiento exacto (*scroll-snap*), fondo ambiental difuminado, degradado lateral y título/sinopsis de las películas en tendencia.
- **Casas Productoras (Production House):** Tarjetas interactivas de **Disney, Pixar, Marvel, Star Wars y National Geographic** que reproducen sus videos oficiales al pasar el cursor (*hover*).
- **Catálogo por Géneros:** Listas horizontales de películas clasificadas por género (Acción, Aventura, Animación, Comedia, Crimen, etc.) alternando entre tarjetas tipo póster vertical y tarjetas panorámicas horizontales.
- **Desplazamiento Fluido y Optimizado:** Animación de scroll sin *delay* mediante `requestAnimationFrame` y carga diferida (*lazy loading*) de imágenes optimizadas.
- **Listo para Contenedores:** Incluye configuración *multi-stage* con **Docker** y **Nginx** para despliegue inmediato.

---

## 🛠️ Tecnologías Utilizadas

- **Frontend:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) + `tailwindcss-no-scrollbar`
- **Iconos:** [React Icons](https://react-icons.github.io/react-icons/) (`hi`, `hi2`, `io5`)
- **Cliente HTTP:** [Axios](https://axios-http.com/)
- **API de Películas:** [TMDB API (The Movie Database)](https://www.themoviedb.org/)
- **Despliegue / Contenedores:** Docker, Docker Compose y Nginx

---

## 📂 Estructura del Proyecto

```text
React-DisneyClonePersonal/
├── public/
├── src/
│   ├── assets/
│   │   ├── Images/            # Logos de Disney+, Pixar, Marvel, Star Wars, NatGeo
│   │   └── Videos/            # Videos MP4 de fondo para las casas productoras
│   ├── Componets/
│   │   ├── Header.jsx         # Barra de navegación superior responsiva
│   │   ├── HeaderItem.jsx     # Ítems individuales del menú de navegación
│   │   ├── Slider.jsx         # Carrusel principal de películas en tendencia
│   │   ├── ProductionHouse.jsx# Tarjetas con video de las franquicias de Disney
│   │   ├── GenreMovieList.jsx # Sección de listas de películas por género
│   │   ├── MovieList.jsx      # Carrusel horizontal de películas con controles
│   │   ├── MovieCard.jsx      # Tarjeta de película vertical (póster)
│   │   └── HrMovieCard.jsx    # Tarjeta de película horizontal (backdrop + título)
│   ├── Constant/
│   │   └── GenresList.jsx     # Catálogo de IDs y nombres de géneros de TMDB
│   ├── Services/
│   │   └── GlobalApi.jsx      # Configuración de Axios y peticiones a TMDB API
│   ├── App.jsx                # Componente principal de la aplicación
│   └── main.jsx               # Punto de entrada de React
├── Dockerfile                 # Construcción multi-stage (Node 18 + Nginx)
├── docker-compose.yml         # Orquestación rápida del contenedor
├── tailwind.config.js         # Configuración de Tailwind CSS
└── package.json
```

---

## 🚀 Instalación y Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd React-DisneyClonePersonal
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. Abrir en el navegador la URL indicada en consola (por defecto `http://localhost:5173`).

---

## 🐳 Ejecución con Docker

Puedes levantar el proyecto compilado en producción servido con **Nginx** usando Docker:

### Con Docker Compose (recomendado)
```bash
docker compose up -d --build
```

### Con Docker CLI
```bash
docker build -t react-disney-clone .
docker run -d -p 8080:80 --name disney-clone react-disney-clone
```

Una vez iniciado el contenedor, accede desde tu navegador a:
👉 `http://localhost:8080`

