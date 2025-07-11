'use client';

import { useState } from 'react';
import { ChevronDown, User, Settings, LogOut } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export type DropdownButtonOption = {
  label: string;
  value: string;
  disabled?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
};

export type DropdownButtonProps = {
  // Simple mode props
  mainButtonText?: string;
  options?: DropdownButtonOption[];
  onMainButtonClick?: () => void;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  align?: 'start' | 'center' | 'end';
  disabled?: boolean;
  className?: string;
  // Composable mode
  simple?: boolean;
  children?: React.ReactNode;
};

export function DropdownButton({ mainButtonText, options, onMainButtonClick, variant = 'default', size = 'default', align = 'end', disabled = false, className, simple = false, children, ...props }: DropdownButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Determine if we're in simple mode
  const isSimpleMode = simple || (mainButtonText && options);

  const handleMainClick = () => {
    if (onMainButtonClick) {
      onMainButtonClick();
    }
  };

  const handleOptionClick = (option: DropdownButtonOption) => {
    if (option.onClick) {
      option.onClick();
    }
    setIsOpen(false);
  };

  if (isSimpleMode && mainButtonText && options) {
    // Simple Mode: All-in-one component
    return (
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <div className={cn('flex', className)} {...props}>
          <Button variant={variant} size={size} disabled={disabled} onClick={handleMainClick} className="rounded-r-none border-r-0">
            {mainButtonText}
          </Button>

          <DropdownMenuTrigger asChild>
            <Button variant={variant} size={size} disabled={disabled} className="rounded-l-none border-l border-muted px-2">
              <ChevronDown className="size-4" />
            </Button>
          </DropdownMenuTrigger>
        </div>

        <DropdownMenuContent align={align} className="min-w-[200px]">
          {options.map((option, index) => (
            <DropdownMenuItem key={option.value} disabled={option.disabled} onClick={() => handleOptionClick(option)} className="cursor-pointer">
              {option.icon && <span className="mr-2">{option.icon}</span>}
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  // Composable Mode: Just the wrapper div
  return (
    <div className={cn('flex', className)} {...props}>
      {children}
    </div>
  );
}

// Example components for your registry
export function DropdownButtonDefault() {
  const options: DropdownButtonOption[] = [
    {
      label: 'Profile',
      value: 'profile',
      icon: <User className="h-4 w-4" />,
      onClick: () => console.log('Profile clicked'),
    },
    {
      label: 'Settings',
      value: 'settings',
      icon: <Settings className="h-4 w-4" />,
      onClick: () => console.log('Settings clicked'),
    },
    {
      label: 'Logout',
      value: 'logout',
      icon: <LogOut className="h-4 w-4" />,
      onClick: () => console.log('Logout clicked'),
    },
  ];

  return <DropdownButton mainButtonText="Account" options={options} onMainButtonClick={() => console.log('Main button clicked')} />;
}

export function DropdownButtonWithSeparator() {
  const [selectedAction, setSelectedAction] = useState<string>('');

  return (
    <DropdownMenu>
      <div className="flex">
        <Button variant="outline" size="default" onClick={() => setSelectedAction('Primary action executed')} className="rounded-r-none border-r-0">
          Primary Action
        </Button>

        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="default" className="rounded-l-none px-2">
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
      </div>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setSelectedAction('Option 1 selected')}>Option 1</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSelectedAction('Option 2 selected')}>Option 2</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setSelectedAction('Option 3 selected')}>Option 3</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function DropdownButtonComposable() {
  return (
    <DropdownMenu>
      <DropdownButton className="rounded-lg border">
        <Button variant="ghost" size="sm" className="rounded-r-none">
          Custom Action
        </Button>

        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="rounded-l-none border-l px-2">
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
      </DropdownButton>

      <DropdownMenuContent>
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Duplicate</DropdownMenuItem>
        <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
