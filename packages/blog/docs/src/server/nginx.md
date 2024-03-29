---
description: 记录了 nginx 的一些基础配置
categories:
  - 服务器
sticky: 2
---

# Nginx 常用配置

## 静态网页配置

以 `hacxy.cn` 域名为例:

```sh
sudo vim /etc/nginx/conf.d/hacxy.cn
```

写入配置, 这是一个无 ssl 证书的例子:

```
server {
        listen                80;   #端口号
        server_name    hacxy.cn www.hacxy.cn; #站点域名

        location / {
            root   /project/production/blog/;  # web静态所在的绝对路径
            index  index.html index.htm;
            try_files $uri $uri/ /index.html;  #该配置防止history模式下刷新跳转至404
        }
}
```

以下是有证书的配置, 免费证书如何获取可以查阅[acme.sh 使用教程](/src/server/acme.sh):

```
server {
        listen       443 ssl http2;
        listen       [::]:443 ssl http2;
        server_name hacxy.cn www.hacxy.cn;
        ssl_certificate /etc/nginx/ssl/hacxy.cn/fullchain.cer;
        ssl_certificate_key /etc/nginx/ssl/hacxy.cn/hacxy.cn.key;
        ssl_session_cache shared:SSL:1m;
        ssl_session_timeout  10m;
        ssl_ciphers HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers on;
        root /root/Projects/blog;
        location / {
                index index.html index.htm;
                try_files $uri $uri/ /index.html;
        }
}

server {
        listen       80;
        listen       [::]:80;
        root /root/Projects/blog;
        server_name   hacxy.cn  www.hacxy.cn;

        location / {
                index index.html index.htm;
                try_files $uri $uri/ /index.html;
        }
        return 301 https://$host$request_uri;
}
```

保存退出后执行:

```sh
nginx -t
```

检查配置是否正确

热重载 nginx 配置文件：

```sh
nginx -s reload
```

## 配置静态资源目录

有时候我们希望可以通过域名访问到一些静态资源, 如:js 脚本、图片等, 那么可以通过以下配置来实现 :

```
server {
        listen       443 ssl http2;
        listen       [::]:443 ssl http2;
        server_name lib.oml2d.com;
        ssl_certificate /etc/nginx/ssl/oml2d.com/fullchain.cer;
        ssl_certificate_key /etc/nginx/ssl/oml2d.com/oml2d.com.key;
        ssl_session_cache shared:SSL:1m;
        ssl_session_timeout  10m;
        ssl_ciphers HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers on;
        location / {
        	root /root/cubismSDK;
		      autoindex on;
        }
}

server {
        listen       80;
        listen       [::]:80;
        server_name   lib.oml2d.com;

        location / {
        	root /root/cubismSDK;
		      autoindex on;
        }
        return 301 https://$host$request_uri;
}
```

如果遇到跨域问题, 在 `location / {}` 中加入以下配置即可解决 :

```
location \ {
  	add_header 'Access-Control-Allow-Origin' '*';
		add_header 'Access-Control-Allow-Credentials' 'true';
		add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
		add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';
}
```
