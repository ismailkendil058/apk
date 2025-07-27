import 'package:flutter/material.dart';
import '../models/user_model.dart';
import '../models/course_model.dart';
import '../services/user_service.dart';

class UserProvider extends ChangeNotifier {
  final UserService _userService = UserService();
  
  UserProfile? _profile;
  List<Course> _enrolledCourses = [];
  List<QuizResult> _quizResults = [];
  bool _isLoading = false;
  String? _error;

  UserProfile? get profile => _profile;
  List<Course> get enrolledCourses => _enrolledCourses;
  List<QuizResult> get quizResults => _quizResults;
  bool get isLoading => _isLoading;
  String? get error => _error;

  Future<void> loadUserProfile(String userId) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      final profile = await _userService.getUserProfile(userId);
      _profile = profile;
    } catch (e) {
      _error = e.toString();
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> loadEnrolledCourses(String userId) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      final courses = await _userService.getEnrolledCourses(userId);
      _enrolledCourses = courses;
    } catch (e) {
      _error = e.toString();
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> loadQuizResults(String userId) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      final results = await _userService.getQuizResults(userId);
      _quizResults = results;
    } catch (e) {
      _error = e.toString();
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> updateProfile(String userId, Map<String, dynamic> updates) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      final updatedProfile = await _userService.updateProfile(userId, updates);
      _profile = updatedProfile;
    } catch (e) {
      _error = e.toString();
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> updateProfilePicture(String userId, String imagePath) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      final imageUrl = await _userService.uploadProfilePicture(userId, imagePath);
      
      if (_profile != null) {
        _profile = _profile!.copyWith(profilePicture: imageUrl);
      }
    } catch (e) {
      _error = e.toString();
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> saveQuizResult(QuizResult result) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      final savedResult = await _userService.saveQuizResult(result);
      _quizResults.add(savedResult);
    } catch (e) {
      _error = e.toString();
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> updateCourseProgress(String userId, String courseId, double progress) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      await _userService.updateCourseProgress(userId, courseId, progress);
      
      // Update the enrolled course progress
      final index = _enrolledCourses.indexWhere((course) => course.id == courseId);
      if (index != -1) {
        _enrolledCourses[index] = _enrolledCourses[index].copyWith(progress: progress);
      }
    } catch (e) {
      _error = e.toString();
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> markLessonComplete(String userId, String courseId, String lessonId) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      await _userService.markLessonComplete(userId, courseId, lessonId);
      
      // Refresh enrolled courses to update progress
      await loadEnrolledCourses(userId);
    } catch (e) {
      _error = e.toString();
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> scheduleConsultation(ConsultationRequest request) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      await _userService.scheduleConsultation(request);
    } catch (e) {
      _error = e.toString();
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  List<Course> getCompletedCourses() {
    return _enrolledCourses.where((course) => course.progress >= 1.0).toList();
  }

  List<Course> getInProgressCourses() {
    return _enrolledCourses.where((course) => course.progress > 0 && course.progress < 1.0).toList();
  }

  List<Course> getNotStartedCourses() {
    return _enrolledCourses.where((course) => course.progress == 0).toList();
  }

  double getOverallProgress() {
    if (_enrolledCourses.isEmpty) return 0.0;
    
    final totalProgress = _enrolledCourses.fold<double>(
      0.0, 
      (sum, course) => sum + course.progress
    );
    
    return totalProgress / _enrolledCourses.length;
  }

  int getTotalCoursesCompleted() {
    return _enrolledCourses.where((course) => course.progress >= 1.0).length;
  }

  int getTotalLessonsCompleted() {
    return _enrolledCourses.fold<int>(
      0, 
      (sum, course) => sum + course.completedLessons.length
    );
  }

  void clearError() {
    _error = null;
    notifyListeners();
  }

  void clearData() {
    _profile = null;
    _enrolledCourses = [];
    _quizResults = [];
    notifyListeners();
  }
} 