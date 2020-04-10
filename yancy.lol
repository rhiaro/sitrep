server {
  listen 80 default_server;
  root /var/www/yancy.lol;
  index index.html;
  server_name yancy.lol www.yancy.lol;

  location / {
    try_files $uri $uri/ =404;
  }
}
