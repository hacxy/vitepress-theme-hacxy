---
description: 使用acme.sh泛解析自己的域名
categories:
  - 服务器
sticky: 1
---

# 快速上手 acme.sh 泛解析域名

## 安装 acme.sh

在服务器中执行安装命令

```sh
curl https://get.acme.sh | sh -s email=my@example.com

```

::: tip
这一步会把 acme.sh 安装到你的 home 目录下~/.acme.sh/
:::
之后可以手动创建 一个 shell 的 alias, 例如 .bashrc 方便你的使用:

`alias acme.sh=~/.acme.sh/acme.sh`

## 生成 DNSPod Token

登录 DNSPod <https://www.dnspod.cn/login?s_url=https://console.dnspod.cn/>

点击右上角头像(我的账号) => 安全设置 => 点击 API 密钥页面 => 点击进入 DNSPod token => 点击创建密钥 => 输入名称点击确认 => 保留弹窗中的 id 和 token 用作下一步

## 创建账户文件

在指定位置创建 account.conf 文件，或其他名称都可以，主要是为了记录 DNSPod 的 ID 和 Token 信息

```sh
# 这里直接放到 .acme.sh 的目录下
vim ~/.acme.sh/account.conf
```

修改内容:

```sh
export DP_Id="上个步骤中生成的 ID"
export DP_Key="上个步骤中生成的 Token"
# 开启自动升级
AUTO_UPGRADE='1'

```

修改完成保存退出

## 生成 ssl 证书

通过 accountconf 指定账户文件，也可以不通过此方式来做，可通过 export 环境变量的方式实现

```sh
acme.sh --issue --accountconf ~/.acme.sh/account.conf --server letsencrypt --dns dns_dp -d loclink.cn -d *.loclink.cn -k ec-384 --debug

```

::: tip
-d 指定证书中需要包含的域名信息

-k 指定密钥类型，这里使用了 ECDSA 算法，P-384 类型的密钥

--debug 是为了打印详细日志，方便出错时排查
:::

## 安装和使用

证书签发后，可通过下方的命令快速安装到对应位置，我这里以 nginx 为例，安装到 /etc/ngtinx/ssl/loclink.cn 目录下，后续配置 nginx 时，可直接使用该位置的证书

```sh
acme.sh --install-cert -d loclink.cn --ecc --key-file /etc/nginx/ssl/loclink.cn/loclink.cn.key  --fullchain-file /etc/nginx/ssl/loclink.cn/fullchain.cer --reloadcmd "service nginx force-reload"
```

::: tip
--reloadcmd 指定安装后强制更新 nginx
:::

## 后续更新

可通过添加定时任务，在证书快到期时自动更新

```sh
# 执行该命令，进入定时任务编辑界面
crontab -e
```

## 其他

移除不需要更新的或过时的站点证书：

```sh
# --ecc 指定删除 ecc 密钥对的记录，默认会删除 RSA 密钥对的证书
acme.sh --remove -d loclink.cn --ecc
```

## Nginx https 站点配置示例:

```
server {
        listen       443 ssl http2;
        listen       [::]:443 ssl http2;
        server_name loclink.cn www.loclink.cn;
        ssl_certificate /etc/nginx/ssl/loclink.cn/fullchain.cer;
        ssl_certificate_key /etc/nginx/ssl/loclink.cn/loclink.cn.key;
        ssl_session_cache shared:SSL:1m;
        ssl_session_timeout  10m;
        ssl_ciphers HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers on;
        root /root/Projects/loclink-blog;
        location / {
                index index.html index.htm;
                try_files $uri $uri/ /index.html;
        }
}

server {
        listen       80;
        listen       [::]:80;
        root /root/Projects/loclink-blog;
        server_name   loclink.cn  www.loclink.cn;

        location / {
                index index.html index.htm;
                try_files $uri $uri/ /index.html;
        }
        return 301 https://$host$request_uri;
}

```
