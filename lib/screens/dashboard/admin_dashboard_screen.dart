import 'package:flutter/material.dart';
import '../../widgets/custom_app_bar.dart';
import '../../widgets/drawer_menu.dart';

class AdminDashboardScreen extends StatelessWidget {
  const AdminDashboardScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBar(title: 'Admin Dashboard', showBackButton: true),
      drawer: const DrawerMenu(),
      body: const Center(child: Text('Admin Dashboard - Coming Soon')),
    );
  }
} 