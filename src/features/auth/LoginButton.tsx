'use client'

import { Button } from '@/components/ui/button'
import { useMutation } from '@tanstack/react-query'
import { LogIn } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { Loader } from '@/components/ui/loader'

export const LoginButton = () => {
  const mutation = useMutation({
    mutationFn: async () => signIn(),
  })

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => {
        mutation.mutate()
      }}
    >
      {mutation.isPending ? (
        <Loader className="ml-2" size={12} />
      ) : (
        <LogIn className="ml-2" size={12} />
      )}
      Login
    </Button>
  )
}