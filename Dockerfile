FROM golang:1.19

# Set destination for COPY
WORKDIR /app

# Download Go modules
COPY go.mod go.sum ./
RUN go mod download

# Copy the source code
COPY . .

# Build
RUN go build -o /learning-platform

# Expose and run
EXPOSE 8080
CMD ["/learning-platform"]
