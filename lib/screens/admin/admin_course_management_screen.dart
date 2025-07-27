import 'package:flutter/material.dart';
import '../../widgets/custom_app_bar.dart';
import '../../widgets/drawer_menu.dart';

class AdminCourseManagementScreen extends StatelessWidget {
  const AdminCourseManagementScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBar(title: 'Course Management', showBackButton: true),
      drawer: const DrawerMenu(),
      body: const Center(child: Text('Course Management - Coming Soon')),
    );
  }
}