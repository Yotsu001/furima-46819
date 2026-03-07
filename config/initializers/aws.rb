require 'aws-sdk-s3'
require 'openssl'

# 1. AWS SDKに対して直接指定
Aws.config.update({
  ssl_ca_bundle: '/etc/pki/tls/cert.pem'
})

# 2. RubyのOpenSSLライブラリ全体に、OSが成功したパスを強制注入
# これにより、Rails内のあらゆるSSL通信（S3以外も含む）がこのパスを使います
OpenSSL::SSL::SSLContext::DEFAULT_PARAMS[:ca_file] = '/etc/pki/tls/cert.pem'
