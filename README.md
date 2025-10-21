cd ~/Desktop/quantum-chemistry-analyzer-linux

cat > README.md << 'EOF'
<div align="center">

# ⚛️ Quantum Chemistry Analyzer

### Advanced DOS & UV-Vis Analysis Tool for Computational Chemistry

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-Linux-green.svg)](https://github.com/Safi-ullah-majid/quantum-chemistry-analyzer/releases)
[![Version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)](https://github.com/Safi-ullah-majid/quantum-chemistry-analyzer/releases/tag/v1.0.0)
[![Downloads](https://img.shields.io/github/downloads/Safi-ullah-majid/quantum-chemistry-analyzer/total)](https://github.com/Safi-ullah-majid/quantum-chemistry-analyzer/releases)

<img src="https://raw.githubusercontent.com/Safi-ullah-majid/quantum-chemistry-analyzer/main/assets/banner.png" alt="Quantum Chemistry Analyzer" width="10%"/>

**🔬 Visualize • 📊 Analyze • 📈 Export**

[📥 Download](https://github.com/Safi-ullah-majid/quantum-chemistry-analyzer/releases/latest) • [📖 Documentation](#usage) • [🐛 Report Bug](https://github.com/Safi-ullah-majid/quantum-chemistry-analyzer/issues)

---

<table style="margin: 0 auto;">
<tr>
<td width="50%">

### 📊 Density of States (DOS)
- 🎯 HOMO/LUMO visualization
- 🌈 Band gap calculation
- ⚡ Real-time parameter adjustment
- 📐 Gaussian broadening

</td>
<td width="50%">

### 🌈 UV-Vis Spectrum
- 📈 TD-DFT data processing
- 🎨 Multiple lineshape options
- 🔍 Automatic peak detection
- 💫 Wavelength/Energy conversion

</td>
</tr>
<tr>
<td width="50%">

### 📤 Export Options
- 🖼️ PNG (Standard quality)
- 📸 JPG (Compressed)
- 🎨 HD (3× resolution)
- 📊 CSV (Raw data)

</td>
<td width="50%">

### ⚙️ Advanced Settings
- 🎚️ Adjustable broadening (σ)
- 📏 Custom energy ranges
- 🔢 Resolution control
- 📁 Multi-file comparison

</td>
</tr>
</table>

</div>

## 📥 Installation

### 🚀 Quick Start (Recommended)

#### **AppImage** - Works on Any Linux Distribution
```bash
# 1. Download
wget https://github.com/Safi-ullah-majid/quantum-chemistry-analyzer/releases/download/v1.0.0/Quantum-Chemistry-Analyzer-1.0.0.AppImage

# 2. Make executable
chmod +x Quantum-Chemistry-Analyzer-1.0.0.AppImage

# 3. Install FUSE (if needed)
sudo apt install libfuse2

# 4. Run
./Quantum-Chemistry-Analyzer-1.0.0.AppImage --no-sandbox
```

#### **DEB Package** - Ubuntu / Debian / Linux Mint
```bash
# 1. Download
wget https://github.com/Safi-ullah-majid/quantum-chemistry-analyzer/releases/download/v1.0.0/quantum-chemistry-analyzer_1.0.0_amd64.deb

# 2. Install
sudo dpkg -i quantum-chemistry-analyzer_1.0.0_amd64.deb
sudo apt install -f  # Fix dependencies

# 3. Run
quantum-chemistry-analyzer
```

---

## 🎯 Usage

### **Step 1: Load Your Data**
Click the **Upload** button and select your Gaussian `.log` or `.out` files

### **Step 2: View Results**
- **DOS Plot**: Automatically displays with HOMO/LUMO markers
- **UV-Vis Spectrum**: Shows absorption peaks and wavelengths

### **Step 3: Customize**
Click **Settings** to adjust:
- Broadening parameters (σ)
- Energy ranges
- Plot resolution
- Line width

### **Step 4: Export**
Choose your format:
- **CSV** - For further analysis
- **PNG** - Standard quality
- **JPG** - Smaller file size
- **HD** - Publication quality (3000×1200 px)

---

## 📸 Screenshots

<div align="center">

### Main Interface
<img src="https://raw.githubusercontent.com/Safi-ullah-majid/quantum-chemistry-analyzer/main/assets/screenshot1.png" alt="Main Interface" width="80%"/>

### DOS Visualization
<img src="https://raw.githubusercontent.com/Safi-ullah-majid/quantum-chemistry-analyzer/main/assets/screenshot2.png" alt="DOS Plot" width="80%"/>

### UV-Vis Spectrum
<img src="https://raw.githubusercontent.com/Safi-ullah-majid/quantum-chemistry-analyzer/main/assets/screenshot3.png" alt="UV-Vis" width="80%"/>

</div>

---

## 🛠️ Technical Details

### **Supported File Formats**
- Gaussian `.log` files
- Gaussian `.out` files
- Any quantum chemistry output parseable by cclib

### **System Requirements**
- **OS**: Linux (Ubuntu 20.04+, Debian 11+, Fedora, Arch, etc.)
- **RAM**: 512 MB minimum
- **Storage**: 120 MB
- **Dependencies**: libfuse2 (for AppImage)

### **Technologies Used**
- **Frontend**: React 18, TailwindCSS
- **Backend**: Electron 28, Node.js
- **Visualization**: HTML5 Canvas
- **Parsing**: cclib (simulated for demo)

---

## 🎓 Citation

If you use this tool in your research, please cite:
```bibtex
@software{quantum_chemistry_analyzer,
  author = {Majid, Safi Ullah},
  title = {Quantum Chemistry Analyzer: Advanced DOS \& UV-Vis Analysis Tool},
  year = {2024},
  url = {https://github.com/Safi-ullah-majid/quantum-chemistry-analyzer},
  version = {1.0.0}
}
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Free for academic and commercial use!**

---

## 👨‍💻 Author

**Safi Ullah Majid**

- GitHub: [@Safi-ullah-majid](https://github.com/Safi-ullah-majid)
- Email: [Contact via GitHub](https://github.com/Safi-ullah-majid)

---

## 🐛 Support & Issues

Found a bug? Have a feature request?

- 🐛 [Report Bug](https://github.com/Safi-ullah-majid/quantum-chemistry-analyzer/issues/new?labels=bug)
- 💡 [Request Feature](https://github.com/Safi-ullah-majid/quantum-chemistry-analyzer/issues/new?labels=enhancement)
- 📧 [Email Support](mailto:your-email@example.com)

---

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Safi-ullah-majid/quantum-chemistry-analyzer&type=Date)](https://star-history.com/#Safi-ullah-majid/quantum-chemistry-analyzer&Date)

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/Safi-ullah-majid/quantum-chemistry-analyzer?style=social)
![GitHub forks](https://img.shields.io/github/forks/Safi-ullah-majid/quantum-chemistry-analyzer?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/Safi-ullah-majid/quantum-chemistry-analyzer?style=social)

---

<div align="center">

**Made with ❤️ for the Computational Chemistry Community**

[⬆ Back to Top](#-quantum-chemistry-analyzer)

</div>
EOF

echo "✅ Beautiful README created!"
