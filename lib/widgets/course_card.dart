import 'package:flutter/material.dart';
import '../models/course_model.dart';
import '../config/theme.dart';

class CourseCard extends StatelessWidget {
  final Course course;
  final VoidCallback? onTap;
  final bool showProgress;

  const CourseCard({
    super.key,
    required this.course,
    this.onTap,
    this.showProgress = false,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 2,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16),
      ),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Course Image
            ClipRRect(
              borderRadius: const BorderRadius.vertical(top: Radius.circular(16)),
              child: AspectRatio(
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
                              size: 48,
                              color: AppTheme.secondary400,
                            ),
                          );
                        },
                      )
                    : Container(
                        color: AppTheme.secondary100,
                        child: const Icon(
                          Icons.school,
                          size: 48,
                          color: AppTheme.secondary400,
                        ),
                      ),
              ),
            ),
            
            // Course Content
            Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Category and Level
                  Row(
                    children: [
                      Container(
                        padding: const EdgeInsets.symmetric(
                          horizontal: 8,
                          vertical: 4,
                        ),
                        decoration: BoxDecoration(
                          color: AppTheme.primary100,
                          borderRadius: BorderRadius.circular(8),
                        ),
                        child: Text(
                          course.category,
                          style: const TextStyle(
                            fontSize: 12,
                            fontWeight: FontWeight.w600,
                            color: AppTheme.primary700,
                          ),
                        ),
                      ),
                      const SizedBox(width: 8),
                      Container(
                        padding: const EdgeInsets.symmetric(
                          horizontal: 8,
                          vertical: 4,
                        ),
                        decoration: BoxDecoration(
                          color: AppTheme.secondary100,
                          borderRadius: BorderRadius.circular(8),
                        ),
                        child: Text(
                          course.level.toUpperCase(),
                          style: const TextStyle(
                            fontSize: 12,
                            fontWeight: FontWeight.w600,
                            color: AppTheme.secondary700,
                          ),
                        ),
                      ),
                    ],
                  ),
                  
                  const SizedBox(height: 12),
                  
                  // Course Title
                  Text(
                    course.title,
                    style: Theme.of(context).textTheme.titleLarge?.copyWith(
                      fontWeight: FontWeight.bold,
                      color: AppTheme.textPrimary,
                    ),
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                  ),
                  
                  const SizedBox(height: 8),
                  
                  // Course Description
                  Text(
                    course.description,
                    style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                      color: AppTheme.secondary600,
                    ),
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                  ),
                  
                  const SizedBox(height: 12),
                  
                  // Instructor
                  Row(
                    children: [
                      CircleAvatar(
                        radius: 12,
                        backgroundColor: AppTheme.primary100,
                        child: course.instructorImage != null
                            ? ClipOval(
                                child: Image.network(
                                  course.instructorImage!,
                                  width: 24,
                                  height: 24,
                                  fit: BoxFit.cover,
                                  errorBuilder: (context, error, stackTrace) {
                                    return const Icon(
                                      Icons.person,
                                      size: 16,
                                      color: AppTheme.primary600,
                                    );
                                  },
                                ),
                              )
                            : const Icon(
                                Icons.person,
                                size: 16,
                                color: AppTheme.primary600,
                              ),
                      ),
                      const SizedBox(width: 8),
                      Expanded(
                        child: Text(
                          course.instructor,
                          style: Theme.of(context).textTheme.bodySmall?.copyWith(
                            color: AppTheme.secondary600,
                          ),
                          overflow: TextOverflow.ellipsis,
                        ),
                      ),
                    ],
                  ),
                  
                  const SizedBox(height: 12),
                  
                  // Course Stats
                  Row(
                    children: [
                      // Duration
                      Row(
                        children: [
                          const Icon(
                            Icons.access_time,
                            size: 16,
                            color: AppTheme.secondary500,
                          ),
                          const SizedBox(width: 4),
                          Text(
                            course.formattedDuration,
                            style: Theme.of(context).textTheme.bodySmall?.copyWith(
                              color: AppTheme.secondary500,
                            ),
                          ),
                        ],
                      ),
                      
                      const SizedBox(width: 16),
                      
                      // Lessons Count
                      Row(
                        children: [
                          const Icon(
                            Icons.play_circle_outline,
                            size: 16,
                            color: AppTheme.secondary500,
                          ),
                          const SizedBox(width: 4),
                          Text(
                            '${course.lessonsCount} lessons',
                            style: Theme.of(context).textTheme.bodySmall?.copyWith(
                              color: AppTheme.secondary500,
                            ),
                          ),
                        ],
                      ),
                      
                      const SizedBox(width: 16),
                      
                      // Rating
                      Row(
                        children: [
                          const Icon(
                            Icons.star,
                            size: 16,
                            color: AppTheme.accent500,
                          ),
                          const SizedBox(width: 4),
                          Text(
                            course.rating.toStringAsFixed(1),
                            style: Theme.of(context).textTheme.bodySmall?.copyWith(
                              color: AppTheme.secondary500,
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                  
                  // Progress Bar (if enrolled)
                  if (showProgress && course.isEnrolled) ...[
                    const SizedBox(height: 12),
                    LinearProgressIndicator(
                      value: course.progress,
                      backgroundColor: AppTheme.secondary200,
                      valueColor: const AlwaysStoppedAnimation<Color>(AppTheme.primary500),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      '${(course.progress * 100).toInt()}% Complete',
                      style: Theme.of(context).textTheme.bodySmall?.copyWith(
                        color: AppTheme.primary600,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ],
                  
                  const SizedBox(height: 16),
                  
                  // Price and Action Button
                  Row(
                    children: [
                      Expanded(
                        child: Text(
                          course.formattedPrice,
                          style: Theme.of(context).textTheme.titleMedium?.copyWith(
                            fontWeight: FontWeight.bold,
                            color: course.isFree ? AppTheme.success600 : AppTheme.primary600,
                          ),
                        ),
                      ),
                      ElevatedButton(
                        onPressed: onTap,
                        style: ElevatedButton.styleFrom(
                          backgroundColor: course.isEnrolled 
                              ? AppTheme.success500 
                              : AppTheme.primary500,
                          foregroundColor: Colors.white,
                          padding: const EdgeInsets.symmetric(
                            horizontal: 16,
                            vertical: 8,
                          ),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(8),
                          ),
                        ),
                        child: Text(
                          course.isEnrolled ? 'Continue' : 'Enroll Now',
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
} 