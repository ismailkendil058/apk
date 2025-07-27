import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:provider/provider.dart';
import '../providers/auth_provider.dart';
import '../widgets/custom_app_bar.dart';
import '../widgets/drawer_menu.dart';
import '../widgets/partner_carousel.dart';
import '../widgets/featured_courses.dart';
import '../widgets/testimonials_section.dart';
import '../widgets/stats_section.dart';
import '../widgets/cta_section.dart';
import '../config/theme.dart';

class LandingScreen extends StatefulWidget {
  const LandingScreen({super.key});

  @override
  State<LandingScreen> createState() => _LandingScreenState();
}

class _LandingScreenState extends State<LandingScreen> {
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _scaffoldKey,
      appBar: CustomAppBar(
        title: 'Connectech Pro',
        onMenuPressed: () => _scaffoldKey.currentState?.openDrawer(),
      ),
      drawer: const DrawerMenu(),
      body: SingleChildScrollView(
        child: Column(
          children: [
            // Hero Section
            _buildHeroSection(),
            
            // Partner Carousel
            const PartnerCarousel(),
            
            // Stats Section
            const StatsSection(),
            
            // Featured Courses
            const FeaturedCourses(),
            
            // Testimonials
            const TestimonialsSection(),
            
            // CTA Section
            const CTASection(),
          ],
        ),
      ),
    );
  }

  Widget _buildHeroSection() {
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            AppTheme.primary50,
            AppTheme.primary100,
            Colors.white,
          ],
        ),
      ),
      child: Column(
        children: [
          const SizedBox(height: 40),
          
          // Main Heading
          Text(
            'Transform Your Future with Expert-Led Tech Education',
            style: Theme.of(context).textTheme.headlineMedium?.copyWith(
              fontWeight: FontWeight.bold,
              color: AppTheme.textPrimary,
              height: 1.2,
            ),
            textAlign: TextAlign.center,
          ),
          
          const SizedBox(height: 16),
          
          // Subtitle
          Text(
            'Master in-demand skills with our comprehensive courses designed by industry experts. Start your journey to success today.',
            style: Theme.of(context).textTheme.bodyLarge?.copyWith(
              color: AppTheme.secondary600,
              height: 1.5,
            ),
            textAlign: TextAlign.center,
          ),
          
          const SizedBox(height: 32),
          
          // CTA Buttons
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Expanded(
                child: ElevatedButton(
                  onPressed: () => context.go('/courses'),
                  style: ElevatedButton.styleFrom(
                    padding: const EdgeInsets.symmetric(vertical: 16),
                    backgroundColor: AppTheme.primary500,
                    foregroundColor: Colors.white,
                  ),
                  child: const Text(
                    'Explore Courses',
                    style: TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ),
              ),
              
              const SizedBox(width: 16),
              
              Expanded(
                child: OutlinedButton(
                  onPressed: () => context.go('/about'),
                  style: OutlinedButton.styleFrom(
                    padding: const EdgeInsets.symmetric(vertical: 16),
                    side: const BorderSide(color: AppTheme.primary500),
                  ),
                  child: const Text(
                    'Learn More',
                    style: TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.w600,
                      color: AppTheme.primary500,
                    ),
                  ),
                ),
              ),
            ],
          ),
          
          const SizedBox(height: 40),
          
          // Features Grid
          _buildFeaturesGrid(),
          
          const SizedBox(height: 40),
        ],
      ),
    );
  }

  Widget _buildFeaturesGrid() {
    final features = [
      {
        'icon': Icons.school,
        'title': 'Expert Instructors',
        'description': 'Learn from industry professionals with years of experience',
      },
      {
        'icon': Icons.access_time,
        'title': 'Flexible Learning',
        'description': 'Study at your own pace with 24/7 access to courses',
      },
      {
        'icon': Icons.verified,
        'title': 'Certification',
        'description': 'Earn certificates upon completion to boost your career',
      },
      {
        'icon': Icons.support_agent,
        'title': '24/7 Support',
        'description': 'Get help whenever you need it from our support team',
      },
    ];

    return GridView.builder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        crossAxisSpacing: 16,
        mainAxisSpacing: 16,
        childAspectRatio: 1.2,
      ),
      itemCount: features.length,
      itemBuilder: (context, index) {
        final feature = features[index];
        return Card(
          elevation: 0,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(16),
            side: const BorderSide(color: AppTheme.secondary200),
          ),
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Container(
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: AppTheme.primary100,
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Icon(
                    feature['icon'] as IconData,
                    size: 32,
                    color: AppTheme.primary600,
                  ),
                ),
                const SizedBox(height: 12),
                Text(
                  feature['title'] as String,
                  style: const TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.w600,
                    color: AppTheme.textPrimary,
                  ),
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 8),
                Text(
                  feature['description'] as String,
                  style: const TextStyle(
                    fontSize: 14,
                    color: AppTheme.secondary600,
                  ),
                  textAlign: TextAlign.center,
                  maxLines: 3,
                  overflow: TextOverflow.ellipsis,
                ),
              ],
            ),
          ),
        );
      },
    );
  }
} 