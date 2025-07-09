import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export interface ComponentData {
  name: string;
  description: string;
  category: string;
  tags: string[];
  code: string;
  examples: {
    name: string;
    description: string;
    code: string;
  }[];
  installation: string;
  usage: string;
  props?: {
    name: string;
    type: string;
    description: string;
    default?: string;
  }[];
}

export const reactComponentRegistry: Record<string, ComponentData> = {
  'dropdown-button': {
    name: 'Dropdown Button',
    description: 'A button with a dropdown menu for additional actions. Can be used in simple mode with predefined options or composable mode for custom layouts.',
    category: 'Form',
    tags: ['dropdown', 'button', 'menu', 'actions'],
    code: `import { DropdownButton } from '@/components/ui/dropdown-button'
import { User, Settings, LogOut } from 'lucide-react'

const options = [
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
]

export function DropdownButtonDemo() {
  return (
    <DropdownButton
      mainButtonText="Account"
      options={options}
      onMainButtonClick={() => console.log('Main button clicked')}
    />
  )
}`,
    examples: [
      {
        name: 'Default',
        description: 'A basic dropdown button with options.',
        code: `<DropdownButton
  mainButtonText="Account"
  options={[
    { label: 'Profile', value: 'profile', onClick: () => {} },
    { label: 'Settings', value: 'settings', onClick: () => {} },
    { label: 'Logout', value: 'logout', onClick: () => {} },
  ]}
  onMainButtonClick={() => console.log('Main clicked')}
/>`,
      },
    ],
    installation: `shadcn@latest add dropdown-menu button`,
    usage: `import { DropdownButton } from '@/components/ui/dropdown-button'`,
    props: [
      {
        name: 'mainButtonText',
        type: 'string',
        description: 'Text displayed on the main button',
        default: 'undefined',
      },
      {
        name: 'options',
        type: 'DropdownButtonOption[]',
        description: 'Array of dropdown menu options',
        default: 'undefined',
      },
      {
        name: 'onMainButtonClick',
        type: '() => void',
        description: 'Callback function when main button is clicked',
        default: 'undefined',
      },
      {
        name: 'variant',
        type: "'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'",
        description: 'Button variant style',
        default: "'default'",
      },
      {
        name: 'size',
        type: "'default' | 'sm' | 'lg' | 'icon'",
        description: 'Button size',
        default: "'default'",
      },
      {
        name: 'align',
        type: "'start' | 'center' | 'end'",
        description: 'Dropdown menu alignment',
        default: "'end'",
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: 'Whether the button is disabled',
        default: 'false',
      },
      {
        name: 'className',
        type: 'string',
        description: 'Additional CSS class names',
        default: 'undefined',
      },
      {
        name: 'simple',
        type: 'boolean',
        description: 'Force simple mode when using children',
        default: 'false',
      },
      {
        name: 'children',
        type: 'React.ReactNode',
        description: 'Custom children for composable mode',
        default: 'undefined',
      },
    ],
  },
};
