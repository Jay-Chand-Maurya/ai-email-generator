# Stage 1: Build
FROM eclipse-temurin:21-jdk-alpine AS builder

WORKDIR /app

# Maven wrapper aur pom.xml copy karein
COPY .mvn/ .mvn
COPY mvnw pom.xml ./

# Dependencies download karein
RUN ./mvnw dependency:go-offline

# Source code copy karein aur build karein
COPY src ./src
RUN ./mvnw clean package -DskipTests

# Stage 2: Run
FROM eclipse-temurin:21-jdk-alpine

WORKDIR /app

# Stage 1 se JAR file copy karein
COPY --from=builder /app/target/*.jar app.jar

EXPOSE 8082

ENTRYPOINT ["java", "-jar", "/app.jar"]