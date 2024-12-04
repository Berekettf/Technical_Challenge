✅ **Aladia Project – Technical Challange**
---
This repository presents a complete implementation of a scalable design system and component library for a NuxtJS application, developed using Storybook and Figma. Below is a concise explanation of the technologies and tools used, along with the design and development decisions made throughout the project.
---

👇 **Video Demo**
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
