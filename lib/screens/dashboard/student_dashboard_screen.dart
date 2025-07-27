import 'package:flutter/material.dart';
import '../../widgets/custom_app_bar.dart';
import '../../widgets/drawer_menu.dart';

class StudentDashboardScreen extends StatelessWidget {
  const StudentDashboardScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBar(title: 'Dashboard', showBackButton: true),
      drawer: const DrawerMenu(),
      body: const Center(child: Text('Student Dashboard - Coming Soon')),
    );
  }
} 