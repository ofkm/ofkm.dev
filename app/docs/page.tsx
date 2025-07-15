import { MainContent } from '@/components/main-content';
import { SelectionCard } from '@/components/selection-card';
import { docItems } from '@/config/docs-config';

export default function ComponentsPage() {
  return (
    <MainContent>
      <div className="space-y-8">
        {/* <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Project Documentation</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">All OFKM Project documentation in one place. Choose the project you want to learn more about.</p>
        </div> */}

        <div className="flex items-center justify-center py-20">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Coming Soon</h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">We're crafting detailed documentation for all OFKM projects. Stay tuned!</p>
          </div>
        </div>

        {/* <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
          {docItems.map((item) => (
            <SelectionCard key={item.name} name={item.name} description={item.description} icon={item.icon} href={item.href} />
          ))}
        </div> */}
      </div>
    </MainContent>
  );
}
