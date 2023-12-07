FROM python:3
LABEL maintainer="@rukhman"
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
COPY ./requirements.txt /backend/requirements.txt
WORKDIR /backend
RUN pip install -r requirements.txt
COPY . /backend/
EXPOSE 8090
CMD python manage.py makemigrations && \
 python manage.py migrate && \ 
 python manage.py runserver 0.0.0.0:8090
