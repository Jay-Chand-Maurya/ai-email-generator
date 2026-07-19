# Stage 1: Build
FROM eclipse-temurin:21-jdk-alpine AS builder

WORKDIR /app

# Maven wrapper ko executable banayein
COPY .mvn/ .mvn
COPY mvnw mvnw
COPY pom.xml .

# Maven wrapper ko executable permission dein
RUN chmod +x mvnw

# Dependencies download karein
RUN ./mvnw dependency:go-offline -B

# Source code copy karein
COPY src ./src

# JAR build karein (tests skip karein)
RUN ./mvnw clean package -DskipTests -B

# Stage 2: Run
FROM eclipse-temurin:21-jdk-alpine

WORKDIR /app

# Stage 1 se JAR copy karein
COPY --from=builder /app/target/*.jar app.jar

EXPOSE 8082

ENTRYPOINT ["java", "-jar", "/app.jar"]