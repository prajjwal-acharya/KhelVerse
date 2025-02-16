# Athlete Management Platform - Contribution Guide

Welcome to the Athlete Management Platform! 🚀  
We appreciate your interest in contributing to this project. Please follow the steps below to set up your development environment and contribute effectively.

---

## 📌 How to Contribute

### 1️⃣ Fork the Repository

To contribute, first, fork the repository:

1. Click the **Fork** button at the top-right corner of this repository on GitHub.
2. This will create a copy of the repo under your GitHub account.

---

### 2️⃣ Clone Your Fork

Once you've forked the repo, clone it to your local machine:

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/apts.git
```

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

---

### 3️⃣ Set Up the Upstream Repository

To keep your fork updated with the main repository, add the upstream repo:

```bash
cd apts
git remote add upstream https://github.com/blessedamritas-projects/apts.git
git remote -v  # Verify remotes
```

Now, your repo has two remotes:

- `origin` → Your forked repo
- `upstream` → The main project repo

---

### 4️⃣ Create a New Branch

Always work on a new branch instead of the `main` branch.

```bash
git checkout -b feature-name
```

**Example:**

```bash
git checkout -b add-dashboard-ui
```

---

### 5️⃣ Make Your Changes

Add your code changes.  
Test your changes before committing.

---

### 6️⃣ Commit & Push

Once you're happy with your changes, commit them:

```bash
git add .
git commit -m "feat: add Dashboard UI"
```

**Commit Message Guidelines:**

Use the following prefixes for better clarity:
- `feat:` → Adding a new feature (e.g., `feat: add dashboard UI`)
- `fix:` → Fixing a bug (e.g., `fix: resolve login issue`)
- `chore:` → Changes to build process or auxiliary tools (e.g., `chore: update dependencies`)
- `style:` → Changes that do not affect the code's logic (e.g., `style: format code`)
- `test:` → Adding or updating tests (e.g., `test: add tests for auth module`)

Now, push your branch to your forked repo:

```bash
git push origin feature-name
```

---

### 7️⃣ Create a Pull Request (PR)

1. Go to your forked repository on GitHub.
2. Click the **"Compare & pull request"** button.
3. Make sure the base branch is `main` of the original repo.
4. Add a clear title and description of your changes.
5. Click **"Create pull request"**.

🚀 Now, wait for the maintainers to review your PR!

---

## 🔄 Keeping Your Fork Updated

To avoid merge conflicts, update your fork regularly:

```bash
git checkout main  # Switch to main branch
git fetch upstream   # Fetch latest changes
git merge upstream/main  # Merge changes into local main
git push origin main  # Update your forked repo
```

---

## 📜 Contribution Guidelines

- ✔️ Follow coding standards (ESLint & Prettier are enforced).
- ✔️ Write clear commit messages.
- ✔️ Keep PRs small and focused on a single feature or fix.
- ✔️ Ensure your code works before submitting a PR.

---

## 📬 Need Help?

If you have any issues, feel free to open an issue or ask in the discussions! 🎯

---

Happy coding! 🚀

