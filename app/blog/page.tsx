'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MoreHorizontal, Search, ChevronRight } from 'lucide-react'
import Link from "next/link"
import { useRouter } from 'next/navigation'

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const blogPosts = [
    {
      title: "Getting Started with Python in Mathematics",
      description: "Learn how to use Python for solving mathematical problems and visualizing data.",
      date: "2024-03-15",
      author: "Dr. Jane Smith"
    },
    {
      title: "The Power of AI in Education",
      description: "Explore how artificial intelligence is revolutionizing the way we learn and teach.",
      date: "2024-03-10",
      author: "Prof. John Doe"
    },
    {
      title: "Mastering SAT Math: Top 10 Tips",
      description: "Discover the best strategies to excel in the mathematics section of the SAT.",
      date: "2024-03-05",
      author: "Sarah Johnson, SAT Expert"
    }
  ]

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
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Khan Tutoring Blog</h1>
          
          <div className="mb-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Card key={index} className="transform transition-all hover:scale-105 duration-300 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-blue-600">{post.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-500">
                    {post.date} | {post.author}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    Read More <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
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

