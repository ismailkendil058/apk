import 'package:flutter/material.dart';
import '../config/theme.dart';

class CustomAppBar extends StatelessWidget implements PreferredSizeWidget {
  final String title;
  final VoidCallback? onMenuPressed;
  final List<Widget>? actions;
  final bool showBackButton;
  final Color? backgroundColor;
  final Color? foregroundColor;

  const CustomAppBar({
    super.key,
    required this.title,
    this.onMenuPressed,
    this.actions,
    this.showBackButton = true,
    this.backgroundColor,
    this.foregroundColor,
  });

  @override
  Widget build(BuildContext context) {
    return AppBar(
      title: Text(
        title,
        style: TextStyle(
          color: foregroundColor ?? AppTheme.textPrimary,
          fontWeight: FontWeight.bold,
        ),
      ),
      centerTitle: true,
      backgroundColor: backgroundColor ?? AppTheme.background,
      elevation: 0,
      leading: onMenuPressed != null
          ? IconButton(
              icon: Icon(
                Icons.menu,
                color: foregroundColor ?? AppTheme.textPrimary,
              ),
              onPressed: onMenuPressed,
            )
          : showBackButton
              ? IconButton(
                  icon: Icon(
                    Icons.arrow_back,
                    color: foregroundColor ?? AppTheme.textPrimary,
                  ),
                  onPressed: () => Navigator.of(context).pop(),
                )
              : null,
      actions: actions,
    );
  }

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);
} 