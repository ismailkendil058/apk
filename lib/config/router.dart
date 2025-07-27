import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:provider/provider.dart';

import '../providers/auth_provider.dart';
import '../screens/landing_screen.dart';
import '../screens/auth/login_screen.dart';
import '../screens/auth/signup_screen.dart';
import '../screens/auth/forgot_password_screen.dart';
import '../screens/courses/courses_screen.dart';
import '../screens/courses/course_details_screen.dart';
import '../screens/about/about_screen.dart';
import '../screens/about/contact_screen.dart';
import '../screens/about/mission_screen.dart';
import '../screens/about/values_screen.dart';
import '../screens/about/vision_screen.dart';
import '../screens/about/team_member_screen.dart';
import '../screens/dashboard/student_dashboard_screen.dart';
import '../screens/dashboard/admin_dashboard_screen.dart';
import '../screens/admin/admin_course_management_screen.dart';
import '../screens/quiz/quiz_screen.dart';
import '../screens/resources/resources_screen.dart';
import '../screens/resources/article_screen.dart';
import '../screens/consultation/schedule_consultation_screen.dart';
import '../widgets/loading_screen.dart';

class AppRouter {
  static final GoRouter router = GoRouter(
    initialLocation: '/',
    redirect: (context, state) {
      final authProvider = Provider.of<AuthProvider>(context, listen: false);
      
      if (authProvider.isLoading) {
        return null; // Show loading screen
      }
      
      final isLoggedIn = authProvider.isAuthenticated;
      final isAdmin = authProvider.user?.role == 'admin';
      final isStudent = authProvider.user?.role == 'student';
      
      // Public routes
      final publicRoutes = [
        '/',
        '/login',
        '/signup',
        '/forgot-password',
        '/courses',
        '/about',
        '/contact',
        '/mission',
        '/values',
        '/vision',
        '/resources',
        '/schedule-consultation',
      ];
      
      // Admin routes
      final adminRoutes = [
        '/admin',
        '/admin/courses',
      ];
      
      // Student routes
      final studentRoutes = [
        '/dashboard',
        '/quiz',
      ];
      
      final currentRoute = state.matchedLocation;
      
      // Allow public routes
      if (publicRoutes.any((route) => currentRoute.startsWith(route))) {
        return null;
      }
      
      // Check admin routes
      if (adminRoutes.any((route) => currentRoute.startsWith(route))) {
        if (!isLoggedIn || !isAdmin) {
          return '/';
        }
        return null;
      }
      
      // Check student routes
      if (studentRoutes.any((route) => currentRoute.startsWith(route))) {
        if (!isLoggedIn || !isStudent) {
          return '/login';
        }
        return null;
      }
      
      return null;
    },
    routes: [
      // Public Routes
      GoRoute(
        path: '/',
        builder: (context, state) => const LandingScreen(),
      ),
      GoRoute(
        path: '/login',
        builder: (context, state) => const LoginScreen(),
      ),
      GoRoute(
        path: '/signup',
        builder: (context, state) => const SignupScreen(),
      ),
      GoRoute(
        path: '/forgot-password',
        builder: (context, state) => const ForgotPasswordScreen(),
      ),
      GoRoute(
        path: '/courses',
        builder: (context, state) => const CoursesScreen(),
      ),
      GoRoute(
        path: '/course/:id',
        builder: (context, state) {
          final courseId = state.pathParameters['id']!;
          return CourseDetailsScreen(courseId: courseId);
        },
      ),
      GoRoute(
        path: '/about',
        builder: (context, state) => const AboutScreen(),
      ),
      GoRoute(
        path: '/contact',
        builder: (context, state) => const ContactScreen(),
      ),
      GoRoute(
        path: '/mission',
        builder: (context, state) => const MissionScreen(),
      ),
      GoRoute(
        path: '/values',
        builder: (context, state) => const ValuesScreen(),
      ),
      GoRoute(
        path: '/vision',
        builder: (context, state) => const VisionScreen(),
      ),
      GoRoute(
        path: '/team/:memberId',
        builder: (context, state) {
          final memberId = state.pathParameters['memberId']!;
          return TeamMemberScreen(memberId: memberId);
        },
      ),
      GoRoute(
        path: '/resources',
        builder: (context, state) => const ResourcesScreen(),
      ),
      GoRoute(
        path: '/article/:title',
        builder: (context, state) {
          final title = state.pathParameters['title']!;
          return ArticleScreen(title: title);
        },
      ),
      GoRoute(
        path: '/schedule-consultation',
        builder: (context, state) => const ScheduleConsultationScreen(),
      ),
      
      // Protected Student Routes
      GoRoute(
        path: '/dashboard',
        builder: (context, state) => const StudentDashboardScreen(),
      ),
      
      // Protected Admin Routes
      GoRoute(
        path: '/admin',
        builder: (context, state) => const AdminDashboardScreen(),
      ),
      GoRoute(
        path: '/admin/courses',
        builder: (context, state) => const AdminCourseManagementScreen(),
      ),
      
      // Quiz Route
      GoRoute(
        path: '/quiz/:courseId',
        builder: (context, state) {
          final courseId = state.pathParameters['courseId']!;
          return QuizScreen(courseId: courseId);
        },
      ),
    ],
    errorBuilder: (context, state) => Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Icon(
              Icons.error_outline,
              size: 64,
              color: Colors.red,
            ),
            const SizedBox(height: 16),
            Text(
              'Page not found',
              style: Theme.of(context).textTheme.headlineSmall,
            ),
            const SizedBox(height: 8),
            Text(
              'The page you are looking for does not exist.',
              style: Theme.of(context).textTheme.bodyMedium,
            ),
            const SizedBox(height: 24),
            ElevatedButton(
              onPressed: () => context.go('/'),
              child: const Text('Go Home'),
            ),
          ],
        ),
      ),
    ),
  );
} 