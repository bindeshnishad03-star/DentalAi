# 🦷 DentalAI – AI-Powered Dental Image Screening & Decision Support System

DentalAI is a web-based **AI-powered dental image screening and decision-support system** designed to analyze dental/intraoral images and provide preliminary screening indications using computer vision.

The project combines **Artificial Intelligence, Computer Vision, Web Development, Database Management, and Responsible AI** to create an accessible digital dental-screening workflow.

> ⚠️ **Disclaimer:** DentalAI is an academic/project prototype and is intended for screening and decision support only. It does **not provide a definitive medical diagnosis**. Professional evaluation by a qualified dentist is required for clinical decisions.

---

## 📌 Project Overview

Dental diseases such as dental caries, gingivitis, periodontitis, and calculus require proper professional examination. DentalAI explores how AI-based image classification can assist with the preliminary screening of dental images.

The system allows users to:

1. Upload a dental/intraoral image.
2. Validate and preview the uploaded image.
3. Process the image through an AI model.
4. Generate a possible screening category.
5. Display a confidence score.
6. Provide a recommendation for professional dental evaluation.
7. Maintain screening history in the planned database architecture.
8. Generate structured screening reports.

The current website prototype demonstrates the complete **upload → processing → result** workflow. The AI result shown in the prototype is currently simulated and can later be replaced with a trained and validated machine-learning model.

---

## 🎯 Objectives

The main objectives of DentalAI are:

* Develop a user-friendly dental image screening website.
* Apply computer vision for preliminary dental-image classification.
* Provide screening categories with confidence scores.
* Create a structured patient and screening management workflow.
* Design patient and dentist dashboard functionality.
* Generate PDF-based screening reports.
* Apply responsible AI and human-in-the-loop principles.
* Create a scalable architecture for future AI integration.

---

## 🔍 Proposed AI Screening Categories

The initial project design considers the following categories:

* 🟢 Normal
* 🦷 Dental Caries
* 🔴 Gingivitis
* 🟠 Periodontitis
* 🟡 Calculus
* ⚪ Other / Uncertain

The final categories will depend on the dataset, labeling quality, model development and validation process.

---

## ✨ Features

### 🖼️ Dental Image Upload

Users can upload supported dental images through the web interface.

### 🔍 Image Preview & Validation

The system validates the uploaded file and provides an image preview before processing.

### 🤖 AI-Based Screening

The planned AI component uses computer vision and transfer learning to classify dental images.

### 📊 Confidence Score

The system presents a confidence score along with the screening indication.

### 👨‍⚕️ Dentist Dashboard

A planned dentist interface can allow authorized professionals to review screening information.

### 👤 Patient Dashboard

Patients can view their screening history and reports.

### 📄 PDF Reports

The system architecture supports generation of structured screening reports.

### 🔐 Security

The planned system includes:

* Authentication
* Role-based access
* Password hashing
* File validation
* Secure image storage
* HTTPS
* Audit logging

### 🧠 Responsible AI

The project follows a human-in-the-loop approach and does not present AI output as a confirmed medical diagnosis.

---

## 🏗️ System Architecture

```text
                ┌─────────────────────┐
                │       User          │
                └──────────┬──────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │   DentalAI Website  │
                │ HTML/CSS/JavaScript  │
                └──────────┬──────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │    FastAPI Backend  │
                └──────────┬──────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │ Image Preprocessing │
                └──────────┬──────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │   AI/ML Model       │
                │   PyTorch           │
                └──────────┬──────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │ Prediction +        │
                │ Confidence Score    │
                └──────────┬──────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │ Results Dashboard   │
                └──────────┬──────────┘
                           │
                 ┌─────────┴─────────┐
                 ▼                   ▼
          ┌──────────────┐    ┌──────────────┐
          │   Patient    │    │   Dentist    │
          │   Dashboard  │    │   Dashboard  │
          └──────────────┘    └──────────────┘
```

---

## 🧠 AI/ML Approach

The planned AI pipeline consists of:

```text
Dataset
   ↓
Data Cleaning
   ↓
Label Verification
   ↓
Train / Validation / Test Split
   ↓
Image Preprocessing
   ↓
Data Augmentation
   ↓
Transfer Learning
   ↓
Model Training
   ↓
Model Evaluation
   ↓
AI Inference
   ↓
Screening Result
```

Potential model architectures include:

* EfficientNet
* ResNet
* MobileNet
* ConvNeXt

### Evaluation Metrics

The model can be evaluated using:

* Accuracy
* Precision
* Recall / Sensitivity
* Specificity
* F1 Score
* ROC-AUC
* Confusion Matrix

For a screening-oriented system, **sensitivity/recall** is particularly important because potentially relevant cases should not be unnecessarily missed.

