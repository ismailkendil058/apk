// Sample mock data for testing without Supabase
export const mockData = {
  users: [
    { id: '1', email: 'student@example.com', password: 'password', role: 'student', full_name: 'Student User' },
    { id: '2', email: 'admin@example.com', password: 'adminpass', role: 'admin', full_name: 'Admin User' },
  ],
  courses: [
    { id: 1, title: 'Digital Marketing 101', description: 'Intro to digital marketing', instructor: 'Jane Doe', category: 'Marketing', created_at: new Date().toISOString() },
    { id: 2, title: 'Project Management Basics', description: 'Learn project management', instructor: 'John Smith', category: 'Management', created_at: new Date().toISOString() },
  ],
  profiles: [
    { id: '1', full_name: 'Student User', email: 'student@example.com', role: 'student' },
    { id: '2', full_name: 'Admin User', email: 'admin@example.com', role: 'admin' },
  ],
  enrollments: [],
  quizzes: [],
  quizQuestions: {},
  quizScores: [],
};

export const mockSupabase = {
  auth: {
    signUp: async (email, password, role = 'student') => {
      const id = (mockData.users.length + 1).toString();
      const user = { id, email, password, role, full_name: email };
      mockData.users.push(user);
      mockData.profiles.push({ id, full_name: email, email, role });
      return { data: { user }, error: null };
    },
    signIn: async (email, password) => {
      const user = mockData.users.find(u => u.email === email && u.password === password);
      if (user) return { data: { user }, error: null };
      return { data: null, error: { message: 'Invalid credentials' } };
    },
    signOut: async () => ({ error: null }),
    getCurrentUser: async () => mockData.users[0], // Always return first user for testing
    onAuthStateChange: (callback) => ({ data: { subscription: { unsubscribe: () => {} } } }),
  },
  db: {
    getUserProfile: async (userId) => {
      const profile = mockData.profiles.find(p => p.id === userId);
      return { data: profile, error: null };
    },
    updateUserProfile: async (userId, updates) => {
      const profile = mockData.profiles.find(p => p.id === userId);
      if (profile) Object.assign(profile, updates);
      return { data: profile, error: null };
    },
    getCourses: async () => ({ data: mockData.courses, error: null }),
    getEnrolledCourses: async (userId) => ({ data: mockData.enrollments, error: null }),
    enrollInCourse: async (userId, courseId) => {
      mockData.enrollments.push({ user_id: userId, course_id: courseId, enrolled_at: new Date().toISOString() });
      return { data: { id: 'new-enrollment' }, error: null };
    },
    getQuizzes: async () => ({ data: mockData.quizzes, error: null }),
    getQuizQuestions: async (quizId) => ({ data: mockData.quizQuestions[quizId] || [], error: null }),
    submitQuizScore: async (userId, quizId, score, answers) => ({ data: { id: 'new-score' }, error: null }),
    getUserQuizScores: async (userId) => ({ data: mockData.quizScores, error: null }),
  },
}; 