import 'package:flutter/material.dart';
import '../../widgets/custom_app_bar.dart';
import '../../widgets/drawer_menu.dart';

class ArticleScreen extends StatelessWidget {
  final String title;
  
  const ArticleScreen({super.key, required this.title});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBar(title: 'Article', showBackButton: true),
      drawer: const DrawerMenu(),
      body: Center(child: Text('Article: $title - Coming Soon')),
    );
  }
} 