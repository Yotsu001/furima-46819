require 'aws-sdk-s3'

ENV['SSL_CERT_FILE'] = '/etc/pki/tls/cert.pem'

Aws.config.update({
  ssl_ca_bundle: '/etc/pki/tls/cert.pem'
})
