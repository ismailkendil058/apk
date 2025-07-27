import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:provider/provider.dart';
import '../providers/auth_provider.dart';
import '../config/theme.dart';

class DrawerMenu extends StatelessWidget {
  const DrawerMenu({super.key});

  @override
  Widget build(BuildContext context) {
    final authProvider = Provider.of<AuthProvider>(context);
    final user = authProvider.user;

    return Drawer(
      child: Column(
        children: [
          // Header
          Container(
            padding: const EdgeInsets.fromLTRB(24, 60, 24, 24),
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [
                  AppTheme.primary500,
                  AppTheme.primary600,
                ],
              ),
            ),
            child: Column(
              children: [
                // Logo
                Container(
                  width: 60,
                  height: 60,
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: const Icon(
                    Icons.school,
                    size: 30,
                    color: AppTheme.primary600,
                  ),
                ),
                const SizedBox(height: 16),
                Text(
                  'Connectech Pro',
                  style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                if (user != null) ...[
                  const SizedBox(height: 8),
                  Text(
                    user.email ?? '',
                    style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                      color: Colors.white70,
                    ),
                  ),
                ],
              ],
            ),
          ),
          
          // Menu Items
          Expanded(
            child: ListView(
              padding: EdgeInsets.zero,
              children: [
                _buildMenuItem(
                  context,
                  icon: Icons.home,
                  title: 'Home',
                  onTap: () {
                    Navigator.pop(context);
                    context.go('/');
                  },
                ),
                _buildMenuItem(
                  context,
                  icon: Icons.school,
                  title: 'Courses',
                  onTap: () {
                    Navigator.pop(context);
                    context.go('/courses');
                  },
                ),
                _buildMenuItem(
                  context,
                  icon: Icons.book,
                  title: 'Resources',
                  onTap: () {
                    Navigator.pop(context);
                    context.go('/resources');
                  },
                ),
                _buildMenuItem(
                  context,
                  icon: Icons.schedule,
                  title: 'Schedule Consultation',
                  onTap: () {
                    Navigator.pop(context);
                    context.go('/schedule-consultation');
                  },
                ),
                const Divider(),
                _buildMenuItem(
                  context,
                  icon: Icons.info,
                  title: 'About Us',
                  onTap: () {
                    Navigator.pop(context);
                    context.go('/about');
                  },
                ),
                _buildMenuItem(
                  context,
                  icon: Icons.contact_support,
                  title: 'Contact',
                  onTap: () {
                    Navigator.pop(context);
                    context.go('/contact');
                  },
                ),
                _buildMenuItem(
                  context,
                  icon: Icons.flag,
                  title: 'Mission',
                  onTap: () {
                    Navigator.pop(context);
                    context.go('/mission');
                  },
                ),
                _buildMenuItem(
                  context,
                  icon: Icons.favorite,
                  title: 'Values',
                  onTap: () {
                    Navigator.pop(context);
                    context.go('/values');
                  },
                ),
                _buildMenuItem(
                  context,
                  icon: Icons.visibility,
                  title: 'Vision',
                  onTap: () {
                    Navigator.pop(context);
                    context.go('/vision');
                  },
                ),
                
                // Conditional items based on authentication
                if (user != null) ...[
                  const Divider(),
                  _buildMenuItem(
                    context,
                    icon: Icons.dashboard,
                    title: 'Dashboard',
                    onTap: () {
                      Navigator.pop(context);
                      if (user.role == 'admin') {
                        context.go('/admin');
                      } else {
                        context.go('/dashboard');
                      }
                    },
                  ),
                  if (user.role == 'admin') ...[
                    _buildMenuItem(
                      context,
                      icon: Icons.admin_panel_settings,
                      title: 'Course Management',
                      onTap: () {
                        Navigator.pop(context);
                        context.go('/admin/courses');
                      },
                    ),
                  ],
                  const Divider(),
                  _buildMenuItem(
                    context,
                    icon: Icons.logout,
                    title: 'Sign Out',
                    onTap: () async {
                      Navigator.pop(context);
                      await authProvider.signOut();
                      context.go('/');
                    },
                  ),
                ] else ...[
                  const Divider(),
                  _buildMenuItem(
                    context,
                    icon: Icons.login,
                    title: 'Sign In',
                    onTap: () {
                      Navigator.pop(context);
                      context.go('/login');
                    },
                  ),
                  _buildMenuItem(
                    context,
                    icon: Icons.person_add,
                    title: 'Sign Up',
                    onTap: () {
                      Navigator.pop(context);
                      context.go('/signup');
                    },
                  ),
                ],
              ],
            ),
          ),
          
          // Footer
          Container(
            padding: const EdgeInsets.all(24),
            child: Column(
              children: [
                const Divider(),
                const SizedBox(height: 16),
                Text(
                  '© 2024 Connectech Pro',
                  style: Theme.of(context).textTheme.bodySmall?.copyWith(
                    color: AppTheme.secondary500,
                  ),
                ),
                const SizedBox(height: 8),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    TextButton(
                      onPressed: () {
                        Navigator.pop(context);
                        context.go('/about');
                      },
                      child: const Text('Privacy Policy'),
                    ),
                    const Text(' • '),
                    TextButton(
                      onPressed: () {
                        Navigator.pop(context);
                        context.go('/about');
                      },
                      child: const Text('Terms of Service'),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildMenuItem(
    BuildContext context, {
    required IconData icon,
    required String title,
    required VoidCallback onTap,
  }) {
    return ListTile(
      leading: Icon(
        icon,
        color: AppTheme.secondary600,
      ),
      title: Text(
        title,
        style: const TextStyle(
          color: AppTheme.textPrimary,
          fontWeight: FontWeight.w500,
        ),
      ),
      onTap: onTap,
      contentPadding: const EdgeInsets.symmetric(horizontal: 24),
    );
  }
} 