---

## 🛠️ Technology Stack

### Frontend

* HTML5
* CSS3
* JavaScript
* Responsive Web Design

### Backend

* Python
* FastAPI

### Artificial Intelligence

* PyTorch
* Computer Vision
* Transfer Learning

### Database

* PostgreSQL

### Development Tools

* Visual Studio Code
* Git
* GitHub

### Future Technologies

* React
* Tailwind CSS
* Cloud Storage
* WhatsApp Integration
* Explainable AI

---

## 📂 Project Structure

The current frontend prototype can be organized as:

```text
DentalAI/
│
├── index.html
├── style.css
├── script.js
│
├── backend/
│   ├── main.py
│   ├── models/
│   ├── routes/
│   └── services/
│
├── ai-model/
│   ├── dataset/
│   ├── training/
│   ├── evaluation/
│   └── trained_model/
│
├── database/
│   └── schema.sql
│
├── reports/
│
├── screenshots/
│
└── README.md
```

---

## 🚀 Running the Current Frontend Prototype

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/DentalAI.git
```

### 2. Open the project

```bash
cd DentalAI
```

### 3. Open the frontend

Open:

```text
index.html
```

in your browser.

Alternatively, use the **Live Server** extension in Visual Studio Code.

---

## 🖥️ Prototype Workflow

```text
Home Page
    ↓
Start Screening
    ↓
Upload Dental Image
    ↓
Image Preview
    ↓
AI Processing
    ↓
Screening Result
    ↓
Recommendation
```

---

## 📸 Screenshots

### Home Page

Add your website screenshot here:

```markdown
![DentalAI Home Page](screenshots/home.png)
```

### Image Upload

```markdown
![DentalAI Upload Page](screenshots/upload.png)
```

### AI Screening Result

```markdown
![DentalAI Result](screenshots/result.png)
```

### Features

```markdown
![DentalAI Features](screenshots/features.png)
```

---

## 🔮 Future Scope

The project can be extended with:

* Real trained dental-image classification model
* Larger expert-reviewed datasets
* Explainable AI using Grad-CAM / Grad-CAM++
* Automated image-quality assessment
* Separate dental X-ray AI model
* Patient authentication
* Dentist authentication
* Dentist dashboard
* Appointment management
* PDF medical screening reports
* WhatsApp integration
* Multilingual support
* Cloud deployment
* AI model monitoring and versioning
* Continuous model evaluation

---

## 🔐 Responsible AI & Privacy

DentalAI deals with potentially sensitive healthcare information. Therefore, a production implementation should consider:

* User authentication
* Role-based authorization
* Secure file uploads
* Encryption
* Secure image storage
* Audit logs
* Data minimization
* Appropriate consent
* Applicable privacy requirements
* Clinical validation
* Human professional review

Real patient data should **not** be used in an academic prototype without the appropriate authorization and safeguards.

---

## ⚠️ Current Project Status

**Status: Prototype / Development**

### Completed

* ✅ DentalAI website UI
* ✅ Responsive frontend
* ✅ Amazon-inspired theme
* ✅ Navigation
* ✅ Image upload interface
* ✅ Drag-and-drop functionality
* ✅ Image preview
* ✅ File validation
* ✅ AI processing animation
* ✅ Screening result interface
* ✅ Confidence-score visualization
* ✅ Project presentation
* ✅ Project synopsis

### In Development

* 🔄 Real AI model
* 🔄 Training dataset
* 🔄 FastAPI backend
* 🔄 PostgreSQL database
* 🔄 Patient dashboard
* 🔄 Dentist dashboard
* 🔄 PDF report automation

---

## 📚 Academic Project

**Project:** DentalAI – AI-Powered Dental Image Screening & Decision Support System

**Degree:** Bachelor of Technology (B.Tech)

**Branch:** Information Technology

**Institution:** Ajay Kumar Garg Engineering College, Ghaziabad

**Academic Year:** 2026–2027

---

## 👨‍💻 Author

Bindesh Nishad

GitHub: https://github.com/bindeshnishad03-star

LinkedIn: www.linkedin.com/in/bindesh-nishad-8689b2323

---

## ⭐ Acknowledgement

This project is developed as an academic project to explore the application of Artificial Intelligence, Computer Vision and Web Technologies in dental healthcare.

---

## 📜 Disclaimer

DentalAI is an educational and research-oriented prototype. It is **not a substitute for professional dental examination, diagnosis or treatment**. AI-generated screening results should be reviewed by an appropriately qualified dental professional before any clinical decision is made.

---

## ⭐ If You Find This Project Useful

If you find this project interesting, consider giving the repository a ⭐ on GitHub and following the project as it develops.
