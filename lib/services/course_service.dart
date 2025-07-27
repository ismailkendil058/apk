import 'package:supabase_flutter/supabase_flutter.dart';
import '../models/course_model.dart';

class CourseService {
  final SupabaseClient _supabase = Supabase.instance.client;

  Future<List<Course>> getCourses() async {
    try {
      final response = await _supabase
          .from('courses')
          .select()
          .eq('is_published', true)
          .order('created_at', ascending: false);

      return (response as List).map((course) => Course.fromJson(course)).toList();
    } catch (e) {
      print('Error getting courses: $e');
      return [];
    }
  }

  Future<Course?> getCourseById(String courseId) async {
    try {
      final response = await _supabase
          .from('courses')
          .select()
          .eq('id', courseId)
          .single();

      return Course.fromJson(response);
    } catch (e) {
      print('Error getting course by id: $e');
      return null;
    }
  }

  Future<void> enrollInCourse(String courseId) async {
    try {
      final user = _supabase.auth.currentUser;
      if (user == null) throw Exception('User not authenticated');

      await _supabase.from('enrollments').insert({
        'user_id': user.id,
        'course_id': courseId,
        'enrolled_at': DateTime.now().toIso8601String(),
      });
    } catch (e) {
      print('Error enrolling in course: $e');
      rethrow;
    }
  }

  Future<void> unenrollFromCourse(String courseId) async {
    try {
      final user = _supabase.auth.currentUser;
      if (user == null) throw Exception('User not authenticated');

      await _supabase
          .from('enrollments')
          .delete()
          .eq('user_id', user.id)
          .eq('course_id', courseId);
    } catch (e) {
      print('Error unenrolling from course: $e');
      rethrow;
    }
  }

  Future<void> markLessonComplete(String courseId, String lessonId) async {
    try {
      final user = _supabase.auth.currentUser;
      if (user == null) throw Exception('User not authenticated');

      await _supabase.from('lesson_completions').insert({
        'user_id': user.id,
        'course_id': courseId,
        'lesson_id': lessonId,
        'completed_at': DateTime.now().toIso8601String(),
      });
    } catch (e) {
      print('Error marking lesson complete: $e');
      rethrow;
    }
  }

  Future<Course> createCourse(Course course) async {
    try {
      final response = await _supabase
          .from('courses')
          .insert(course.toJson())
          .select()
          .single();

      return Course.fromJson(response);
    } catch (e) {
      print('Error creating course: $e');
      rethrow;
    }
  }

  Future<Course> updateCourse(Course course) async {
    try {
      final response = await _supabase
          .from('courses')
          .update(course.toJson())
          .eq('id', course.id)
          .select()
          .single();

      return Course.fromJson(response);
    } catch (e) {
      print('Error updating course: $e');
      rethrow;
    }
  }

  Future<void> deleteCourse(String courseId) async {
    try {
      await _supabase
          .from('courses')
          .delete()
          .eq('id', courseId);
    } catch (e) {
      print('Error deleting course: $e');
      rethrow;
    }
  }
} 