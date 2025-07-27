import platform
import sys
import os

def get_system_info():
    python_version = sys.version
    os_name = platform.system()
    os_version = platform.mac_ver()[0] if os_name == "Darwin" else platform.version()
    machine_architecture = platform.machine()

    print(f"\n--- System Information ---")
    print(f"Python Version: {python_version}")
    print(f"Operating System: {os_name}")
    print(f"OS Version: {os_version}")
    print(f"Machine Architecture: {machine_architecture}")
    print(f"--------------------------\n")

    return os_name, os_version, machine_architecture

def print_installation_guide(os_name, os_version, machine_architecture):
    print("--- PyTorch Installation Guide ---")
    if os_name == "Darwin":  # macOS
        os_major_version = int(os_version.split('.')[0])
        if "arm64" in machine_architecture:  # Apple Silicon
            print("You are on Apple Silicon (M1/M2/M3). You can use the latest PyTorch version with MPS acceleration.")
            print("Recommended: `pip install torch torchvision torchaudio`")
        elif "x86_64" in machine_architecture:  # Intel
            if os_major_version >= 13:  # macOS 13 (Ventura) or later
                print("You are on Intel Mac with macOS 13+ (Ventura or later). You can use the latest PyTorch version.")
                print("Recommended: `pip install torch torchvision torchaudio`")
            else:  # macOS 12 (Monterey) or earlier
                print("You are on Intel Mac with macOS 12 (Monterey) or earlier. It is recommended to use an older PyTorch version for better compatibility.")
                print("Consider: `pip install torch==1.13.1 torchvision==0.14.1 torchaudio==0.13.1` (or similar compatible version)")
        else:
            print("Unknown macOS architecture. Please refer to PyTorch official documentation for installation.")
    else:
        print("Your operating system is not macOS. Please refer to PyTorch official documentation for installation based on your OS and architecture.")
    print("----------------------------------\n")

def main():
    os_name, os_version, machine_architecture = get_system_info()
    print_installation_guide(os_name, os_version, machine_architecture)

if __name__ == "__main__":
    main()
