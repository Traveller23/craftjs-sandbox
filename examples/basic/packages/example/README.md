# Creating project
```bash
mkdir my-library
cd my-library

npm init # Press Enter for each question

mkdir src
npm install -D react
vim package.json # Add React as a peer dependency

npm install -D vite
vim package.json # Create a build script that runs `vite build`
vim vite.config.js # Add a file called `vite.config.js`. See that file for details.

npm install -D typescript
npx tsc --init # Then, add a few more properties to `tsconfig.json`. See that file for details.
npm install -D @types/react
```

# Building
```bash
npm run build
npm pack --pack-destination <path-to-pack>
```

# Installation
```bash
npm install <path-to-pack>/my-library-x.x.x.tgz
```
