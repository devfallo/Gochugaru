# Project Setup Guide

This guide helps you set up your development environment, especially for PyTorch installation, based on your system specifications.

## 1. System Information Check

Before starting development, it's crucial to check your system's compatibility. Run the following script to verify your Python version, macOS version, and CPU architecture:

```bash
python system_check.py
```

This script will output your system details and provide a tailored PyTorch installation recommendation, ensuring you use a compatible version for your environment.

## 2. PyTorch Installation Guide

Based on your system's architecture and macOS version, the `system_check.py` script will provide a customized PyTorch installation guide:

*   **Apple Silicon (M1/M2/M3):** You can use the latest PyTorch version with MPS acceleration.
    *   Recommended: `pip install torch torchvision torchaudio`

*   **Intel + macOS 13+ (Ventura or later):** You can use the latest PyTorch version.
    *   Recommended: `pip install torch torchvision torchaudio`

*   **Intel + macOS 12 (Monterey) or earlier:** It is recommended to use an older PyTorch version for better compatibility.
    *   Consider: `pip install torch==1.13.1 torchvision==0.14.1 torchaudio==0.13.1` (or similar compatible version)

