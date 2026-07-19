# Stage 1: Build
FROM eclipse-temurin:21-jdk-alpine AS builder

WORKDIR /app

COPY .mvn/ .mvn
COPY mvnw mvnw
COPY pom.xml .

RUN chmod +x mvnw
RUN ./mvnw dependency:go-offline -B

COPY src ./src
RUN ./mvnw clean package -DskipTests -B

# Stage 2: Run
FROM eclipse-temurin:21-jdk-alpine

WORKDIR /app

# JAR file ko copy karein aur rename karein
COPY --from=builder /app/target/ai-email-generator-0.0.1-SNAPSHOT.jar /app/app.jar

# Check karein ki file exist karti hai
RUN ls -la /app/

EXPOSE 8082

# Absolute path use karein
ENTRYPOINT ["java", "-jar", "/app/app.jar"]