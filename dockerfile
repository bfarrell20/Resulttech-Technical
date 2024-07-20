FROM ubuntu:latest

ENV DEBIAN_FRONTEND=noninteractive

# Install dependencies including python3-venv and MySQL client development libraries
RUN apt-get update && \
    apt-get install -y python3-dev python3-venv build-essential pkg-config python3-pip curl vim default-libmysqlclient-dev && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Create a virtual environment
RUN python3 -m venv /venv

# Set the environment variable to use the virtual environment
ENV PATH="/venv/bin:$PATH"

# Set the working directory
WORKDIR /Roulettech-Technical

# Copy the application code
COPY . .

# Install Python dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements_prod.txt

# Switch to the backend directory
WORKDIR /Roulettech-Technical/backend

# Expose the application port
EXPOSE 8000

# Run the application
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
