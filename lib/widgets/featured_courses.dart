import 'package:flutter/material.dart';
import '../config/theme.dart';

class FeaturedCourses extends StatelessWidget {
  const FeaturedCourses({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 40),
      child: const Center(
        child: Text(
          'Featured Courses',
          style: TextStyle(
            fontSize: 18,
            fontWeight: FontWeight.w600,
            color: AppTheme.secondary600,
          ),
        ),
      ),
    );
  }
} 