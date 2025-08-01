# Flutter Learning Platform

A comprehensive Flutter mobile application for online learning, converted from the original React web application.

## Features

- **Authentication**: Login, signup, and password recovery
- **Course Management**: Browse, search, and filter courses
- **User Dashboard**: Student and admin dashboards
- **Quiz System**: Interactive quizzes and assessments
- **Resources**: Educational articles and materials
- **Consultation**: Schedule consultations with instructors
- **Responsive Design**: Works on all mobile devices

## Getting Started

### Prerequisites
- Flutter SDK (3.32.8 or higher)
- Dart SDK
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ismailkendil058/apk.git
cd apk
```

2. Install dependencies:
```bash
flutter pub get
```

3. Run the app:
```bash
flutter run
```

## Build Instructions

### Android APK
```bash
flutter build apk --release
```

### iOS (macOS only)
```bash
flutter build ios --release
```

### Web
```bash
flutter build web
```

## Project Structure

```
lib/
├── config/           # App configuration
├── models/           # Data models
├── providers/        # State management
├── screens/          # UI screens
├── services/         # API services
└── widgets/          # Reusable widgets
```

## Technologies Used

- **Flutter**: UI framework
- **Dart**: Programming language
- **Go Router**: Navigation
- **Provider**: State management
- **Supabase**: Backend services

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.

---
*Last updated: $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")*