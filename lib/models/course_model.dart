import 'user_model.dart';

class Course {
  final String id;
  final String title;
  final String description;
  final String instructor;
  final String? instructorImage;
  final String? thumbnail;
  final String category;
  final String level; // beginner, intermediate, advanced
  final int duration; // in minutes
  final int lessonsCount;
  final double rating;
  final int ratingCount;
  final double price;
  final bool isFree;
  final List<String> tags;
  final List<Lesson> lessons;
  final List<Quiz> quizzes;
  final DateTime createdAt;
  final DateTime updatedAt;
  final bool isPublished;
  final bool isEnrolled;
  final double progress; // 0.0 to 1.0
  final List<String> completedLessons;
  final String? certificateUrl;

  Course({
    required this.id,
    required this.title,
    required this.description,
    required this.instructor,
    this.instructorImage,
    this.thumbnail,
    required this.category,
    required this.level,
    required this.duration,
    required this.lessonsCount,
    this.rating = 0.0,
    this.ratingCount = 0,
    this.price = 0.0,
    this.isFree = true,
    this.tags = const [],
    this.lessons = const [],
    this.quizzes = const [],
    required this.createdAt,
    required this.updatedAt,
    this.isPublished = true,
    this.isEnrolled = false,
    this.progress = 0.0,
    this.completedLessons = const [],
    this.certificateUrl,
  });

  factory Course.fromJson(Map<String, dynamic> json) {
    return Course(
      id: json['id'] ?? '',
      title: json['title'] ?? '',
      description: json['description'] ?? '',
      instructor: json['instructor'] ?? '',
      instructorImage: json['instructor_image'],
      thumbnail: json['thumbnail'],
      category: json['category'] ?? '',
      level: json['level'] ?? 'beginner',
      duration: json['duration'] ?? 0,
      lessonsCount: json['lessons_count'] ?? 0,
      rating: (json['rating'] ?? 0.0).toDouble(),
      ratingCount: json['rating_count'] ?? 0,
      price: (json['price'] ?? 0.0).toDouble(),
      isFree: json['is_free'] ?? true,
      tags: List<String>.from(json['tags'] ?? []),
      lessons: (json['lessons'] as List<dynamic>?)
          ?.map((lesson) => Lesson.fromJson(lesson))
          .toList() ?? [],
      quizzes: (json['quizzes'] as List<dynamic>?)
          ?.map((quiz) => Quiz.fromJson(quiz))
          .toList() ?? [],
      createdAt: DateTime.parse(json['created_at'] ?? DateTime.now().toIso8601String()),
      updatedAt: DateTime.parse(json['updated_at'] ?? DateTime.now().toIso8601String()),
      isPublished: json['is_published'] ?? true,
      isEnrolled: json['is_enrolled'] ?? false,
      progress: (json['progress'] ?? 0.0).toDouble(),
      completedLessons: List<String>.from(json['completed_lessons'] ?? []),
      certificateUrl: json['certificate_url'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'title': title,
      'description': description,
      'instructor': instructor,
      'instructor_image': instructorImage,
      'thumbnail': thumbnail,
      'category': category,
      'level': level,
      'duration': duration,
      'lessons_count': lessonsCount,
      'rating': rating,
      'rating_count': ratingCount,
      'price': price,
      'is_free': isFree,
      'tags': tags,
      'lessons': lessons.map((lesson) => lesson.toJson()).toList(),
      'quizzes': quizzes.map((quiz) => quiz.toJson()).toList(),
      'created_at': createdAt.toIso8601String(),
      'updated_at': updatedAt.toIso8601String(),
      'is_published': isPublished,
      'is_enrolled': isEnrolled,
      'progress': progress,
      'completed_lessons': completedLessons,
      'certificate_url': certificateUrl,
    };
  }

  Course copyWith({
    String? id,
    String? title,
    String? description,
    String? instructor,
    String? instructorImage,
    String? thumbnail,
    String? category,
    String? level,
    int? duration,
    int? lessonsCount,
    double? rating,
    int? ratingCount,
    double? price,
    bool? isFree,
    List<String>? tags,
    List<Lesson>? lessons,
    List<Quiz>? quizzes,
    DateTime? createdAt,
    DateTime? updatedAt,
    bool? isPublished,
    bool? isEnrolled,
    double? progress,
    List<String>? completedLessons,
    String? certificateUrl,
  }) {
    return Course(
      id: id ?? this.id,
      title: title ?? this.title,
      description: description ?? this.description,
      instructor: instructor ?? this.instructor,
      instructorImage: instructorImage ?? this.instructorImage,
      thumbnail: thumbnail ?? this.thumbnail,
      category: category ?? this.category,
      level: level ?? this.level,
      duration: duration ?? this.duration,
      lessonsCount: lessonsCount ?? this.lessonsCount,
      rating: rating ?? this.rating,
      ratingCount: ratingCount ?? this.ratingCount,
      price: price ?? this.price,
      isFree: isFree ?? this.isFree,
      tags: tags ?? this.tags,
      lessons: lessons ?? this.lessons,
      quizzes: quizzes ?? this.quizzes,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
      isPublished: isPublished ?? this.isPublished,
      isEnrolled: isEnrolled ?? this.isEnrolled,
      progress: progress ?? this.progress,
      completedLessons: completedLessons ?? this.completedLessons,
      certificateUrl: certificateUrl ?? this.certificateUrl,
    );
  }

  bool get isCompleted => progress >= 1.0;
  bool get hasCertificate => certificateUrl != null;
  int get completedLessonsCount => completedLessons.length;
  int get remainingLessonsCount => lessonsCount - completedLessonsCount;
  String get formattedDuration {
    final hours = duration ~/ 60;
    final minutes = duration % 60;
    if (hours > 0) {
      return '${hours}h ${minutes}m';
    }
    return '${minutes}m';
  }
  String get formattedPrice => isFree ? 'Free' : '\$${price.toStringAsFixed(2)}';
}

class Lesson {
  final String id;
  final String title;
  final String description;
  final String type; // video, text, quiz, assignment
  final String? content;
  final String? videoUrl;
  final String? thumbnail;
  final int duration; // in minutes
  final int order;
  final bool isCompleted;
  final List<String> resources; // URLs to additional resources
  final Map<String, dynamic> metadata;

