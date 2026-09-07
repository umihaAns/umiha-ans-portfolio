<template>
  <div class="space-y-24 py-12">
    <!-- Hero Section -->
    <section id="hero" class="relative">
      <UContainer>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <UBadge color="primary" variant="subtle" size="lg" class="rounded-full px-3">
              Open to Work
            </UBadge>
            <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
              SEO Expert & <br />
              <span class="text-primary-500">Content Strategist</span>
            </h1>
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I help brands rank higher and convert better. With 4.5 years of experience at eWebCraft, I specialize in technical SEO, content strategy, and driving organic growth.
            </p>
            <div class="flex flex-wrap gap-4">
              <UButton size="xl" color="primary" to="#contact">Get in Touch</UButton>
              <UButton size="xl" color="gray" variant="ghost" icon="i-heroicons-arrow-down-tray">Download CV</UButton>
            </div>
            
            <div class="flex gap-6 pt-4 text-gray-500">
              <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="text-primary-500" />
                <span>4.5+ Years Exp.</span>
              </div>
              <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="text-primary-500" />
                <span>SEO Certified</span>
              </div>
            </div>
          </div>
          
          <div class="relative hidden md:block">
            <div class="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-purple-500/20 rounded-2xl blur-3xl transform rotate-3"></div>
            <UCard class="relative transform hover:-translate-y-1 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Professional Portrait" 
                class="w-full h-[400px] object-cover rounded-lg"
              />
            </UCard>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="bg-gray-50 dark:bg-gray-900 py-16 -mx-4 sm:mx-0 sm:rounded-3xl">
      <UContainer>
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-3xl font-bold mb-4">Work Experience</h2>
          <p class="text-gray-600 dark:text-gray-400">My professional journey in the software industry.</p>
        </div>

        <div class="space-y-8 max-w-4xl mx-auto">
          <UCard class="relative border-l-4 border-l-primary-500">
            <div class="grid md:grid-cols-[200px_1fr] gap-6">
              <div class="text-gray-500">
                <p class="font-bold text-lg text-gray-900 dark:text-white">2022 — Present</p>
                <p class="text-sm">eWebCraft</p>
                <UBadge color="primary" variant="soft" class="mt-2">Assistant Manager</UBadge>
              </div>
              <div class="space-y-4">
                <h3 class="text-xl font-bold">Assistant Manager - SEO & Content</h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Leading a team of writers and SEO specialists. Responsible for end-to-end content strategy, technical audits, and performance reporting for key enterprise clients.
                </p>
                <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li class="flex items-start gap-2">
                    <UIcon name="i-heroicons-check" class="mt-1 text-primary-500" />
                    <span>Increased organic traffic by 150% for top-tier SaaS clients.</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <UIcon name="i-heroicons-check" class="mt-1 text-primary-500" />
                    <span>Managed editorial calendar and QA process for 50+ articles/month.</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <UIcon name="i-heroicons-check" class="mt-1 text-primary-500" />
                    <span>Implemented technical SEO fixes improving Core Web Vitals scores.</span>
                  </li>
                </ul>
              </div>
            </div>
          </UCard>

          <UCard class="relative opacity-80 hover:opacity-100 transition-opacity">
            <div class="grid md:grid-cols-[200px_1fr] gap-6">
              <div class="text-gray-500">
                <p class="font-bold text-lg text-gray-900 dark:text-white">2019 — 2022</p>
                <p class="text-sm">eWebCraft</p>
              </div>
              <div class="space-y-4">
                <h3 class="text-xl font-bold">Senior Content Writer & SEO Specialist</h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Started as a content writer and quickly advanced to handle complex SEO projects. Focused on on-page optimization and keyword research.
                </p>
                <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li class="flex items-start gap-2">
                    <UIcon name="i-heroicons-check" class="mt-1 text-primary-500" />
                    <span>Produced high-ranking long-form content for B2B niches.</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <UIcon name="i-heroicons-check" class="mt-1 text-primary-500" />
                    <span>Conducted competitor analysis and gap content strategies.</span>
                  </li>
                </ul>
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Skills Section -->
    <section id="skills">
      <UContainer>
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-3xl font-bold mb-4">Core Competencies</h2>
          <p class="text-gray-600 dark:text-gray-400">Tools and technologies I use to drive results.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <UIcon name="i-heroicons-magnifying-glass" class="text-2xl text-primary-500" />
                <h3 class="font-bold text-lg">SEO Mastery</h3>
              </div>
            </template>
            <div class="flex flex-wrap gap-2">
              <UBadge color="gray">Keyword Research</UBadge>
              <UBadge color="gray">Technical SEO</UBadge>
              <UBadge color="gray">On-Page Optimization</UBadge>
              <UBadge color="gray">Link Building</UBadge>
              <UBadge color="gray">Local SEO</UBadge>
              <UBadge color="gray">Schema Markup</UBadge>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <UIcon name="i-heroicons-pencil-square" class="text-2xl text-primary-500" />
                <h3 class="font-bold text-lg">Content Strategy</h3>
              </div>
            </template>
            <div class="flex flex-wrap gap-2">
              <UBadge color="gray">Copywriting</UBadge>
              <UBadge color="gray">Blog Writing</UBadge>
              <UBadge color="gray">Content Calendar</UBadge>
              <UBadge color="gray">Email Marketing</UBadge>
              <UBadge color="gray">Case Studies</UBadge>
              <UBadge color="gray">Proofreading</UBadge>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <UIcon name="i-heroicons-command-line" class="text-2xl text-primary-500" />
                <h3 class="font-bold text-lg">Tools & Tech</h3>
              </div>
            </template>
            <div class="flex flex-wrap gap-2">
              <UBadge color="gray">Semrush</UBadge>
              <UBadge color="gray">Ahrefs</UBadge>
              <UBadge color="gray">Google Analytics 4</UBadge>
              <UBadge color="gray">Search Console</UBadge>
              <UBadge color="gray">WordPress</UBadge>
              <UBadge color="gray">SurferSEO</UBadge>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="bg-gray-50 dark:bg-gray-900 py-16 -mx-4 sm:mx-0 sm:rounded-3xl">
      <UContainer>
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-3xl font-bold mb-4">Featured Projects</h2>
          <p class="text-gray-600 dark:text-gray-400">Highlights of my recent work and achievements.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <UCard class="group hover:ring-2 hover:ring-primary-500 transition-all">
            <template #header>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Project 1" 
                class="w-full h-48 object-cover rounded-t-lg -mt-4 -mx-4 w-[calc(100%+2rem)]"
              />
            </template>
            <h3 class="text-xl font-bold mb-2">SaaS Organic Growth</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Executed a content cluster strategy that improved domain authority and drove 50k+ monthly organic visitors.
            </p>
            <div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
              <span class="text-sm text-gray-500">Strategy • Content</span>
              <UButton variant="ghost" color="primary" icon="i-heroicons-arrow-right">View Case Study</UButton>
            </div>
          </UCard>

          <UCard class="group hover:ring-2 hover:ring-primary-500 transition-all">
            <template #header>
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Project 2" 
                class="w-full h-48 object-cover rounded-t-lg -mt-4 -mx-4 w-[calc(100%+2rem)]"
              />
            </template>
            <h3 class="text-xl font-bold mb-2">E-commerce CRO & SEO</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Revamped product descriptions and meta data for 500+ SKUs, resulting in a 25% increase in conversion rate.
            </p>
            <div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
              <span class="text-sm text-gray-500">E-commerce • CRO</span>
              <UButton variant="ghost" color="primary" icon="i-heroicons-arrow-right">View Case Study</UButton>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="pb-16">
      <UContainer>
        <UCard class="bg-primary-500 text-white dark:bg-primary-600">
          <div class="text-center py-12 px-4">
            <h2 class="text-3xl font-bold mb-4">Ready to boost your rankings?</h2>
            <p class="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              I'm currently available for freelance projects and full-time opportunities. Let's discuss how I can help your business grow.
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
              <UButton 
                size="xl" 
                color="white" 
                variant="solid" 
                class="text-primary-600"
                to="mailto:you@example.com"
              >
                Send me an email
              </UButton>
              <UButton 
                size="xl" 
                color="white" 
                variant="outline" 
                class="hover:bg-primary-600"
                to="https://linkedin.com"
              >
                Connect on LinkedIn
              </UButton>
            </div>
          </div>
        </UCard>
      </UContainer>
    </section>
  </div>
</template>
