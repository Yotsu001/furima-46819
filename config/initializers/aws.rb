require 'aws-sdk-s3'

Aws.config.update({
  ssl_ca_bundle: '/etc/pki/tls/cert.pem'
})