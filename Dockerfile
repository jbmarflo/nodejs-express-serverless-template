FROM node:14

# Instalar LaTeX y dvisvgm
RUN apt-get update && \
    apt-get install -y texlive texlive-latex-extra texlive-pictures texlive-fonts-recommended texlive-pgfplots dvisvgm

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

CMD ["node", "dist/infrastructure/server.js"]