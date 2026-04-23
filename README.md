# Security Is Not a Runtime Concern
### Eliminating the Kernel Trap with Formal Proof-Carrying IPC

**Presenter:** Kevin O'Connor (@bneb)  
**Event:** Seattle Systems Meetup @ Uber  
**Date:** April 23, 2026  
**Interactive Deck:** [bneb.github.io/seattle-manifest/](https://bneb.github.io/seattle-manifest/) (Once Pages is enabled)

---

## Slide Deck

### 01. Title
![01-title](./screenshots/01-title.png)

### 02. Agenda
![02-agenda](./screenshots/02-agenda.png)

### 03. About Me
![03-about-me](./screenshots/03-about-me.png)

### 04. Other Stuff
![04-other-projects](./screenshots/04-other-projects.png)

### 05. The AI-Augmented Architect
![05-ai-augmented-engineering](./screenshots/05-ai-augmented-engineering.png)

### 06. The Quixotic Endeavor
![06-quixotic-endeavor](./screenshots/06-quixotic-endeavor.png)

### 07. Background: POSIX & Monoliths
![07-bg-posix](./screenshots/07-bg-posix.png)

### 08. Background: SMT & Z3
![08-bg-smt-z3](./screenshots/08-bg-smt-z3.png)

### 09. Background: MLIR & LLVM
![09-bg-mlir](./screenshots/09-bg-mlir.png)

### 10. Background: The Unikernel Thesis
![10-bg-unikernel](./screenshots/10-bg-unikernel.png)

### 11. The Landscape of Verified Systems
![11-comparison-landscape](./screenshots/11-comparison-landscape.png)

### 12. The Salt Roadmap
![12-salt-roadmap](./screenshots/12-salt-roadmap.png)

### 13. The KeuOS Roadmap
![13-keuos-roadmap-overview](./screenshots/13-keuos-roadmap-overview.png)

### 14. KeuOS: Cloud-native MicroVMs
![14-keuos-roadmap-microvms](./screenshots/14-keuos-roadmap-microvms.png)

### 15. KeuOS: Secure Cloud Hypervisor
![15-keuos-roadmap-hypervisor](./screenshots/15-keuos-roadmap-hypervisor.png)

### 16. KeuOS: Hard Real-time Edge
![16-keuos-roadmap-realtime](./screenshots/16-keuos-roadmap-realtime.png)

### 17. Abstract
![17-abstract](./screenshots/17-abstract.png)

### 18. The Systems Trilemma
![18-iron-triangle](./screenshots/18-iron-triangle.png)

### 19. Breaking the Trilemma
![19-salt-tradeoffs](./screenshots/19-salt-tradeoffs.png)

### 20. Mitigating the Proof Burden
![20-incremental-verification](./screenshots/20-incremental-verification.png)

### 21. The Static Ecosystem
![21-static-ecosystem](./screenshots/21-static-ecosystem.png)

### 22. A Principled Foundation
![22-principled-foundation](./screenshots/22-principled-foundation.png)

### 23. The Context-Switch Penalty
![23-posix-overhead](./screenshots/23-posix-overhead.png)

### 24. The Microkernel Dichotomy
![24-microkernel-dichotomy](./screenshots/24-microkernel-dichotomy.png)

### 25. Sync Point 1: The Bureaucracy of POSIX
![25-sync-point-1](./screenshots/25-sync-point-1.png)

### 26. The False Choice
![26-lang-dichotomy](./screenshots/26-lang-dichotomy.png)

### 27. The Dimensions of Safety
![27-safety-types](./screenshots/27-safety-types.png)

### 28. The Rust Breakthrough
![28-rust-cool](./screenshots/28-rust-cool.png)

### 29. The Salt Evolution
![29-salt-evolution](./screenshots/29-salt-evolution.png)

### 30. Salt Magic
![30-salt-magic](./screenshots/30-salt-magic.png)

### 31. Literate Verification
![31-literate-contracts](./screenshots/31-literate-contracts.png)

### 32. Axiomatic Foundations
![32-axiomatic-foundations](./screenshots/32-axiomatic-foundations.png)

### 33. The Mathematics of Elision
![33-contract-elision](./screenshots/33-contract-elision.png)

### 34. Zero-Cost Safety
![34-zero-cost-safety](./screenshots/34-zero-cost-safety.png)

### 35. Polyhedral Intelligence
![35-mlir-intelligence](./screenshots/35-mlir-intelligence.png)

### 36. Sync Point 2: The Compile-Time Bouncer
![36-sync-point-2](./screenshots/36-sync-point-2.png)

### 37. The Verified Plane
![37-verified-plane](./screenshots/37-verified-plane.png)

### 38. The Trap vs. The Ring
![38-trap-dichotomy](./screenshots/38-trap-dichotomy.png)

### 39. Lock-Free SPSC Rings
![39-lock-free-spsc](./screenshots/39-lock-free-spsc.png)

### 40. Proof-Carrying IPC
![40-proof-carrying-ipc](./screenshots/40-proof-carrying-ipc.png)

### 41. The 12-Cycle Arbiter
![41-arbiter-validation](./screenshots/41-arbiter-validation.png)

### 42. Benchmark: Null Syscall
![42-bench-null-syscall](./screenshots/42-bench-null-syscall.png)

### 43. Benchmark: Arena Allocation
![43-bench-arena-allocation](./screenshots/43-bench-arena-allocation.png)

### 44. Benchmark: Socket Data Plane
![44-bench-socket-io](./screenshots/44-bench-socket-io.png)

### 45. Benchmark: Context Switching
![45-bench-context-switch](./screenshots/45-bench-context-switch.png)

### 46. Benchmark: NetD C10M
![46-bench-netd-c10m](./screenshots/46-bench-netd-c10m.png)

### 47. Benchmark: LETTUCE
![47-bench-lettuce](./screenshots/47-bench-lettuce.png)

### 48. Proved vs. Tried
![48-empirical-integrity](./screenshots/48-empirical-integrity.png)

### 49. Thank You
![49-conclusion](./screenshots/49-conclusion.png)

### 50. Q&A
![50-qa](./screenshots/50-qa.png)

---

## How to Run Locally

1. **Install Dependencies:** `bun install`
2. **Build:** `bun run build`
3. **Run Server:** `bun run dev` (Starts server with auto-reload)

---
**Formal verification for the critical path.**