  Lesson({
    required this.id,
    required this.title,
    required this.description,
    required this.type,
    this.content,
    this.videoUrl,
    this.thumbnail,
    required this.duration,
    required this.order,
    this.isCompleted = false,
    this.resources = const [],
    this.metadata = const {},
  });

  factory Lesson.fromJson(Map<String, dynamic> json) {
    return Lesson(
      id: json['id'] ?? '',
      title: json['title'] ?? '',
      description: json['description'] ?? '',
      type: json['type'] ?? 'text',
      content: json['content'],
      videoUrl: json['video_url'],
      thumbnail: json['thumbnail'],
      duration: json['duration'] ?? 0,
      order: json['order'] ?? 0,
      isCompleted: json['is_completed'] ?? false,
      resources: List<String>.from(json['resources'] ?? []),
      metadata: json['metadata'] ?? {},
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'title': title,
      'description': description,
      'type': type,
      'content': content,
      'video_url': videoUrl,
      'thumbnail': thumbnail,
      'duration': duration,
      'order': order,
      'is_completed': isCompleted,
      'resources': resources,
      'metadata': metadata,
    };
  }

  Lesson copyWith({
    String? id,
    String? title,
    String? description,
    String? type,
    String? content,
    String? videoUrl,
    String? thumbnail,
    int? duration,
    int? order,
    bool? isCompleted,
    List<String>? resources,
    Map<String, dynamic>? metadata,
  }) {
    return Lesson(
      id: id ?? this.id,
      title: title ?? this.title,
      description: description ?? this.description,
      type: type ?? this.type,
      content: content ?? this.content,
      videoUrl: videoUrl ?? this.videoUrl,
      thumbnail: thumbnail ?? this.thumbnail,
      duration: duration ?? this.duration,
      order: order ?? this.order,
      isCompleted: isCompleted ?? this.isCompleted,
      resources: resources ?? this.resources,
      metadata: metadata ?? this.metadata,
    );
  }

