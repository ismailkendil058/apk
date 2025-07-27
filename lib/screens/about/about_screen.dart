import 'package:flutter/material.dart';
import '../../widgets/custom_app_bar.dart';
import '../../widgets/drawer_menu.dart';
import '../../config/theme.dart';

class AboutScreen extends StatelessWidget {
  const AboutScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBar(
        title: 'About Us',
        showBackButton: true,
      ),
      drawer: const DrawerMenu(),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'About Connectech Pro',
              style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                fontWeight: FontWeight.bold,
                color: AppTheme.textPrimary,
              ),
            ),
            const SizedBox(height: 16),
            Text(
              'Connectech Pro is a leading e-learning platform dedicated to providing high-quality technology education to learners worldwide.',
              style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                color: AppTheme.secondary600,
                height: 1.6,
              ),
            ),
            const SizedBox(height: 24),
            Text(
              'Our Mission',
              style: Theme.of(context).textTheme.titleLarge?.copyWith(
                fontWeight: FontWeight.bold,
                color: AppTheme.textPrimary,
              ),
            ),
            const SizedBox(height: 12),
            Text(
              'To democratize education by making high-quality tech courses accessible to everyone, regardless of their background or location.',
              style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                color: AppTheme.secondary600,
              ),
            ),
          ],
        ),
      ),
    );
  }
} 