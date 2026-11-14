# Contributing

Thank you for considering contributing to NC-Scorer!

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Create a branch** for your changes

## Development Workflow

### Setup
```bash
git clone https://github.com/YOUR-USERNAME/nc-scorer.git
cd nc-scorer
npm install
npm run dev
```

### Making Changes

1. Create a descriptive branch:
   ```bash
   git checkout -b 123-fix-scoring-bug
   ```

2. Make your changes following our [code style](./code-style)

3. Test your changes thoroughly

4. Commit using conventional commits:
   ```bash
   npm run commit
   ```

### Submitting a Pull Request

1. Update your branch:
   ```bash
   git checkout main
   git pull upstream main
   git checkout your-branch
   git rebase main
   ```

2. Push your changes:
   ```bash
   git push origin your-branch
   ```

3. Create a Pull Request on GitHub

## Code Guidelines

- Use Vue 3 Composition API
- Follow ESLint rules (run `npm run lint`)
- Add logging for important operations
- Update documentation if needed

## Verification Commands

Every modification must pass all checks before committing or submitting a pull request:

```bash
npm run lint         # ESLint check (0 errors)
npm run typecheck    # Static typecheck via vue-tsc --noEmit (0 errors)
npm run test:run     # Vitest unit and component test suites
npm run build        # Production application and documentation build
npm run validate     # Convenience runner for all 4 checks in sequence
```

## Where to Contribute

- **Bug fixes**: Check [issues](https://github.com/kidney-genetics-org/nc-scorer/issues)
- **Features**: Discuss in [GitHub Discussions](https://github.com/kidney-genetics-org/nc-scorer/discussions) first
- **Documentation**: Always welcome!

## Questions?

Feel free to ask in the [Discussions](https://github.com/kidney-genetics-org/nc-scorer/discussions) section.