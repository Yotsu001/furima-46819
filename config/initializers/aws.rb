require 'aws-sdk-s3'

# 実在が確認できたパスを強制指定
correct_path = '/etc/pki/tls/cert.pem'

ENV['SSL_CERT_FILE'] = correct_path

Aws.config.update({
  ssl_ca_bundle: correct_path
})
