FROM golang:1.20

WORKDIR /app

# Install required dependencies
RUN apt-get update && apt-get install -y \
    librdkafka-dev \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

# Copiar os arquivos de módulo Go
COPY go.mod go.sum ./

# Baixar as dependências
RUN go mod download

# Copiar o código-fonte
COPY . .

# Construir o aplicativo
RUN CGO_ENABLED=1 go build -o main ./cmd/freight/main.go

# Comando para rodar o aplicativo
CMD [ "/app/main" ]