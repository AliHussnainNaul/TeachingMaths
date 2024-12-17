'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import { BookOpen, User, LogOut } from 'lucide-react'

export default function DashboardPage() {
  const [courses, setCourses] = useState([
    { id: 1, title: 'Introduction to Math Fundamentals', instructor: 'Dr. Jane Smith' },
    { id: 2, title: 'Beginner\'s Coding Workshop', instructor: 'Prof. John Doe' },
  ])

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800">Khan Tutoring</h2>
        </div>
        <nav className="mt-6">
          <Link href="/dashboard" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            <BookOpen className="inline-block mr-2" size={20} />
            My Courses
          </Link>
          <Link href="/enroll" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            <BookOpen className="inline-block mr-2" size={20} />
            Enroll in a Course
          </Link>
          <Link href="/profile" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            <User className="inline-block mr-2" size={20} />
            Profile
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Welcome, Student!</h1>
          <Button variant="ghost" className="text-gray-600 hover:text-gray-800">
            <LogOut className="mr-2" size={20} />
            Log Out
          </Button>
        </div>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Courses</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Card key={course.id}>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.instructor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button>View Course</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Enroll in a New Course</h2>
          <Card>
            <CardHeader>
              <CardTitle>Explore Our Course Catalog</CardTitle>
              <CardDescription>Find the perfect course to boost your skills</CardDescription>
            </CardHeader>
            <CardContent>
              <Button>Browse Courses</Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}

