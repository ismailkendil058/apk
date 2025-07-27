import 'package:supabase_flutter/supabase_flutter.dart';
import '../models/user_model.dart';

class AuthService {
  final SupabaseClient _supabase = Supabase.instance.client;

  Future<User?> getCurrentUser() async {
    try {
      final user = _supabase.auth.currentUser;
      return user;
    } catch (e) {
      print('Error getting current user: $e');
      return null;
    }
  }

  Future<AuthResult> signUp({
    required String email,
    required String password,
    required String firstName,
    required String lastName,
    String role = 'student',
  }) async {
    try {
      final response = await _supabase.auth.signUp(
        email: email,
        password: password,
        data: {
          'first_name': firstName,
          'last_name': lastName,
          'role': role,
        },
      );

      if (response.user != null) {
        // Create user profile
        await _supabase.from('profiles').insert({
          'id': response.user!.id,
          'email': email,
          'first_name': firstName,
          'last_name': lastName,
          'role': role,
        });
      }

      return AuthResult(data: response, error: null);
    } catch (e) {
      return AuthResult(data: null, error: e.toString());
    }
  }

  Future<AuthResult> signIn({
    required String email,
    required String password,
  }) async {
    try {
      final response = await _supabase.auth.signInWithPassword(
        email: email,
        password: password,
      );

      return AuthResult(data: response, error: null);
    } catch (e) {
      return AuthResult(data: null, error: e.toString());
    }
  }

  Future<AuthResult> signOut() async {
    try {
      await _supabase.auth.signOut();
      return AuthResult(data: null, error: null);
    } catch (e) {
      return AuthResult(data: null, error: e.toString());
    }
  }

  Future<AuthResult> resetPassword(String email) async {
    try {
      await _supabase.auth.resetPasswordForEmail(email);
      return AuthResult(data: null, error: null);
    } catch (e) {
      return AuthResult(data: null, error: e.toString());
    }
  }

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

  Future<AuthResult> updateProfile(String userId, Map<String, dynamic> updates) async {
    try {
      final response = await _supabase
          .from('profiles')
          .update(updates)
          .eq('id', userId)
          .select()
          .single();

      return AuthResult(data: response, error: null);
    } catch (e) {
      return AuthResult(data: null, error: e.toString());
    }
  }
}

class AuthResult {
  final dynamic data;
  final String? error;

  AuthResult({this.data, this.error});

  bool get isSuccess => error == null;
} 