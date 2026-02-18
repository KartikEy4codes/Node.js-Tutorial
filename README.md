# Node.js Tutorial – Semester Practice Repository

This repository contains **all Node.js, JavaScript, Unix, Git, and GitHub practice code** taught during the semester as part of the **Node.js Tutorial** course.

The purpose of this repository is to:
- Practice concepts taught in class
- Maintain topic-wise organized code
- Demonstrate hands-on understanding of Node.js ecosystem
- Track learning progress using Git & GitHub

---

## 📚 Topics Covered

### 🐧 Unix & Shell
- Unix philosophy
- Kernel vs Shell
- CLI vs GUI
- File system hierarchy
- Absolute & relative paths
- Basic and advanced Unix commands
- Pipes, redirection, background jobs
- Shell scripting (variables, loops, conditionals)

---

### 🔧 Git & GitHub
- Version control concepts
- Git initialization and configuration
- Working directory, staging area, commits
- Branching, merging, rebasing
- Conflict resolution
- GitHub workflow
- Pull requests and code reviews

---

### 🟨 JavaScript Core Concepts
- JavaScript runtime
- Call stack and event loop
- Single-threaded execution
- Blocking vs non-blocking code
- Callbacks
- Promises and chaining
- Async / Await
- Error handling

---

### 🟩 Node.js Fundamentals
- Node.js architecture
- V8 engine
- Event-driven model
- Node environment setup
- npm and package.json
- Core modules (`fs`, `path`, `os`, `process`)
- Synchronous vs Asynchronous operations
- Module system (CommonJS, `require`, `module.exports`)
- Module caching

---

## 📂 Repository Structure

```
Node.js-Tutorial/
├── Module-1/
│   ├── 01-Unix-Basics/
│   │   └── notes.txt (Unix fundamentals)
│   │
│   ├── 02-unix-file-system/
│   │   └── path.sh (Path navigation scripts)
│   │
│   ├── 03-basic-commands/
│   │   └── basic_commands.sh (ls, cd, mkdir, etc.)
│   │
│   ├── 04-advanced-commands/
│   │   └── advanced_commands.sh (grep, find, sed, etc.)
│   │
│   ├── 05-shell-scripting/
│   │   └── script.sh (Variables, loops, conditionals)
│   │
│   ├── 06-git-fundamentals/
│   │   └── git_commands.txt (Git init, add, commit, etc.)
│   │
│   ├── 07-git-internals/
│   │   └── git_internals.txt (Git objects, refs, etc.)
│   │
│   ├── 08-git-branching/
│   │   └── branching.txt (Branch creation, merging, rebasing)
│   │
│   ├── 09-github-workflow/
│   │   └── workflow.txt (Pull requests, code reviews)
│   │
│   ├── 10-js-runtime/
│   │   └── runtime.js (JavaScript runtime concepts) ✅
│   │
│   ├── 11-node-intro/
│   │   └── node_intro.js (Node.js introduction) ✅
│   │
│   ├── 12-node-env-setup/
│   │   └── package.json (npm and dependencies setup)
│   │
│   ├── 13-node-core-modules/ ✅ FIXED
│   │   ├── fs_demo.js (File system module - CONVERTED TO ES6)
│   │   └── os_demo.js (OS module - CONVERTED TO ES6)
│   │
│   ├── 14-module-system/ ✅ FIXED
│   │   ├── main.js (Module importing - CONVERTED TO ES6)
│   │   └── math.js (Module exporting - CONVERTED TO ES6)
│   │
│   ├── 15-sync-async-js/
│   │   ├── async_await.js (Async/await patterns) ✅
│   │   ├── promise.js (Promise patterns) ✅
│   │   └── sync_async.js (Sync vs Async comparison) ✅
│   │
│   ├── 16-path.os-js/ ✅ FIXED
│   │   ├── path.js (Path module utilities - CONVERTED TO ES6)
│   │   ├── path.join.txt (Documentation)
│   │   └── path.parse.txt (Documentation)
│   │
│   ├── 17-Os/
│   │   └── Os.txt (OS module documentation)
│   │
│   ├── 18-Module/ ✅
│   │   ├── demo.js (Module patterns demo) ✅
│   │   ├── index.js (Module export example) ✅
│   │   └── package.json (Local package config)
│   │
│   └── 19-Call_Stack_eventLoops_Callbacks/ ✅ FIXED
│       ├── Callback.js (Callback function patterns) ✅
│       ├── CallStack.js (Call stack demonstrations) ✅
│       ├── EventLoop.js (Event loop mechanics) ✅
│       ├── Promise.js (Promise mechanics - CONVERTED TO ES6)
│       └── testing.js (File I/O testing - CONVERTED TO ES6)
│
└── README.md (This file)
```

---

## ✅ Completed Work

### Module-1 Modules (19 total)
All modules in Module-1 have been reviewed and tested. The following modules required fixes:

#### Fixed Modules (ES6 Conversion)
The repository was configured with `"type": "module"` in package.json, which enables ES6 module syntax. The following files were converted from CommonJS to ES6 modules:

1. **13-node-core-modules**
   - `fs_demo.js` - Converted from `require("fs")` to `import fs from "fs"`
   - `os_demo.js` - Converted from `require("os")` to `import os from "os"`

2. **14-module-system**
   - `main.js` - Converted from `require("./math")` to `import { add } from "./math.js"`
   - `math.js` - Converted from `module.exports` to `export const`

3. **16-path.os-js**
   - `path.js` - Converted from `require("path")` to `import path from "path"`

4. **19-Call_Stack_eventLoops_Callbacks**
   - `Promise.js` - Removed unnecessary vite import and converted to ES6
   - `testing.js` - Converted from `require("fs")` to `import fs from "fs"`

#### Verified Working Modules
The following modules were tested and confirmed to run successfully:
- 10-js-runtime/runtime.js ✅
- 11-node-intro/node_intro.js ✅
- 15-sync-async-js/async_await.js ✅
- 15-sync-async-js/promise.js ✅
- 15-sync-async-js/sync_async.js ✅
- 18-Module/demo.js ✅
- 18-Module/index.js ✅
- 19-Call_Stack_eventLoops_Callbacks/Callback.js ✅
- 19-Call_Stack_eventLoops_Callbacks/CallStack.js ✅
- 19-Call_Stack_eventLoops_Callbacks/EventLoop.js ✅

---

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/KartikEy4codes/Node.js-Tutorial.git
   ```

2. Navigate to the project:
   ```bash
   cd Node.js-Tutorial
   ```

3. Run any JavaScript file with Node.js:
   ```bash
   cd Module-1/10-js-runtime
   node runtime.js
   ```

---

## 📝 Notes

- All JavaScript files use **ES6 module syntax** (`import`/`export`)
- Files in folders 01-09 contain shell scripts and documentation (not executable as Node.js)
- Each folder represents a learning topic with practical examples
- Files have been tested and verified to run without errors

---

## 👤 Author

**Kartikey** - Learning Node.js and JavaScript fundamentals

---

**Last Updated:** February 18, 2026
