import 'package:flutter/material.dart';
import '../../widgets/custom_app_bar.dart';
import '../../widgets/drawer_menu.dart';

class QuizScreen extends StatelessWidget {
  final String courseId;
  
  const QuizScreen({super.key, required this.courseId});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBar(title: 'Quiz', showBackButton: true),
      drawer: const DrawerMenu(),
      body: Center(child: Text('Quiz for Course $courseId - Coming Soon')),
    );
  }
} 