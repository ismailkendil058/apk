import 'package:flutter/material.dart';
import '../../widgets/custom_app_bar.dart';
import '../../widgets/drawer_menu.dart';
import '../../config/theme.dart';

class ContactScreen extends StatelessWidget {
  const ContactScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBar(title: 'Contact Us', showBackButton: true),
      drawer: const DrawerMenu(),
      body: const Center(child: Text('Contact Us - Coming Soon')),
    );
  }
} 