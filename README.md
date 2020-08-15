# P1_page_perso

Live version is available at: <https://np111.github.io/P1_page_perso/>

![Poster](.readme/poster.jpg?raw=true)

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes.

### Prerequisites
* [Node.js](https://nodejs.org/) v10+

### Installation

1. Install dependencies:
    ```bash
    npm install
    ```
2. Run development script (the sources will be compiled to `./dist/` and watched
   to be recompiled with each change):
    ```bash
    npm run dev
    ```
3. Then open `./dist/index.html` in your browser!

## Deployment

### Manual hosting
You can compile a production version of the site by running:
```bash
npm ci
npm run build
```

The result will be in `./dist/`, you can then host it.

### Github Pages
You can compile and deploy a production version of the site to github pages by
running the `./build_and_deploy.sh` script.

## Built With

* [webpack](https://webpack.js.org/)
* [HTML Webpack Plugin](https://github.com/jantimon/html-webpack-plugin)
* [Sass](https://sass-lang.com/), [PostCSS](https://postcss.org/), [cssnano](https://github.com/cssnano/cssnano)
* [Normalize.css](https://necolas.github.io/normalize.css/), [Font Awesome](https://fontawesome.com/), [Bootstrap 4 Grid System](https://github.com/m-spyratos/bootstrap-4-grid)

## Notes
This is a school project (for OpenClassrooms).
