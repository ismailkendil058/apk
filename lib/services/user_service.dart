import 'package:supabase_flutter/supabase_flutter.dart';
import '../models/user_model.dart';
import '../models/course_model.dart';

class UserService {
  final SupabaseClient _supabase = Supabase.instance.client;

  Future<UserProfile?> getUserProfile(String userId) async {
    try {
      final response = await _supabase
          .from('profiles')
          .select()
          .eq('id', userId)
          .single();

      return UserProfile.fromJson(response);
    } catch (e) {
      print('Error getting user profile: $e');
      return null;
    }
  }

  Future<List<Course>> getEnrolledCourses(String userId) async {
    try {
      final response = await _supabase
          .from('enrollments')
          .select('*, courses(*)')
          .eq('user_id', userId);

      return (response as List)
          .map((enrollment) => Course.fromJson(enrollment['courses']))
          .toList();
    } catch (e) {
      print('Error getting enrolled courses: $e');
      return [];
    }
  }

  Future<List<QuizResult>> getQuizResults(String userId) async {
    try {
      final response = await _supabase
          .from('quiz_results')
          .select()
          .eq('user_id', userId)
          .order('completed_at', ascending: false);

      return (response as List).map((result) => QuizResult.fromJson(result)).toList();
    } catch (e) {
      print('Error getting quiz results: $e');
      return [];
    }
  }

  Future<UserProfile> updateProfile(String userId, Map<String, dynamic> updates) async {
    try {
      final response = await _supabase
          .from('profiles')
          .update(updates)
          .eq('id', userId)
          .select()
          .single();

      return UserProfile.fromJson(response);
    } catch (e) {
      print('Error updating profile: $e');
      rethrow;
    }
  }

  Future<String> uploadProfilePicture(String userId, String imagePath) async {
    try {
      final file = await _supabase.storage
          .from('profile-pictures')
          .upload('$userId.jpg', imagePath);

      return _supabase.storage
          .from('profile-pictures')
          .getPublicUrl(file);
    } catch (e) {
      print('Error uploading profile picture: $e');
      rethrow;
    }
  }

  Future<QuizResult> saveQuizResult(QuizResult result) async {
    try {
      final response = await _supabase
          .from('quiz_results')
          .insert(result.toJson())
          .select()
          .single();

      return QuizResult.fromJson(response);
    } catch (e) {
      print('Error saving quiz result: $e');
      rethrow;
    }
  }

  Future<void> updateCourseProgress(String userId, String courseId, double progress) async {
    try {
      await _supabase
          .from('enrollments')
          .update({'progress': progress})
          .eq('user_id', userId)
          .eq('course_id', courseId);
    } catch (e) {
      print('Error updating course progress: $e');
      rethrow;
    }
  }

  Future<void> markLessonComplete(String userId, String courseId, String lessonId) async {
    try {
      await _supabase.from('lesson_completions').insert({
        'user_id': userId,
        'course_id': courseId,
        'lesson_id': lessonId,
        'completed_at': DateTime.now().toIso8601String(),
      });
    } catch (e) {
      print('Error marking lesson complete: $e');
      rethrow;
    }
  }

  Future<void> scheduleConsultation(ConsultationRequest request) async {
    try {
      await _supabase
          .from('consultation_requests')
          .insert(request.toJson());
    } catch (e) {
      print('Error scheduling consultation: $e');
      rethrow;
    }
  }
} 