<template>
  <div class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
    <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <UContainer class="flex items-center justify-between h-16">
        <div class="flex items-center gap-2">
          <UAvatar
            src="https://api.dicebear.com/9.x/initials/svg?seed=Resume"
            alt="Avatar"
            size="sm"
          />
          <span class="font-bold text-lg text-gray-900 dark:text-white">Resume</span>
        </div>
        
        <nav class="hidden md:flex items-center gap-6">
          <ULink to="#hero" active-class="text-primary" class="text-sm font-medium hover:text-primary transition-colors">Home</ULink>
          <ULink to="#experience" active-class="text-primary" class="text-sm font-medium hover:text-primary transition-colors">Experience</ULink>
          <ULink to="#skills" active-class="text-primary" class="text-sm font-medium hover:text-primary transition-colors">Skills</ULink>
          <ULink to="#projects" active-class="text-primary" class="text-sm font-medium hover:text-primary transition-colors">Projects</ULink>
          <ULink to="#contact" active-class="text-primary" class="text-sm font-medium hover:text-primary transition-colors">Contact</ULink>
        </nav>

        <div class="flex items-center gap-2">
          <UButton 
            to="#contact" 
            color="primary" 
            variant="solid" 
            label="Hire Me"
          />
        </div>
      </UContainer>
    </header>

    <main class="flex-1">
      <NuxtPage />
    </main>

    <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
      <UContainer class="flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-500">
          © {{ new Date().getFullYear() }} SEO Expert & Web Content Writer. All rights reserved.
        </p>
        <div class="flex gap-4">
          <UButton icon="i-heroicons-envelope" color="gray" variant="ghost" to="mailto:you@example.com" aria-label="Email" />
          <UButton icon="i-simple-icons-linkedin" color="gray" variant="ghost" to="https://linkedin.com" aria-label="LinkedIn" />
          <UButton icon="i-simple-icons-github" color="gray" variant="ghost" to="https://github.com" aria-label="GitHub" />
        </div>
      </UContainer>
    </footer>
  </div>
</template>
