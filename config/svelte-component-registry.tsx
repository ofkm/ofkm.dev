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

export const svelteComponentRegistry: Record<string, ComponentData> = {
  dropdownButton: {
    name: 'Dropdown Button',
    description: 'Customizable Button with a Dropdown Menu',
    category: 'Form',
    tags: ['button', 'dropdown', 'menu'],
    code: `<script lang="ts">
import { DropdownButton } from '$lib/registry/ui/dropdown-button/index.js';

const options = [
  { 
    label: 'Save as Draft', 
    value: 'draft',
    onclick: () => console.log('Draft saved')
  },
  { 
    label: 'Save and Publish', 
    value: 'publish',
    onclick: () => console.log('Published')
  },
  {
    label: 'Save Template',
    value: 'template',
    onclick: () => console.log('Template saved')
  }
];

function handleMainSave() {
  console.log('Main save clicked');
}
</script>

<DropdownButton 
  mainButtonText="Actions" 
  {options} 
  variant="outline" 
/>`,
    examples: [
      {
        name: 'Default',
        description: 'A basic dropdown button with multiple options.',
        code: `<script lang="ts">
import { DropdownButton } from '$lib/registry/ui/dropdown-button/index.js';

const options = [
  { 
    label: 'Save as Draft', 
    value: 'draft',
    onclick: () => console.log('Draft saved')
  },
  { 
    label: 'Save and Publish', 
    value: 'publish',
    onclick: () => console.log('Published')
  }
];
</script>

<DropdownButton 
  mainButtonText="Actions" 
  {options} 
  variant="outline" 
/>`,
      },
    ],
    installation: `shadcn-svelte@latest add https://shadcn.ofkm.dev/r/dropdown-button.json`,
    usage: `<script lang="ts">
import { DropdownButton } from '$lib/registry/ui/dropdown-button/index.js';

const options = [
  { 
    label: 'Option 1', 
    value: 'option1',
    onclick: () => console.log('Option 1 clicked')
  },
  { 
    label: 'Option 2', 
    value: 'option2',
    onclick: () => console.log('Option 2 clicked')
  }
];
</script>

<DropdownButton 
  mainButtonText="Actions" 
  {options} 
  variant="outline" 
/>`,
    props: [
      {
        name: 'mainButtonText',
        type: 'string',
        description: 'The text displayed on the main button',
        default: 'Actions',
      },
      {
        name: 'options',
        type: 'Array<{label: string, value: string, onclick: () => void}>',
        description: 'Array of dropdown options with labels, values, and click handlers',
      },
      {
        name: 'variant',
        type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
        description: 'The button variant styling',
        default: 'default',
      },
    ],
  },
};
