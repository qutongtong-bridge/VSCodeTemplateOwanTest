# ベースイメージとして Ubuntu 22.04 (Jammy) を使用
FROM mcr.microsoft.com/devcontainers/base:jammy

# Node.js のインストール（v18を例として指定）
ENV NODE_VERSION=18

# 必要であれば追加ツールや共通ユーティリティをここで定義
# 例: jq や curl など（基本的に features に含まれていないもの）
RUN apt-get update && apt-get install -y \
    curl \
    jq \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Claude Code Feature が必要な場合の追加（実態に応じて修正）
# ここでは便宜上 "anthropic-cli" 的なものを仮インストールしています（実際のインストール方法が必要なら教えてください）
# RUN npm install -g anthropic-cli || true

USER $USERNAME
WORKDIR /workspaces
