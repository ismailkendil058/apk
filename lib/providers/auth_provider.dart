import 'package:flutter/material.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import '../models/user_model.dart';
import '../services/auth_service.dart';

class AuthProvider extends ChangeNotifier {
  final AuthService _authService = AuthService();
  
  User? _user;
  UserProfile? _profile;
  bool _isLoading = true;
  String? _error;

  User? get user => _user;
  UserProfile? get profile => _profile;
  bool get isLoading => _isLoading;
  bool get isAuthenticated => _user != null;
  String? get error => _error;

  AuthProvider() {
    _initializeAuth();
  }

  Future<void> _initializeAuth() async {
    try {
      _isLoading = true;
      notifyListeners();

      final currentUser = await _authService.getCurrentUser();
      if (currentUser != null) {
        _user = currentUser;
        await _loadUserProfile(currentUser.id);
      }
    } catch (e) {
      _error = e.toString();
    } finally {
      _isLoading = false;
      notifyListeners();
    }

    // Listen for auth state changes
    Supabase.instance.client.auth.onAuthStateChange.listen((data) async {
      final AuthChangeEvent event = data.event;
      final Session? session = data.session;

      if (event == AuthChangeEvent.signedIn && session != null) {
        _user = session.user;
        await _loadUserProfile(session.user.id);
      } else if (event == AuthChangeEvent.signedOut) {
        _user = null;
        _profile = null;
      }
      
      _isLoading = false;
      notifyListeners();
    });
  }

  Future<void> _loadUserProfile(String userId) async {
    try {
      final profile = await _authService.getUserProfile(userId);
      _profile = profile;
      notifyListeners();
    } catch (e) {
      _error = e.toString();
      notifyListeners();
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
      _isLoading = true;
      _error = null;
      notifyListeners();

      final result = await _authService.signUp(
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        role: role,
      );

      if (result.error != null) {
        _error = result.error;
      }

      return result;
    } catch (e) {
      _error = e.toString();
      return AuthResult(data: null, error: _error);
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<AuthResult> signIn({
    required String email,
    required String password,
  }) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      final result = await _authService.signIn(
        email: email,
        password: password,
      );

      if (result.error != null) {
        _error = result.error;
      }

      return result;
    } catch (e) {
      _error = e.toString();
      return AuthResult(data: null, error: _error);
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<AuthResult> signOut() async {
    try {
      _isLoading = true;
      notifyListeners();

      final result = await _authService.signOut();
      
      if (result.error != null) {
        _error = result.error;
      } else {
        _user = null;
        _profile = null;
      }

      return result;
    } catch (e) {
      _error = e.toString();
      return AuthResult(data: null, error: _error);
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<AuthResult> resetPassword(String email) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      final result = await _authService.resetPassword(email);

      if (result.error != null) {
        _error = result.error;
      }

      return result;
    } catch (e) {
      _error = e.toString();
      return AuthResult(data: null, error: _error);
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<AuthResult> updateProfile(Map<String, dynamic> updates) async {
    if (_user == null) {
      return AuthResult(data: null, error: 'No user logged in');
    }

    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      final result = await _authService.updateProfile(_user!.id, updates);

      if (result.error != null) {
        _error = result.error;
      } else {
        await _loadUserProfile(_user!.id);
      }

      return result;
    } catch (e) {
      _error = e.toString();
      return AuthResult(data: null, error: _error);
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  void clearError() {
    _error = null;
    notifyListeners();
  }
}

 