import 'package:flutter/material.dart';
import '../config/theme.dart';

class PartnerCarousel extends StatelessWidget {
  const PartnerCarousel({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 100,
      padding: const EdgeInsets.symmetric(vertical: 20),
      child: const Center(
        child: Text(
          'Partner Logos',
          style: TextStyle(
            fontSize: 18,
            fontWeight: FontWeight.w600,
            color: AppTheme.secondary600,
          ),
        ),
      ),
    );
  }
} 