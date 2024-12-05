🚀🚀🚀**Technical Challange at Upwork Aladia-Project**
---
This repository presents a complete implementation of a scalable design system and component library for a NuxtJS application, developed using Storybook. Below is a concise explanation of the technologies and tools used, along with the design and development decisions made throughout the project.
---

👇 **Video Demo**
---
https://www.loom.com/share/83df70a3182e4b68b279d3437b160758?sid=6cdb4c25-0caf-46f6-8b5b-01c2103e9d5c
---



📂 Directory Structure and Features
---
### **1. Component-based Design System**
---

The project follows the Atomic Design Principle [see more](https://alexop.dev/posts/atomic-design-vue-or-nuxt/) for UI development, categorized into Atoms, Molecules, Organisms, and Templates:


**Atoms**: Small, reusable UI elements.
  ---
  - `Icon.vue`: Renders application-wide icons.
  - `InputField.vue`: Manages input fields with validation or styles.
  - `Text.vue`: Displays consistent text elements.
  
  **Molecules**: Groups of atoms working together.
  ---
  - `ActionButton.vue`: Reusable buttons for various actions.
  - `InputBox.vue`: Combines input fields with labels and validation feedback.

  **Organisms**: Complex UI components.
  ---
  - `EmailSignUPForm.vue`: Implements a complete email sign-up form.

### **2. Page Templates**
---
Reusable templates for consistent structure:
- `SignUpForm.vue`: Provides a user-friendly form for sign-up flows.
- `Table.vue`: Displays structured data in a tabular format with responsive design.

### **3. Pages**
Predefined pages to route users:
- `external.vue`:   This page shows the components used from external liberary **Element Plus** [here](https://element-plus.org/en-US/component/table.html).
- `index.vue`: The primary landing page for the application.

### **4. Storybook Integration**
The `.storybook` folder allows for:
- Isolated development of components.
- Component documentation and live previews.

---

# Custom Table Component using Element Plus
[Table.vue](https://github.com/Berekettf/Technical_Challenge/blob/main/components/templates/Table.vue#L1C1-L66C9)

This repository includes a custom Vue component for creating a responsive, data-driven table using the **Element Plus** library. The table is designed with row-specific styling and supports TypeScript for better type safety and maintainability.

## Features

1. **Data Rendering**:  
   Displays tabular data with customizable columns using `el-table` and `el-table-column`.

2. **Conditional Row Styling**:  
   Highlights specific rows based on conditions with predefined classes:  
   - `warning-row`: Applied to row index `1`.  
   - `success-row`: Applied to row index `3`.

3. **TypeScript Support**:  
   Leverages TypeScript interfaces for defining data types (`User` interface), ensuring safer and more readable code.

4. **Responsive Design**:  
   Achieves a full-width table layout with inline styling.

