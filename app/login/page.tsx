'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaGoogle } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '../../supabaseclient'  // Import your Supabase client

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  // Handle login logic with Supabase
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    // Call Supabase authentication to login the user
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      setError(error.message)  // Display error message
    } else {
      console.log('Login successful', user)  // Log the user object for debugging
      router.push('/dashboard')  // Redirect to the dashboard after successful login
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Log In</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}  {/* Show error message */}
            <Button className="w-full mt-4" type="submit">Log In</Button>
          </form>
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <Button variant="outline" className="w-full" onClick={() => console.log('Log in with Google')}>
            <FaGoogle className="mr-2 h-4 w-4" /> Log in with Google
          </Button>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
            Forgot password?
          </Link>
          <Link href="/signup" className="text-sm text-blue-600 hover:underline">
            Sign up
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
