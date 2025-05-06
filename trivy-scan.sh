#!/bin/sh
set -e

# Install Trivy
curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh -s -- -b /usr/local/bin

# Scan image
trivy image --exit-code 1 --severity CRITICAL mi-api:latest

# Scan dependencies
trivy fs --security-checks vuln /app