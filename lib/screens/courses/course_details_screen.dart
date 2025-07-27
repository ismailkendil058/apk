import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:provider/provider.dart';
import '../../providers/course_provider.dart';
import '../../providers/auth_provider.dart';
import '../../widgets/custom_app_bar.dart';
import '../../widgets/loading_button.dart';
import '../../config/theme.dart';

class CourseDetailsScreen extends StatefulWidget {
  final String courseId;

  const CourseDetailsScreen({
    super.key,
    required this.courseId,
  });

  @override
  State<CourseDetailsScreen> createState() => _CourseDetailsScreenState();
}

class _CourseDetailsScreenState extends State<CourseDetailsScreen> {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      Provider.of<CourseProvider>(context, listen: false)
          .loadCourseById(widget.courseId);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBar(
        title: 'Course Details',
        showBackButton: true,
      ),
      body: Consumer<CourseProvider>(
        builder: (context, courseProvider, child) {
          if (courseProvider.isLoading) {
            return const Center(
              child: CircularProgressIndicator(),
            );
          }

          final course = courseProvider.selectedCourse;
          if (course == null) {
            return Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(
                    Icons.error_outline,
                    size: 64,
                    color: AppTheme.error500,
                  ),
                  const SizedBox(height: 16),
                  Text(
                    'Course not found',
                    style: Theme.of(context).textTheme.headlineSmall,
                  ),
                  const SizedBox(height: 16),
                  ElevatedButton(
                    onPressed: () => context.go('/courses'),
                    child: const Text('Back to Courses'),
                  ),
                ],
              ),
            );
          }

          return SingleChildScrollView(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Course Hero Image
                AspectRatio(
                  aspectRatio: 16 / 9,
                  child: course.thumbnail != null
                      ? Image.network(
                          course.thumbnail!,
                          fit: BoxFit.cover,
                          errorBuilder: (context, error, stackTrace) {
                            return Container(
                              color: AppTheme.secondary100,
                              child: const Icon(
                                Icons.school,
                                size: 64,
                                color: AppTheme.secondary400,
                              ),
                            );
                          },
                        )
                      : Container(
                          color: AppTheme.secondary100,
                          child: const Icon(
                            Icons.school,
                            size: 64,
                            color: AppTheme.secondary400,
                          ),
                        ),
                ),

                Padding(
                  padding: const EdgeInsets.all(24),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      // Course Title
                      Text(
                        course.title,
                        style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                          fontWeight: FontWeight.bold,
                          color: AppTheme.textPrimary,
                        ),
                      ),

                      const SizedBox(height: 16),

                      // Course Stats
                      Row(
                        children: [
                          _buildStatItem(
                            Icons.star,
                            course.rating.toStringAsFixed(1),
                            'Rating',
                          ),
                          const SizedBox(width: 24),
                          _buildStatItem(
                            Icons.people,
                            '${course.ratingCount}',
                            'Students',
                          ),
                          const SizedBox(width: 24),
                          _buildStatItem(
                            Icons.access_time,
                            course.formattedDuration,
                            'Duration',
                          ),
                        ],
                      ),

                      const SizedBox(height: 24),

                      // Instructor Info
                      Container(
                        padding: const EdgeInsets.all(16),
                        decoration: BoxDecoration(
                          color: AppTheme.surface,
                          borderRadius: BorderRadius.circular(12),
                        ),
                        child: Row(
                          children: [
                            CircleAvatar(
                              radius: 24,
                              backgroundColor: AppTheme.primary100,
                              child: course.instructorImage != null
                                  ? ClipOval(
                                      child: Image.network(
                                        course.instructorImage!,
                                        width: 48,
                                        height: 48,
                                        fit: BoxFit.cover,
                                        errorBuilder: (context, error, stackTrace) {
                                          return const Icon(
                                            Icons.person,
                                            size: 24,
                                            color: AppTheme.primary600,
                                          );
                                        },
                                      ),
                                    )
                                  : const Icon(
                                      Icons.person,
                                      size: 24,
                                      color: AppTheme.primary600,
                                    ),
                            ),
                            const SizedBox(width: 16),
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    'Instructor',
                                    style: Theme.of(context).textTheme.bodySmall?.copyWith(
                                      color: AppTheme.secondary500,
                                    ),
                                  ),
                                  Text(
                                    course.instructor,
                                    style: Theme.of(context).textTheme.titleMedium?.copyWith(
                                      fontWeight: FontWeight.w600,
                                      color: AppTheme.textPrimary,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                      ),

                      const SizedBox(height: 24),

                      // Course Description
                      Text(
                        'About this course',
                        style: Theme.of(context).textTheme.titleLarge?.copyWith(
                          fontWeight: FontWeight.bold,
                          color: AppTheme.textPrimary,
                        ),
                      ),
                      const SizedBox(height: 12),
                      Text(
                        course.description,
                        style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                          color: AppTheme.secondary600,
                          height: 1.6,
                        ),
                      ),

                      const SizedBox(height: 24),

                      // What you'll learn
                      Text(
                        'What you\'ll learn',
                        style: Theme.of(context).textTheme.titleLarge?.copyWith(
                          fontWeight: FontWeight.bold,
                          color: AppTheme.textPrimary,
                        ),
                      ),
                      const SizedBox(height: 12),
                      _buildLearningPoints(),

                      const SizedBox(height: 24),

                      // Course Content
                      Text(
                        'Course Content',
                        style: Theme.of(context).textTheme.titleLarge?.copyWith(
                          fontWeight: FontWeight.bold,
                          color: AppTheme.textPrimary,
                        ),
                      ),
                      const SizedBox(height: 12),
                      _buildCourseContent(course),

                      const SizedBox(height: 24),

                      // Enrollment Section
                      _buildEnrollmentSection(course, courseProvider),
                    ],
                  ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }

  Widget _buildStatItem(IconData icon, String value, String label) {
    return Column(
      children: [
        Icon(
          icon,
          color: AppTheme.primary500,
          size: 24,
        ),
        const SizedBox(height: 4),
        Text(
          value,
          style: const TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 16,
            color: AppTheme.textPrimary,
          ),
        ),
        Text(
          label,
          style: const TextStyle(
            fontSize: 12,
            color: AppTheme.secondary500,
          ),
        ),
      ],
    );
  }

  Widget _buildLearningPoints() {
    final learningPoints = [
      'Master the fundamentals of the subject',
      'Build real-world projects',
      'Get hands-on experience',
      'Learn from industry experts',
      'Earn a certificate upon completion',
    ];

    return Column(
      children: learningPoints.map((point) {
        return Padding(
          padding: const EdgeInsets.only(bottom: 8),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Icon(
                Icons.check_circle,
                color: AppTheme.success500,
                size: 20,
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Text(
                  point,
                  style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                    color: AppTheme.secondary600,
                  ),
                ),
              ),
            ],
          ),
        );
      }).toList(),
    );
  }

  Widget _buildCourseContent(dynamic course) {
    return Container(
      decoration: BoxDecoration(
        color: AppTheme.surface,
        borderRadius: BorderRadius.circular(12),
      ),
      child: Column(
        children: [
          ListTile(
            leading: const Icon(Icons.play_circle_outline),
            title: const Text('Course Overview'),
            subtitle: const Text('Introduction to the course'),
            trailing: const Text('5 min'),
          ),
          const Divider(height: 1),
          ListTile(
            leading: const Icon(Icons.play_circle_outline),
            title: const Text('Getting Started'),
            subtitle: const Text('Setup and installation'),
            trailing: const Text('15 min'),
          ),
          const Divider(height: 1),
          ListTile(
            leading: const Icon(Icons.play_circle_outline),
            title: const Text('Core Concepts'),
            subtitle: const Text('Learn the fundamentals'),
            trailing: const Text('45 min'),
          ),
        ],
      ),
    );
  }

  Widget _buildEnrollmentSection(dynamic course, CourseProvider courseProvider) {
    final authProvider = Provider.of<AuthProvider>(context, listen: false);
    final isAuthenticated = authProvider.isAuthenticated;

    return Container(
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        color: AppTheme.primary50,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: AppTheme.primary200),
      ),
      child: Column(
        children: [
          Row(
            children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      course.formattedPrice,
                      style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                        fontWeight: FontWeight.bold,
                        color: course.isFree ? AppTheme.success600 : AppTheme.primary600,
                      ),
                    ),
                    Text(
                      course.isFree ? 'Free Course' : 'One-time payment',
                      style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                        color: AppTheme.secondary600,
                      ),
                    ),
                  ],
                ),
              ),
              if (isAuthenticated)
                Consumer<CourseProvider>(
                  builder: (context, provider, child) {
                    return LoadingButton(
                      onPressed: course.isEnrolled
                          ? () => context.go('/dashboard')
                          : () => _handleEnrollment(course, provider),
                      isLoading: provider.isLoading,
                      text: course.isEnrolled ? 'Continue Learning' : 'Enroll Now',
                      backgroundColor: course.isEnrolled 
                          ? AppTheme.success500 
                          : AppTheme.primary500,
                      foregroundColor: Colors.white,
                    );
                  },
                )
              else
                ElevatedButton(
                  onPressed: () => context.go('/login'),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: AppTheme.primary500,
                    foregroundColor: Colors.white,
                  ),
                  child: const Text('Sign In to Enroll'),
                ),
            ],
          ),
          const SizedBox(height: 16),
          Row(
            children: [
              Icon(
                Icons.security,
                size: 20,
                color: AppTheme.success500,
              ),
              const SizedBox(width: 8),
              Expanded(
                child: Text(
                  '30-Day Money-Back Guarantee',
                  style: Theme.of(context).textTheme.bodySmall?.copyWith(
                    color: AppTheme.secondary600,
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Future<void> _handleEnrollment(dynamic course, CourseProvider courseProvider) async {
    await courseProvider.enrollInCourse(course.id);
    
    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            course.isFree 
                ? 'Successfully enrolled in ${course.title}!'
                : 'Enrollment successful! Redirecting to payment...',
          ),
          backgroundColor: AppTheme.success500,
        ),
      );
      
      // Navigate to dashboard or payment
      if (course.isFree) {
        context.go('/dashboard');
      } else {
        // TODO: Navigate to payment screen
        context.go('/dashboard');
      }
    }
  }
} 