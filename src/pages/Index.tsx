
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, BookOpen, Target, Star, CheckCircle2, ArrowRight } from 'lucide-react';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const examDate = new Date('2025-07-15T10:30:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = examDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const studyPlan = [
    { week: "Week 1-2", focus: "Foundation & Concept Clarity", subjects: ["Math Basics", "Science Fundamentals", "Language Grammar"], color: "bg-blue-50 border-blue-200" },
    { week: "Week 3-4", focus: "Practice & Problem Solving", subjects: ["Previous Year Papers", "Sample Questions", "Mock Tests"], color: "bg-green-50 border-green-200" },
    { week: "Week 5-6", focus: "Intensive Revision", subjects: ["Formula Sheets", "Quick Notes", "Speed Practice"], color: "bg-purple-50 border-purple-200" },
    { week: "Week 7", focus: "Final Preparation", subjects: ["Last Minute Tips", "Stress Management", "Exam Strategy"], color: "bg-orange-50 border-orange-200" }
  ];

  const successStories = [
    {
      name: "Priya Sharma",
      story: "Failed in Mathematics by 2 marks, cleared compartment with 85%. Now pursuing Engineering!",
      quote: "Every setback is a setup for a comeback."
    },
    {
      name: "Rahul Kumar",
      story: "From 23 marks to 78 marks in Physics compartment. Hard work pays off!",
      quote: "Success is not final, failure is not fatal. It's the courage to continue that counts."
    },
    {
      name: "Anita Verma",
      story: "Compartment in English Literature turned into distinction. Never give up!",
      quote: "Your limitation—it's only your imagination."
    }
  ];

  const dailyTasks = [
    "📚 Study for 6-8 hours with 15-min breaks",
    "📝 Solve 20 previous year questions",
    "🔄 Revise yesterday's topics for 1 hour",
    "📖 Read NCERT thoroughly",
    "✍️ Practice writing answers in exam format",
    "🧠 Take a mock test weekly",
    "💪 Stay physically active for 30 minutes"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-2">
            <Target className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-semibold text-gray-900">AD Classes CBSE Compartment Success</h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Your Second Chance,<br />
            <span className="text-blue-600">Your Biggest Victory!</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your compartment exam into your greatest success story. You've got this! 💪
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Calendar className="h-5 w-5" />
              <span className="font-medium">CBSE Compartment Exam</span>
            </div>
            <div className="text-sm text-gray-500">July 15, 2025 at 10:30 AM</div>
            
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600">{item.value}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-green-600 font-medium">
              <Clock className="h-4 w-4" />
              <span>Time to make it count!</span>
            </div>
          </div>
        </div>

        {/* 45-Day Study Plan */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="h-6 w-6 text-green-600" />
            <h3 className="text-2xl font-bold text-gray-900">45-Day Victory Plan</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {studyPlan.map((week, index) => (
              <div key={index} className={`${week.color} rounded-lg p-6 border-2`}>
                <h4 className="font-bold text-gray-900 mb-2">{week.week}</h4>
                <p className="text-sm font-medium text-gray-700 mb-3">{week.focus}</p>
                <ul className="space-y-1">
                  {week.subjects.map((subject, idx) => (
                    <li key={idx} className="text-xs text-gray-600 flex items-center">
                      <ArrowRight className="h-3 w-3 mr-1" />
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center">
              <CheckCircle2 className="h-5 w-5 mr-2 text-green-600" />
              Daily Task Checklist
            </h4>
            <div className="grid md:grid-cols-2 gap-2">
              {dailyTasks.map((task, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-700">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">{task}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Star className="h-6 w-6 text-yellow-500" />
            <h3 className="text-2xl font-bold text-gray-900">Success Stories That Inspire</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-bold text-gray-900 mb-2">{story.name}</h4>
                <p className="text-sm text-gray-700 mb-4">{story.story}</p>
                <blockquote className="text-xs italic text-blue-600 border-l-2 border-blue-300 pl-3">
                  "{story.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Motivational Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Remember: This Is Your Comeback Story!</h3>
          <p className="text-lg opacity-90 mb-6">
            Every day you study is a step closer to proving that setbacks are just setups for comebacks.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold">45</div>
              <div className="text-sm opacity-80">Days to Transform</div>
            </div>
            <div>
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm opacity-80">Effort Required</div>
            </div>
            <div>
              <div className="text-2xl font-bold">∞</div>
              <div className="text-sm opacity-80">Possibilities Ahead</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            "Success is not about never falling, but about rising every time you fall." 
            <br />
            <strong>You've got this! Make these 45 days count! 🚀</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
