FROM ubuntu:latest

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y python3-dev default-libmysqlclient-dev build-essential pkg-config python3-pip curl vim && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /Roulettech-Technical

COPY . .

RUN pip3 install -r requirements_prod.txt

WORKDIR /Roulettech-Technical/backend

EXPOSE 8000

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