  String get formattedDuration {
    final hours = duration ~/ 60;
    final minutes = duration % 60;
    if (hours > 0) {
      return '${hours}h ${minutes}m';
    }
    return '${minutes}m';
  }
}

class Quiz {
  final String id;
  final String title;
  final String description;
  final List<QuizQuestion> questions;
  final int timeLimit; // in minutes, 0 for no limit
  final int passingScore; // percentage
  final bool allowRetake;
  final int maxAttempts; // 0 for unlimited
  final DateTime? dueDate;
  final bool isCompleted;
  final QuizResult? lastResult;

  Quiz({
    required this.id,
    required this.title,
    required this.description,
    required this.questions,
    this.timeLimit = 0,
    this.passingScore = 70,
    this.allowRetake = true,
    this.maxAttempts = 0,
    this.dueDate,
    this.isCompleted = false,
    this.lastResult,
  });

  factory Quiz.fromJson(Map<String, dynamic> json) {
    return Quiz(
      id: json['id'] ?? '',
      title: json['title'] ?? '',
      description: json['description'] ?? '',
      questions: (json['questions'] as List<dynamic>?)
          ?.map((question) => QuizQuestion.fromJson(question))
          .toList() ?? [],
      timeLimit: json['time_limit'] ?? 0,
      passingScore: json['passing_score'] ?? 70,
      allowRetake: json['allow_retake'] ?? true,
      maxAttempts: json['max_attempts'] ?? 0,
      dueDate: json['due_date'] != null 
          ? DateTime.parse(json['due_date']) 
          : null,
      isCompleted: json['is_completed'] ?? false,
      lastResult: json['last_result'] != null 
          ? QuizResult.fromJson(json['last_result']) 
          : null,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'title': title,
      'description': description,
      'questions': questions.map((question) => question.toJson()).toList(),
      'time_limit': timeLimit,
      'passing_score': passingScore,
      'allow_retake': allowRetake,
      'max_attempts': maxAttempts,
      'due_date': dueDate?.toIso8601String(),
      'is_completed': isCompleted,
      'last_result': lastResult?.toJson(),
    };
  }

  int get totalQuestions => questions.length;
  int get totalPoints => questions.fold(0, (sum, question) => sum + question.points);
  bool get hasTimeLimit => timeLimit > 0;
  bool get isOverdue => dueDate != null && DateTime.now().isAfter(dueDate!);
}

class QuizQuestion {
  final String id;
  final String question;
  final String type; // multiple_choice, true_false, short_answer, essay
  final List<String> options; // for multiple choice questions
  final String correctAnswer;
  final String? explanation;
  final int points;
  final int order;

  QuizQuestion({
    required this.id,
    required this.question,
    required this.type,
    this.options = const [],
    required this.correctAnswer,
    this.explanation,
    this.points = 1,
    required this.order,
  });

  factory QuizQuestion.fromJson(Map<String, dynamic> json) {
    return QuizQuestion(
      id: json['id'] ?? '',
      question: json['question'] ?? '',
      type: json['type'] ?? 'multiple_choice',
      options: List<String>.from(json['options'] ?? []),
      correctAnswer: json['correct_answer'] ?? '',
      explanation: json['explanation'],
      points: json['points'] ?? 1,
      order: json['order'] ?? 0,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'question': question,
      'type': type,
      'options': options,
      'correct_answer': correctAnswer,
      'explanation': explanation,
      'points': points,
      'order': order,
    };
  }

  bool isCorrect(String answer) {
    return answer.toLowerCase().trim() == correctAnswer.toLowerCase().trim();
  }
} 