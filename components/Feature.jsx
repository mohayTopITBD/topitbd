'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Feature() {
  const textRef = useRef(null)

  useEffect(() => {
    const text = textRef.current
    if (!text) return

    // Split text into words and wrap each word in a span
    const words = text.textContent.split(' ')
    text.innerHTML = words
      .map((word) => `<span class="word">${word}</span>`)
      .join(' ')

    // Get all word spans
    const wordElements = text.querySelectorAll('.word')

    // Animate each word's color on scroll
    gsap.fromTo(
      wordElements,
      {
        color: '#9ca3af', // gray-400
      },
      {
        color: '#000000', // black
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: text,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1
        ref={textRef}
        className="text-6xl font-bold max-w-6xl text-center"
      >
        Empowering the future of Telecom, Fintech, Edtech, and SaaS with innovative & scalable software solutions.
      </h1>
    </div>
  )
}

export default Feature