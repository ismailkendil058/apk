import 'package:flutter/material.dart';
import '../../widgets/custom_app_bar.dart';
import '../../widgets/drawer_menu.dart';

class TeamMemberScreen extends StatelessWidget {
  final String memberId;
  
  const TeamMemberScreen({super.key, required this.memberId});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBar(title: 'Team Member', showBackButton: true),
      drawer: const DrawerMenu(),
      body: Center(child: Text('Team Member $memberId - Coming Soon')),
    );
  }
} 