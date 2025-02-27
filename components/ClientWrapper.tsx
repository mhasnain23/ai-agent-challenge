"use client";

import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

const ClientWrapper = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <ClerkProvider>{children}</ClerkProvider>
    )
}

export default ClientWrapper
