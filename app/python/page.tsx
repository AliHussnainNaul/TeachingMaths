'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Code, FileCode, GraduationCap, BarChart, Star, ChevronRight, ChevronLeft, MoreHorizontal } from 'lucide-react'
import Link from "next/link"
import { useRouter } from 'next/navigation'

export default function PythonPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const router = useRouter()

  const testimonials = [
    {
      name: "Sarah J.",
      text: "I learned Python in just 6 weeks! The interactive lessons and 24/7 tutor support made all the difference.",
      role: "Web Developer"
    },
    {
      name: "Mike T.",
      text: "The math-focused projects helped me apply Python to real-world problems. Highly recommended!",
      role: "Data Analyst"
    },
    {
      name: "Emily R.",
      text: "From beginner to confident coder, Khan Tutoring's Python course was a game-changer for my career.",
      role: "Software Engineer"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <Link className="flex items-center space-x-2" href="/">
            <MoreHorizontal className="h-6 w-6 rotate-90 text-blue-600" />
            <span className="font-bold">Khan Tutoring</span>
          </Link>
          <nav className="flex items-center space-x-4 sm:space-x-6">
            <Link className="text-sm font-medium hover:text-blue-600" href="/">
              Home
            </Link>
            <Link className="text-sm font-medium hover:text-blue-600" href="/#why-khan">
              Why Us
            </Link>
            <Link className="text-sm font-medium hover:text-blue-600" href="/#classes">
              Classes
            </Link>
            <Link className="text-sm font-medium hover:text-blue-600" href="/python">
              Python
            </Link>
            <Link className="text-sm font-medium hover:text-blue-600" href="/blog">
              Blog
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => router.push('/login')}>
              Log In
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={() => router.push('/signup')}>
              Sign Up
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 py-8">
            <section className="mb-12 text-center">
              <h1 className="text-4xl font-bold mb-4 text-blue-600">Python & Math Integration</h1>
              <p className="text-xl text-gray-600">Unlock the power of Python for mathematical applications</p>
            </section>
            
            <Tabs defaultValue="python-math" className="mb-12">
              <TabsList className="w-full justify-center mb-8">
                <TabsTrigger value="python-math" className="px-8 py-3 text-lg">Python for Math</TabsTrigger>
                <TabsTrigger value="learn-python" className="px-8 py-3 text-lg">Learn Python</TabsTrigger>
              </TabsList>
              <TabsContent value="python-math">
                <Card className="transform transition-all hover:scale-105 duration-300 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    <CardTitle className="text-2xl">Python for Mathematical Applications</CardTitle>
                    <CardDescription className="text-blue-100">Harness the power of Python libraries for advanced mathematical computations and visualizations.</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h3 className="font-semibold mb-3 text-xl text-blue-600">Key Libraries:</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center"><ChevronRight className="h-5 w-5 text-green-500 mr-2" /> NumPy: Advanced numerical computations</li>
                          <li className="flex items-center"><ChevronRight className="h-5 w-5 text-green-500 mr-2" /> SymPy: Symbolic mathematics</li>
                          <li className="flex items-center"><ChevronRight className="h-5 w-5 text-green-500 mr-2" /> Matplotlib: Mathematical visualizations</li>
                          <li className="flex items-center"><ChevronRight className="h-5 w-5 text-green-500 mr-2" /> SciPy: Scientific and technical computing</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3 text-xl text-blue-600">What You'll Learn:</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center"><ChevronRight className="h-5 w-5 text-green-500 mr-2" /> Solving complex mathematical problems</li>
                          <li className="flex items-center"><ChevronRight className="h-5 w-5 text-green-500 mr-2" /> Implementing mathematical algorithms</li>
                          <li className="flex items-center"><ChevronRight className="h-5 w-5 text-green-500 mr-2" /> Creating visual representations of mathematical concepts</li>
                          <li className="flex items-center"><ChevronRight className="h-5 w-5 text-green-500 mr-2" /> Symbolic and numerical mathematics</li>
                        </ul>
                      </div>
                    </div>
                    <Button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                      Explore Python for Math Courses
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="learn-python">
                <Card className="transform transition-all hover:scale-105 duration-300 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                    <CardTitle className="text-2xl">Learn Python from Scratch</CardTitle>
                    <CardDescription className="text-yellow-100">Master Python programming with our comprehensive courses designed for all skill levels.</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h3 className="font-semibold mb-3 text-xl text-orange-600">Course Levels:</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center"><ChevronRight className="h-5 w-5 text-yellow-500 mr-2" /> Beginner: Python basics and syntax</li>
                          <li className="flex items-center"><ChevronRight className="h-5 w-5 text-yellow-500 mr-2" /> Intermediate: OOP and advanced concepts</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3 text-xl text-orange-600">Learning Features:</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center"><ChevronRight className="h-5 w-5 text-yellow-500 mr-2" /> Interactive coding environment</li>
                          <li className="flex items-center"><ChevronRight className="h-5 w-5 text-yellow-500 mr-2" /> Project-based learning</li>
                          <li className="flex items-center"><ChevronRight className="h-5 w-5 text-yellow-500 mr-2" /> Quizzes and assessments</li>
                          <li className="flex items-center"><ChevronRight className="h-5 w-5 text-yellow-500 mr-2" /> 24/7 support from tutors</li>
                        </ul>
                      </div>
                    </div>
                    <Button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                      Start Learning Python
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Why Choose Our Python Courses?</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="transform transition-all hover:scale-105 duration-300 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-600">
                      <FileCode className="h-6 w-6" />
                      Math-Focused Projects
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Apply your Python skills to real-world mathematical problems and build your portfolio.</p>
                  </CardContent>
                </Card>
                <Card className="transform transition-all hover:scale-105 duration-300 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-600">
                      <GraduationCap className="h-6 w-6" />
                      Mathematical Certifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Earn certificates showcasing your proficiency in Python for mathematical applications.</p>
                  </CardContent>
                </Card>
                <Card className="transform transition-all hover:scale-105 duration-300 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-600">
                      <BarChart className="h-6 w-6" />
                      Mathematical Visualizations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Learn to create stunning visualizations of complex mathematical concepts using Python.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-12 bg-blue-50 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Student Success Stories</h2>
              <div className="relative max-w-4xl mx-auto">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <Card className="bg-white">
                          <CardContent className="p-6">
                            <blockquote className="space-y-2">
                              <p className="text-lg italic">&ldquo;{testimonial.text}&rdquo;</p>
                              <footer>
                                <p className="font-semibold text-blue-600">{testimonial.name}</p>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                              </footer>
                            </blockquote>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white shadow-lg"
                  onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white shadow-lg"
                  onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </section>

            <section className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-blue-600">Ready to Start Your Python Journey?</h2>
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Join a Course Today
              </Button>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t bg-gray-50">
        <div className="container px-4 py-6 md:px-6">
          <div className="text-center text-sm text-gray-500">
            © 2024 Khan Tutoring. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

