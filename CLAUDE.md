# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a VS Code Development Container template specifically configured for testing Claude Code. It provides a consistent Ubuntu-based development environment with Node.js and AI-assisted development tools.

## Development Environment Setup
The repository uses VS Code Dev Containers with:
- Ubuntu 22.04 (Jammy) base image
- Node.js v18
- Claude Code CLI integration
- Playwright MCP (Model Context Protocol) for browser automation

## Common Commands

### Claude Code Integration
- The Claude Code CLI is automatically configured in the container
- Playwright MCP is added via: `claude mcp add playwright npx @playwright/mcp@latest`

### Container Management
- To rebuild the container: Use VS Code's "Rebuild Container" command
- The container installs additional tools: curl, jq

## Architecture Overview

### Container Configuration Structure
- `.devcontainer/devcontainer.json`: Main configuration defining the development environment, extensions, and post-create commands
- `.devcontainer/Dockerfile`: Custom Docker image setup based on Ubuntu 22.04
- `.devcontainer/images/`: Supporting image assets

### Key Integration Points
1. **Claude Code CLI**: Integrated via devcontainer features
2. **Playwright MCP**: Enables browser automation capabilities within Claude Code
3. **VS Code Extensions**: Docker, Remote Containers, and Markdown Mermaid support

## Development Notes
- This is a template/testing environment for Claude Code integration
- The setup prioritizes AI-assisted development workflows
- Browser automation testing is available through Playwright MCP
- The environment is containerized for consistency across different development machines