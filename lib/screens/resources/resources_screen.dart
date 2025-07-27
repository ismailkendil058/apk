import 'package:flutter/material.dart';
import '../../widgets/custom_app_bar.dart';
import '../../widgets/drawer_menu.dart';

class ResourcesScreen extends StatelessWidget {
  const ResourcesScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBar(title: 'Resources', showBackButton: true),
      drawer: const DrawerMenu(),
      body: const Center(child: Text('Resources - Coming Soon')),
    );
  }
}