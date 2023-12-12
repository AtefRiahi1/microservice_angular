FROM openjdk:8
EXPOSE 9095
RUN mkdir -p /app/uploads/
ADD target/voiture-0.0.1-SNAPSHOT.jar voiture.jar
ENTRYPOINT ["java", "-jar","voiture.jar"]
