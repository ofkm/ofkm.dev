interface ComponentPreviewProps {
  children: React.ReactNode;
}

export function ComponentPreview({ children }: ComponentPreviewProps) {
  return (
    <div className="border rounded-lg p-6 bg-background">
      <div className="flex items-center justify-center min-h-[200px]">{children}</div>
    </div>
  );
}
