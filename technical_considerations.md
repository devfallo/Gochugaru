# Technical Considerations & Decisions

## Overview
This directory contains technical decisions, lessons learned, and implementation notes for Protocollie. Each document focuses on a specific aspect of the project to keep information focused and accessible.

## Document Index

### [Development Workflow](./technical_considerations/development_workflow.md)
Captures our build and testing strategy, story-driven development approach, and effective testing patterns. Includes details on:
- Build verification process with `pnpm build` and `pnpm tauri build --no-bundle`
- Story-driven development methodology for 15-30 minute atomic stories
- Testing strategies for different types of features (UI, Database, IPC, MCP)

### [Architecture Decisions](./technical_considerations/architecture_decisions.md)
Major architectural decisions and their rationales. Key topics include:
- System Node.js architecture (direct process spawning vs bundled sidecars)
- Tailwind CSS v4 content detection challenges and solutions
- Database schema design with JSON storage for flexibility
- Future scalability considerations

### [UI/UX Patterns](./technical_considerations/ui_ux_patterns.md)
Comprehensive guide to UI/UX patterns and component decisions. Covers:
- Parameter form lifecycle management and best practices
- Tool selection and discovery patterns
- Professional branding and design system implementation
- Enhanced navigation, server management, and accessibility features
- Responsive design for desktop applications
- Custom title bar and window dragging solutions

### [Bug Fixes](./technical_considerations/bug_fixes.md)
Documentation of significant bugs and their fixes. Includes:
- Server connection state synchronization issues
- Quick Access panel auto-update problems
- Code coverage profraw file issues in development
- Detailed root cause analysis and solution implementations

### [Color Migration](./technical_considerations/color_migration.md)
Complete documentation of the semantic color system migration project:
- Comprehensive color usage analysis across 1,100+ hardcoded instances
- Semantic color architecture design with accessibility focus
- Tailwind CSS v4 integration and CSS variable implementation
- Automated migration tooling and mapping references
- Critical Tailwind v4 architecture discovery and resolution

### [Tailwind v4 Color System](./technical_considerations/tailwind_v4_color_system.md)
**🚨 CRITICAL REFERENCE** - Definitive guide for Tailwind v4 color implementation:
- Tailwind v4 vs v3 architectural differences and requirements
- Correct `@theme` directive implementation patterns
- oklch color space usage and light theme overrides
- Common pitfalls, silent failure modes, and verification methods
- Migration patterns and build verification requirements

### [Performance & Technical Insights](./technical_considerations/performance_technical_insights.md)
Key technical insights and performance considerations:
- MCP protocol implementation details
- Tool execution timing and measurement strategies
- Process management pitfalls and solutions
- Common development pitfalls and their solutions
- Performance optimization patterns

## Quick Reference

When starting a new feature or debugging an issue, consult:
1. **Development Workflow** - For build and testing approach
2. **Architecture Decisions** - For system design rationale
3. **🚨 Tailwind v4 Color System** - **CRITICAL** for any color-related work
4. **UI/UX Patterns** - For component implementation patterns
5. **Color Migration** - For semantic color usage patterns and migration status
6. **Bug Fixes** - To avoid previously encountered issues
7. **Performance & Technical Insights** - For optimization strategies

### 🔥 Critical Reminders
- **Colors MUST use `@theme` directive in CSS** - JavaScript config approach doesn't work in Tailwind v4
- **Always verify semantic colors are actually applied** - Silent failure mode exists
- **Use oklch color space** for better consistency and modern browser support

## Contributing

When adding new technical decisions or lessons learned:
1. Determine which document category fits best
2. Add your content to the appropriate file
3. Keep entries focused and include concrete examples
4. Update this index if adding new categories