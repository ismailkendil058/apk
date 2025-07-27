import 'package:flutter/material.dart';
import '../../widgets/custom_app_bar.dart';
import '../../widgets/drawer_menu.dart';

class MissionScreen extends StatelessWidget {
  const MissionScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBar(title: 'Our Mission', showBackButton: true),
      drawer: const DrawerMenu(),
      body: const Center(child: Text('Our Mission - Coming Soon')),
    );
  }
} 