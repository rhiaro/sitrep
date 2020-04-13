FROM debian:stable-slim

RUN apt-get update -y && apt-get install nginx vim -y

RUN mkdir -p /var/www/yancy.lol
WORKDIR /var/www/yancy.lol
COPY . .
COPY yancy.lol /etc/nginx/sites-available/
RUN rm /etc/nginx/sites-available/default && \
    rm /etc/nginx/sites-enabled/default && \
    ln -s /etc/nginx/sites-available/yancy.lol /etc/nginx/sites-enabled/yancy.lol
ENTRYPOINT /usr/sbin/nginx && bash
