'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { MoreHorizontal, BookOpen, GraduationCap, Brain, ChevronLeft, ChevronRight, Target, Zap, FileText, PenToolIcon as Tool, Calculator, Mail, Phone, MapPin, BotIcon as Robot, X } from 'lucide-react'
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Home() {
  const router = useRouter()
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [typewriterText, setTypewriterText] = useState('Master Math');
  const [showAITutorInfo, setShowAITutorInfo] = useState(false);
  const phrases = ['Master Math', 'Ace the SAT', 'Excel in School', 'Boost Your Grades'];

  useEffect(() => {
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    const typewriterInterval = setInterval(() => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (!isDeleting && currentCharIndex < currentPhrase.length) {
        setTypewriterText(currentPhrase.slice(0, currentCharIndex + 1));
        currentCharIndex++;
      } else if (!isDeleting && currentCharIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(() => {}, 1000); // Pause before deleting
      } else if (isDeleting && currentCharIndex > 0) {
        setTypewriterText(currentPhrase.slice(0, currentCharIndex - 1));
        currentCharIndex--;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      }
    }, 100);

    return () => clearInterval(typewriterInterval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      name: "David K.",
      text: "Khan Tutoring helped me achieve a perfect SAT Math score! The personalized approach made all the difference.",
      role: "SAT Student"
    },
    {
      name: "Sarah M.",
      text: "The AI-driven learning system adapted perfectly to my needs. My math grades improved significantly!",
      role: "High School Student"
    },
    {
      name: "James L.",
      text: "Best math tutoring service I've ever used. The tutors are knowledgeable and patient.",
      role: "AP Calculus Student"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <Link className="flex items-center space-x-2" href="/">
            <MoreHorizontal className="h-6 w-6 rotate-90 text-blue-600" />
            <span className="font-bold">Khan Tutoring</span>
          </Link>
          <nav className="flex items-center space-x-4 sm:space-x-6">
            <Link className="text-sm font-medium hover:text-blue-600" href="#home">
              Home
            </Link>
            <Link className="text-sm font-medium hover:text-blue-600" href="#why-khan">
              Why Us
            </Link>
            <Link className="text-sm font-medium hover:text-blue-600" href="#classes">
              Classes
            </Link>
            <Link className="text-sm font-medium hover:text-blue-600" href="/python">
              Python
            </Link>
            <Link className="text-sm font-medium hover:text-blue-600" href="/blog">
              Blog
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="link" className="text-sm font-medium hover:text-blue-600">AI Tutor</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Coming Soon: AI Math Tutor</DialogTitle>
                  <DialogDescription>
                    Get ready for the future of math learning with our AI-powered tutor.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <p>Our upcoming AI Math Tutor will provide:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Personalized learning paths</li>
                    <li>Interactive problem-solving assistance</li>
                    <li>Adaptive difficulty levels</li>
                    <li>24/7 availability</li>
                    <li>Multimedia concept explanations</li>
                    <li>Real-time progress tracking</li>
                  </ul>
                  <p>Stay tuned for this revolutionary math learning experience!</p>
                </div>
                <Button onClick={() => router.push('#ai-math-tutor')}>Learn More About AI Tutor</Button>
              </DialogContent>
            </Dialog>
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
        <section id="home" className="relative py-20 md:py-24 lg:py-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    WELCOME TO KHAN TUTORING
                  </h1>
                  <p className="text-xl md:text-2xl font-semibold">
                    <span>{typewriterText}</span>
                    <span className="animate-blink">|</span>
                  </p>
                  <p className="max-w-[600px] text-gray-200 md:text-xl">
                    Join us to excel in high school math and SAT! Our blend of AI technology and expert instructors ensures customized tutoring.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-green-500 text-white hover:bg-green-600" size="lg" onClick={() => router.push('/signup')}>
                    Start Learning
                  </Button>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[400px] lg:max-w-none">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Why Choose Us?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside text-white space-y-2">
                      <li>Personalized learning plans</li>
                      <li>Expert tutors with proven track records</li>
                      <li>AI-enhanced study materials</li>
                      <li>Flexible scheduling options</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="why-khan" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Why Choose Khan Tutoring?</h2>
            <div className="grid gap-12 lg:grid-cols-3">
              <Card className="relative overflow-hidden transform transition-all hover:scale-105 duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-10" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-6 w-6 text-green-500" />
                    Tailored Lessons
                  </CardTitle>
                  <CardDescription>
                    Personalized learning plans adapted to your unique needs and learning style.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="relative overflow-hidden transform transition-all hover:scale-105 duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-10" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-yellow-500" />
                    Perfect SAT Score
                  </CardTitle>
                  <CardDescription>
                    Proven strategies and intensive practice to achieve top SAT Math scores.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="relative overflow-hidden transform transition-all hover:scale-105 duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-10" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-purple-500" />
                    AI-Enhanced Learning
                  </CardTitle>
                  <CardDescription>
                    Cutting-edge AI technology combined with expert human tutoring for optimal results.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section id="ai-math-tutor" className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Coming Soon: AI Math Tutor</h2>
            <div className="max-w-3xl mx-auto">
              <Card className="transform transition-all hover:scale-105 duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Robot className="h-6 w-6 text-blue-600" />
                    Meet Your Future Personal AI Math Tutor
                  </CardTitle>
                  <CardDescription>
                    Your intelligent assistant to revolutionize your mathematics learning experience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-4">
                    Get ready for a groundbreaking learning journey with our AI Math Tutor. Coming soon to Khan Tutoring!
                  </p>
                  <p className="text-sm mb-4">
                    Experience personalized tutoring, interactive problem-solving, and 24/7 support. Our AI tutor adapts to your learning style, making math easier and more engaging than ever before.
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Sign Up for Updates
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>AI Math Tutor Features</DialogTitle>
                        <DialogDescription>
                          Get ready to experience the future of math learning
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <h3 className="font-semibold">Our AI Math Tutor will offer:</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                          <li>Personalized learning paths and adaptive difficulty</li>
                          <li>Interactive problem-solving with step-by-step guidance</li>
                          <li>Multimedia lessons and concise concept explanations</li>
                          <li>Practice exercises with real-time feedback</li>
                          <li>24/7 homework assistance and doubt clearing</li>
                          <li>Progress tracking and performance analytics</li>
                          <li>Gamified learning experience to boost motivation</li>
                        </ul>
                      </div>
                      <Button onClick={() => console.log('User signed up for updates')}>
                        Confirm Sign Up
                      </Button>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="classes" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Our Classes</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="transform transition-all hover:scale-105 duration-300">
                <CardHeader>
                  <CardTitle className="text-green-600">Free Trial</CardTitle>
                  <CardDescription>Experience our tutoring</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-2">$0</p>
                  <ul className="list-disc list-inside text-sm">
                    <li>30-minute session</li>
                    <li>Personalized assessment</li>
                    <li>No obligation</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="transform transition-all hover:scale-105 duration-300">
                <CardHeader>
                  <CardTitle className="text-blue-600">One-on-One Tutoring</CardTitle>
                  <CardDescription>Personalized attention for maximum growth</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-2">$30<span className="text-lg font-normal">/hour</span></p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Tailored to individual needs</li>
                    <li>Flexible scheduling</li>
                    <li>In-depth progress tracking</li>
                    <li>Ideal for school students</li>
                    <li>Covers precalculus, algebra, trigonometry, geometry</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="transform transition-all hover:scale-105 duration-300">
                <CardHeader>
                  <CardTitle className="text-yellow-600">Small Group Classes</CardTitle>
                  <CardDescription>Collaborative learning environment</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-2">$20<span className="text-lg font-normal">/hour per person</span></p>
                  <ul className="list-disc list-inside text-sm">
                    <li>3-5 students per group</li>
                    <li>Peer interaction and support</li>
                    <li>Cost-effective option</li>
                    <li>Pre-formed groups welcome</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="transform transition-all hover:scale-105 duration-300">
                <CardHeader>
                  <CardTitle className="text-purple-600">SAT Prep Course</CardTitle>
                  <CardDescription>Comprehensive SAT math preparation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-2">$1000<span className="text-lg font-normal">/course</span></p>
                  <ul className="list-disc list-inside text-sm">
                    <li>8-week intensive program</li>
                    <li>Practice tests and materials included</li>
                    <li>Guaranteed score improvement</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="transform transition-all hover:scale-105 duration-300">
                <CardHeader>
                  <CardTitle className="text-red-600">Advanced Courses</CardTitle>
                  <CardDescription>Specialized topics for ML and Data Science</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-2">$50<span className="text-lg font-normal">/class</span></p>
                  <p className="text-xl font-bold mb-2">or</p>
                  <p className="text-3xl font-bold mb-2">$800<span className="text-lg font-normal">/month</span></p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Linear Algebra for ML and Data Science</li>
                    <li>Probability and Statistics for ML and Data Science</li>
                    <li>Calculus for ML and Data Science</li>
                    <li>4 weekly sessions for 4 weeks</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="transform transition-all hover:scale-105 duration-300">
                <CardHeader>
                  <CardTitle className="text-green-600">Python for Math</CardTitle>
                  <CardDescription>Learn Python and its applications in mathematics</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-2">$50<span className="text-lg font-normal">/hour</span></p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Python basics for mathematicians</li>
                    <li>NumPy for mathematical operations</li>
                    <li>Symbolic mathematics with SymPy</li>
                    <li>Visualization of mathematical concepts</li>
                    <li>Applied projects in mathematics</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="assignments" className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Assignment Help</h2>
            <div className="max-w-3xl mx-auto">
              <Card className="transform transition-all hover:scale-105 duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-6 w-6 text-blue-600" />
                    Professional Assignment Assistance
                  </CardTitle>
                  <CardDescription>
                    Get expert help with your math assignments and projects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-4">
                    Our team of experienced tutors is ready to assist you with your math assignments, from simple homework to complex projects.
                  </p>
                  <ul className="list-disc list-inside text-sm mb-4">
                    <li>Detailed explanations and step-by-step solutions</li>
                    <li>Quick turnaround times to meet your deadlines</li>
                    <li>Plagiarism-free, original work</li>
                    <li>Assistance across all math subjects and levels</li>
                  </ul>
                  <p className="text-sm text-gray-600 mb-4">
                    Pricing varies based on assignment complexity and deadline. Contact us for a quote.
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Request Assignment Help
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="tools" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Interactive Math Tools</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="transform transition-all hover:scale-105 duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-6 w-6 text-green-600" />
                    Graphing Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    Plot functions, analyze graphs, and visualize mathematical concepts with our advanced graphing calculator.
                  </p>
                  <Button className="w-full">Try It Now</Button>
                </CardContent>
              </Card>
              <Card className="transform transition-all hover:scale-105 duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-6 w-6 text-blue-600" />
                    Problem Solver
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    Get step-by-step solutions to complex math problems across various topics and difficulty levels.
                  </p>
                  <Button className="w-full">Solve a Problem</Button>
                </CardContent>
              </Card>
              <Card className="transform transition-all hover:scale-105 duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Tool className="h-6 w-6 text-purple-600" />
                    Formula Sheet Generator
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    Create custom formula sheets for quick reference during your study sessions or exams.
                  </p>
                  <Button className="w-full">Generate Sheet</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">What Our Students Say</h2>
            <div className="relative max-w-2xl mx-auto">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <Card className="transform transition-all hover:scale-105 duration-300">
                        <CardContent className="pt-4">
                          <blockquote className="space-y-2">
                            <p className="text-lg">{testimonial.text}</p>
                            <footer>
                              <p className="font-semibold">{testimonial.name}</p>
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
                className="absolute top-1/2 -left-4 transform -translate-y-1/2"
                onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 -right-4 transform -translate-y-1/2"
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section id="cta" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Excel in Math?
              </h2>
              <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                Join Khan Tutoring today and transform your mathematical skills with our expert-led courses.
              </p>
              <Button className="bg-yellow-400 text-black hover:bg-yellow-300" size="lg">
                Get Started Now
              </Button>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Contact Us</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>We'd love to hear from you. Fill out the form and we'll get back to you shortly.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Your message" />
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>You can also reach us through the following channels:</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-5 w-5 text-gray-500" />
                      <span>info@khantutoring.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-5 w-5 text-gray-500" />
                      <span>+1 (234) 567-890</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-gray-500" />
                      <span>123 Math Street, Algebra City, EQ 12345</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-gray-50">
        <div className="container px-4 py-12 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">About Us</h3>
              <p className="text-sm text-gray-500">
                Khan Tutoring provides expert math tutoring and SAT preparation through a unique blend of AI technology and
                experienced instructors.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <nav className="flex flex-col space-y-2 text-sm text-gray-500">
                <Link href="#home">Home</Link>
                <Link href="#why-khan">Why Us</Link>
                <Link href="#classes">Classes</Link>
                <Link href="#ai-math-tutor">AI Tutor</Link>
                <Link href="/privacy">Privacy Policy</Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <nav className="flex flex-col space-y-2 text-sm text-gray-500">
                <Link href="mailto:info@khantutoring.com">info@khantutoring.com</Link>
                <Link href="tel:+1234567890">+1 (234) 567-890</Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <nav className="flex space-x-4">
                <Link href="#" className="text-gray-500 hover:text-blue-600">
                  Facebook
                </Link>
                <Link href="#" className="text-gray-500 hover:text-blue-600">
                  Twitter
                </Link>
                <Link href="#" className="text-gray-500 hover:text-blue-600">
                  Instagram
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
            © 2024 Khan Tutoring. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}