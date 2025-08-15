# Common Reusable Components

This folder contains reusable components that can be used across different sections of the application.

## Components

### SectionDivider
A reusable component for section dividers with images.

```tsx
<SectionDivider 
  imageSrc="/path/to/image.png"
  position="top" // or "bottom"
  alt="Divider"
  className="custom-class"
/>
```

### VerticalTimeline
A timeline component with vertical lines and items.

```tsx
const timelineItems = [
  {
    id: 'item1',
    title: 'Feature Title',
    isActive: true,
    content: <div>Feature content</div>
  }
];

<VerticalTimeline 
  items={timelineItems}
  activeColor="#E8840C"
  inactiveColor="#d1d5db"
  activeLineHeight="12rem"
/>
```

### FeatureTags
Component for displaying feature tags.

```tsx
<FeatureTags 
  tags={['Tag 1', 'Tag 2', 'Tag 3']}
  className="custom-wrapper-class"
  tagClassName="custom-tag-class"
/>
```

### SectionHeader
Reusable section header with title, subtitle, and logo.

```tsx
<SectionHeader 
  title="Section Title"
  subtitle="Subtitle text"
  logoSrc="/path/to/logo.png"
  logoAlt="Logo alt text"
/>
```

### LearnMoreButton
Customizable call-to-action button.

```tsx
<LearnMoreButton 
  text="Learn More"
  icon="→"
  variant="outlined" // 'default', 'outlined', or 'text'
  color="#E8840C"
  onClick={handleClick}
/>
```

## Usage

Import the components you need:

```tsx
import { SectionDivider, VerticalTimeline, FeatureTags } from '@/components/common';
```

Or import all:

```tsx
import * as Common from '@/components/common';
```