import 'package:flutter/material.dart';
import '../../widgets/custom_app_bar.dart';
import '../../widgets/drawer_menu.dart';

class ValuesScreen extends StatelessWidget {
  const ValuesScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBar(title: 'Our Values', showBackButton: true),
      drawer: const DrawerMenu(),
      body: const Center(child: Text('Our Values - Coming Soon')),
    );
  }
} 