import 'package:flutter/material.dart';
import '../../widgets/custom_app_bar.dart';
import '../../widgets/drawer_menu.dart';

class ScheduleConsultationScreen extends StatelessWidget {
  const ScheduleConsultationScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBar(title: 'Schedule Consultation', showBackButton: true),
      drawer: const DrawerMenu(),
      body: const Center(child: Text('Schedule Consultation - Coming Soon')),
    );
  }
} 