'use server'

import nodemailer from 'nodemailer'
import { headers } from 'next/headers'

type FormState = {
  success: boolean
  message: string
  error?: string
}

export async function sendEmail(prevState: FormState | null, formData: FormData): Promise<FormState> {
  console.log('=== Email Submission Started ===')
  console.log('Timestamp:', new Date().toISOString())

  try {
    const message = formData.get('message')
    const email = formData.get('email')

    if (!message || !email) {
      console.error('Missing required fields:', { message: !!message, email: !!email })
      return { success: false, message: 'Missing required fields' }
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email configuration')
      return { success: false, message: 'Server configuration error' }
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'charizardavi@gmail.com',
      subject: 'New Contact Form Submission',
      text: `Message from ${email}:\n\n${message}`,
    }

    console.log('Attempting to send email to:', mailOptions.to)
    await transporter.sendMail(mailOptions)
    console.log('Email sent successfully!')
    return { success: true, message: 'Email sent successfully!' }

  } catch (error) {
    console.error('Failed to send email:', error)
    return { 
      success: false, 
      message: 'Failed to send email. Please try again.',
      error: process.env.NODE_ENV === 'development' ? String(error) : undefined
    }
  } finally {
    console.log('=== Email Submission Ended ===')
  }
}

