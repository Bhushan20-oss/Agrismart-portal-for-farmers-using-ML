'use client'

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function RegisterButton() {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    setIsLoading(true)
    // Add your registration logic here
    setTimeout(() => setIsLoading(false), 1000)
  }

  return (
    <Button 
      onClick={handleClick} 
      size="lg"
      variant="secondary"
      className="min-w-[120px] bg-green-600 hover:bg-green-700 text-white"
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <svg 
            className="animate-spin h-4 w-4" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading...
        </div>
      ) : (
        'Register'
      )}
    </Button>
  )
}

