import 'package:flutter/material.dart';
import '../models/course_model.dart';
import '../services/course_service.dart';

class CourseProvider extends ChangeNotifier {
  final CourseService _courseService = CourseService();
  
  List<Course> _courses = [];
  Course? _selectedCourse;
  bool _isLoading = false;
  String? _error;

  List<Course> get courses => _courses;
  Course? get selectedCourse => _selectedCourse;
  bool get isLoading => _isLoading;
  String? get error => _error;

  Future<void> loadCourses() async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      final courses = await _courseService.getCourses();
      _courses = courses;
    } catch (e) {
      _error = e.toString();
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> loadCourseById(String courseId) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      final course = await _courseService.getCourseById(courseId);
      _selectedCourse = course;
    } catch (e) {
      _error = e.toString();
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> enrollInCourse(String courseId) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      await _courseService.enrollInCourse(courseId);
      
      // Refresh the selected course to update enrollment status
      if (_selectedCourse?.id == courseId) {
        await loadCourseById(courseId);
      }
    } catch (e) {
      _error = e.toString();
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> unenrollFromCourse(String courseId) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      await _courseService.unenrollFromCourse(courseId);
      
      // Refresh the selected course to update enrollment status
      if (_selectedCourse?.id == courseId) {
        await loadCourseById(courseId);
      }
    } catch (e) {
      _error = e.toString();
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> markLessonComplete(String courseId, String lessonId) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      await _courseService.markLessonComplete(courseId, lessonId);
      
      // Refresh the selected course to update progress
      if (_selectedCourse?.id == courseId) {
        await loadCourseById(courseId);
      }
    } catch (e) {
      _error = e.toString();
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> createCourse(Course course) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      final newCourse = await _courseService.createCourse(course);
      _courses.add(newCourse);
    } catch (e) {
      _error = e.toString();
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> updateCourse(Course course) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      final updatedCourse = await _courseService.updateCourse(course);
      
      // Update in the list
      final index = _courses.indexWhere((c) => c.id == course.id);
      if (index != -1) {
        _courses[index] = updatedCourse;
      }
      
      // Update selected course if it's the same
      if (_selectedCourse?.id == course.id) {
        _selectedCourse = updatedCourse;
      }
    } catch (e) {
      _error = e.toString();
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> deleteCourse(String courseId) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      await _courseService.deleteCourse(courseId);
      
      // Remove from list
      _courses.removeWhere((course) => course.id == courseId);
      
      // Clear selected course if it's the deleted one
      if (_selectedCourse?.id == courseId) {
        _selectedCourse = null;
      }
    } catch (e) {
      _error = e.toString();
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  List<Course> getEnrolledCourses() {
    return _courses.where((course) => course.isEnrolled).toList();
  }

  List<Course> getCompletedCourses() {
    return _courses.where((course) => course.isCompleted).toList();
  }

  List<Course> getInProgressCourses() {
    return _courses.where((course) => course.isEnrolled && !course.isCompleted).toList();
  }

  void clearError() {
    _error = null;
    notifyListeners();
  }

  void clearSelectedCourse() {
    _selectedCourse = null;
    notifyListeners();
  }
} 