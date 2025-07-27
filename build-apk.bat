@echo off
echo Setting up environment for APK build...

REM Set Flutter path
set PATH=%PATH%;C:\flutter\bin

REM Set Android SDK path (if available)
set ANDROID_HOME=C:\android-sdk

REM Check if Flutter is available
flutter --version
if %errorlevel% neq 0 (
    echo Flutter not found. Please install Flutter first.
    pause
    exit /b 1
)

echo Installing dependencies...
flutter pub get

echo Building APK...
flutter build apk --release

if %errorlevel% equ 0 (
    echo APK built successfully!
    echo APK location: build\app\outputs\flutter-apk\app-release.apk
) else (
    echo APK build failed. Please check the error messages above.
)

pause 