import 'package:flutter/material.dart';
import '../../widgets/custom_app_bar.dart';
import '../../widgets/drawer_menu.dart';

class VisionScreen extends StatelessWidget {
  const VisionScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBar(title: 'Our Vision', showBackButton: true),
      drawer: const DrawerMenu(),
      body: const Center(child: Text('Our Vision - Coming Soon')),
    );
  }
} 