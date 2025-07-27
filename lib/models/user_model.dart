class UserProfile {
  final String id;
  final String email;
  final String firstName;
  final String lastName;
  final String? profilePicture;
  final String role;
  final String? phone;
  final String? bio;
  final DateTime createdAt;
  final DateTime updatedAt;
  final Map<String, dynamic> preferences;

  UserProfile({
    required this.id,
    required this.email,
    required this.firstName,
    required this.lastName,
    this.profilePicture,
    required this.role,
    this.phone,
    this.bio,
    required this.createdAt,
    required this.updatedAt,
    this.preferences = const {},
  });

  factory UserProfile.fromJson(Map<String, dynamic> json) {
    return UserProfile(
      id: json['id'] ?? '',
      email: json['email'] ?? '',
      firstName: json['first_name'] ?? '',
      lastName: json['last_name'] ?? '',
      profilePicture: json['profile_picture'],
      role: json['role'] ?? 'student',
      phone: json['phone'],
      bio: json['bio'],
      createdAt: DateTime.parse(json['created_at'] ?? DateTime.now().toIso8601String()),
      updatedAt: DateTime.parse(json['updated_at'] ?? DateTime.now().toIso8601String()),
      preferences: json['preferences'] ?? {},
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'email': email,
      'first_name': firstName,
      'last_name': lastName,
      'profile_picture': profilePicture,
      'role': role,
      'phone': phone,
      'bio': bio,
      'created_at': createdAt.toIso8601String(),
      'updated_at': updatedAt.toIso8601String(),
      'preferences': preferences,
    };
  }

  UserProfile copyWith({
    String? id,
    String? email,
    String? firstName,
    String? lastName,
    String? profilePicture,
    String? role,
    String? phone,
    String? bio,
    DateTime? createdAt,
    DateTime? updatedAt,
    Map<String, dynamic>? preferences,
  }) {
    return UserProfile(
      id: id ?? this.id,
      email: email ?? this.email,
      firstName: firstName ?? this.firstName,
      lastName: lastName ?? this.lastName,
      profilePicture: profilePicture ?? this.profilePicture,
      role: role ?? this.role,
      phone: phone ?? this.phone,
      bio: bio ?? this.bio,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
      preferences: preferences ?? this.preferences,
    );
  }

  String get fullName => '$firstName $lastName';
  String get displayName => firstName.isNotEmpty ? firstName : email;
  bool get isAdmin => role == 'admin';
  bool get isStudent => role == 'student';
}

class QuizResult {
  final String id;
  final String userId;
  final String courseId;
  final String quizId;
  final int score;
  final int totalQuestions;
  final List<QuizAnswer> answers;
  final DateTime completedAt;
  final int timeSpent; // in seconds

  QuizResult({
    required this.id,
    required this.userId,
    required this.courseId,
    required this.quizId,
    required this.score,
    required this.totalQuestions,
    required this.answers,
    required this.completedAt,
    required this.timeSpent,
  });

  factory QuizResult.fromJson(Map<String, dynamic> json) {
    return QuizResult(
      id: json['id'] ?? '',
      userId: json['user_id'] ?? '',
      courseId: json['course_id'] ?? '',
      quizId: json['quiz_id'] ?? '',
      score: json['score'] ?? 0,
      totalQuestions: json['total_questions'] ?? 0,
      answers: (json['answers'] as List<dynamic>?)
          ?.map((answer) => QuizAnswer.fromJson(answer))
          .toList() ?? [],
      completedAt: DateTime.parse(json['completed_at'] ?? DateTime.now().toIso8601String()),
      timeSpent: json['time_spent'] ?? 0,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'user_id': userId,
      'course_id': courseId,
      'quiz_id': quizId,
      'score': score,
      'total_questions': totalQuestions,
      'answers': answers.map((answer) => answer.toJson()).toList(),
      'completed_at': completedAt.toIso8601String(),
      'time_spent': timeSpent,
    };
  }

  double get percentage => totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
  bool get passed => percentage >= 70; // 70% passing threshold
}

class QuizAnswer {
  final String questionId;
  final String selectedAnswer;
  final bool isCorrect;
  final int timeSpent; // in seconds

  QuizAnswer({
    required this.questionId,
    required this.selectedAnswer,
    required this.isCorrect,
    required this.timeSpent,
  });

  factory QuizAnswer.fromJson(Map<String, dynamic> json) {
    return QuizAnswer(
      questionId: json['question_id'] ?? '',
      selectedAnswer: json['selected_answer'] ?? '',
      isCorrect: json['is_correct'] ?? false,
      timeSpent: json['time_spent'] ?? 0,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'question_id': questionId,
      'selected_answer': selectedAnswer,
      'is_correct': isCorrect,
      'time_spent': timeSpent,
    };
  }
}

class ConsultationRequest {
  final String id;
  final String userId;
  final String name;
  final String email;
  final String phone;
  final String subject;
  final String message;
  final DateTime preferredDate;
  final String preferredTime;
  final String status; // pending, confirmed, completed, cancelled
  final DateTime createdAt;

  ConsultationRequest({
    required this.id,
    required this.userId,
    required this.name,
    required this.email,
    required this.phone,
    required this.subject,
    required this.message,
    required this.preferredDate,
    required this.preferredTime,
    this.status = 'pending',
    required this.createdAt,
  });

  factory ConsultationRequest.fromJson(Map<String, dynamic> json) {
    return ConsultationRequest(
      id: json['id'] ?? '',
      userId: json['user_id'] ?? '',
      name: json['name'] ?? '',
      email: json['email'] ?? '',
      phone: json['phone'] ?? '',
      subject: json['subject'] ?? '',
      message: json['message'] ?? '',
      preferredDate: DateTime.parse(json['preferred_date'] ?? DateTime.now().toIso8601String()),
      preferredTime: json['preferred_time'] ?? '',
      status: json['status'] ?? 'pending',
      createdAt: DateTime.parse(json['created_at'] ?? DateTime.now().toIso8601String()),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'user_id': userId,
      'name': name,
      'email': email,
      'phone': phone,
      'subject': subject,
      'message': message,
      'preferred_date': preferredDate.toIso8601String(),
      'preferred_time': preferredTime,
      'status': status,
      'created_at': createdAt.toIso8601String(),
    };
  }
} 