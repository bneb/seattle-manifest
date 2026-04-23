import { Section } from "./schema";

export const presentation: Section[] = [
  {
    id: "title",
    title: "Security Is Not a Runtime Concern",
    subtitle: "Eliminating the Kernel Trap with Formal Proof-Carrying IPC",
    content: [
      "A Technical Analysis of Zero-Trap Infrastructure.",
      "Presenter: Kevin O'Connor",
      "April 23, 2026 | Seattle Systems Meetup @ Uber"
    ],
    metric: { label: "System Latency", value: 2000, unit: "cycles" }
  },
  {
    id: "agenda",
    title: "Agenda",
    subtitle: "The Path to Zero-Trap Systems",
    content: [
      "I. The Legacy Tax: Quantifying POSIX/Monolithic Overhead",
      "II. Salt: Synthesizing Mathematical Shadows at Compile-Time",
      "III. KeuOS: Achieving Unikernel Latency with Microkernel Isolation",
      "IV. The 12-Cycle Arbiter: O(1) Proof-Carrying IPC",
      "V. Empirical Validation: Benchmark Analysis"
    ]
  },
  {
    id: "about-me",
    title: "About Me",
    subtitle: "Kevin O'Connor",
    content: [
      "I spend my days at Google (Maps) writing C++ and Python. For the last four months, I've spent my nights building Salt, KeuOS, and everything around them.",
      "I've been a software engineer for about 12 years now, with stops at Snapchat and Twitter back before it was X. I'm a UIUC alum and a systems nerd at heart.",
      "When I'm not staring at a terminal, I'm usually hanging out with my two small kids, bouldering, or finding a trail to hike.",
      "You can find my code on Github under @bneb."
    ]
  },
  {
    id: "other-projects",
    title: "Other Stuff",
    subtitle: "Side Quests & Experiments",
    content: [
      "• Aacyn: eBPF-powered monitoring (aacyn.com)",
      "• Ingelt: High-speed protocol translation (ingelt.com)",
      "• Trytet: Runtimes for AI agents (trytet.com)",
      "• B4mal: Verified build tool (github.com/bneb/b4mal)"
    ]
  },
  {
    id: "ai-augmented-engineering",
    title: "The AI-Augmented Architect",
    subtitle: "Engineering at Frontier Scale",
    content: [
      "**Transparency check:** Building ~170k lines of verified systems code, extensive tests, and benchmarks in just four months is not a purely solo human feat.",
      "**Frontier models (mostly Gemini):** Acted as a tireless systems pair-programmer, accelerating the generation of tests, proofs, and boilerplate.",
      "**Complementary design:** AI coding agents don't replace the architect. They are strictly complementary to human taste, technical skill, and the ability to define strict objective functions.",
      "**The Economics of Code:** As the marginal cost of producing code approaches zero, the premium shifts entirely to architectural taste, correctness, and rigorous mathematical verification."
    ]
  },
  {
    id: "quixotic-endeavor",
    title: "The Quixotic Endeavor",
    subtitle: "A New Foundation for Modern Workloads",
    content: [
      "Building a new systems language and a microkernel from scratch is an ambitious, even daunting, goal.",
      "But we’re doing this because the old trade-offs are starting to break under the weight of modern infrastructure. The 'Security Tax'—the cycles we lose to traps and checks—has become the primary bottleneck for the next generation of computing.",
      "The landscape has shifted. SMT solvers, MLIR infrastructure, and the move toward 60M PPS networking mean that we finally have the tools to build a different kind of system.",
      "We aren't just chasing an ideal; we're building the foundation that these workloads actually require."
    ]
  },
  {
    id: "bg-posix",
    title: "Background: POSIX & Monoliths",
    subtitle: "The Legacy Abstraction",
    content: [
      "POSIX was designed for a world of multi-user mainframes and slow serial I/O.",
      "The monolithic kernel provides a massive, high-overhead abstraction layer for everything from disk access to networking.",
      "While flexible, it forces every operation through a 'gatekeeper' (the kernel trap), which has become the primary bottleneck in ultra-low-latency systems."
    ]
  },
  {
    id: "bg-smt-z3",
    title: "Background: SMT & Z3",
    subtitle: "The Theorem Prover Co-Processor",
    content: [
      "SMT (Satisfiability Modulo Theories) solvers are like supercharged algebra engines.",
      "Z3, developed by Microsoft Research, is the industry standard. It can prove whether a set of logical constraints (like 'is this index always < array length') is always true, always false, or potentially both.",
      "Salt treats Z3 as a co-processor during compilation to eliminate the need for runtime guards."
    ]
  },
  {
    id: "bg-mlir",
    title: "Background: MLIR & LLVM",
    subtitle: "The Modern Compiler Infrastructure",
    content: [
      "MLIR (Multi-Level Intermediate Representation) is the successor to LLVM's internal architecture.",
      "It allows us to represent code at multiple levels of abstraction—from high-level Salt contracts down to hardware-specific vector instructions.",
      "By leveraging MLIR, Salt gets world-class optimizations (like loop tiling and vectorization) 'for free' by plugging into the same ecosystem used by AI frameworks."
    ]
  },
  {
    id: "bg-unikernel",
    title: "Background: The Unikernel Thesis",
    subtitle: "Single Address Space Systems",
    content: [
      "Unikernels (like MirageOS or HaLVM) proposed a radical idea: remove the kernel/user boundary entirely for single-purpose cloud VMs.",
      "They were incredibly fast but notoriously difficult to debug, deploy, and monitor.",
      "KeuOS aims to capture that raw unikernel speed while maintaining microkernel-style isolation and developer-friendly Salt ergonomics."
    ]
  },
  {
    id: "comparison-landscape",
    title: "The Landscape of Verified Systems",
    subtitle: "How KeuOS Compares",
    content: [
      "• seL4 (The Gold Standard): Achieves formal functional correctness (the code matches the spec) but is notoriously difficult to modify or extend without breaking the proof.",
      "• Rust-based Kernels (e.g., Theseus): Uses language-enforced safety (Ownership/Borrowing) but still relies on runtime checks and the cognitive load of a borrow checker.",
      "• KeuOS / Salt: Uses property-based verification (SMT/Z3) to elide checks at compile-time, designed from day one for a zero-trap shared-memory interface."
    ]
  },
  {
    id: "salt-roadmap",
    title: "The Salt Roadmap",
    subtitle: "The Language for Zero-Overhead Data Planes",
    content: [
      "Salt is designed to be the absolute best tool for workloads where every cycle matters and memory corruption is catastrophic.",
      "• Ultra-low latency packet processing: Data planes, load balancers, and network switches.",
      "• Verified In-memory Datastores: Pushing millions of ops/sec (like LETTUCE).",
      "• Accelerated ML/AI Inference: Utilizing MLIR for hardware-optimized, formally verified neural network execution (like Basalt)."
    ]
  },
  {
    id: "keuos-roadmap-overview",
    title: "The KeuOS Roadmap",
    subtitle: "Targeting Edge & Cloud Infrastructure",
    content: [
      "Our long-term goal for KeuOS is to provide a verified foundation for environments where isolation and performance are critical.",
      "We are focusing our development on three primary use cases:",
      "• Cloud-native MicroVMs and serverless workloads.",
      "• Secure, verified hypervisors for multi-tenancy.",
      "• Deterministic real-time systems for Edge and IoT."
    ]
  },
  {
    id: "keuos-roadmap-microvms",
    title: "KeuOS: Cloud-native MicroVMs",
    subtitle: "High-Density Serverless",
    content: [
      "Serverless environments require booting thousands of isolated instances per second on a single host.",
      "By eliminating the monolithic kernel boot process, KeuOS can achieve sub-millisecond cold starts.",
      "The shared-memory data plane allows these MicroVMs to communicate with the host network stack at near-native speeds."
    ]
  },
  {
    id: "keuos-roadmap-hypervisor",
    title: "KeuOS: Secure Cloud Hypervisor",
    subtitle: "Verified Multi-Tenancy",
    content: [
      "Cloud providers currently rely on complex hypervisors (like KVM or Xen) to enforce tenant isolation.",
      "A microkernel designed with formal verification can mathematically prove that tenant boundaries cannot be breached.",
      "KeuOS aims to provide a minimal, proven Trusted Computing Base (TCB) for hosting traditional guest OSes."
    ]
  },
  {
    id: "keuos-roadmap-realtime",
    title: "KeuOS: Hard Real-time Edge",
    subtitle: "Determinism for IoT & Control Systems",
    content: [
      "Industrial control systems and autonomous vehicles require strict, deterministic latency bounds.",
      "Traditional kernels struggle with latency spikes caused by unpredictable scheduling or heavy interrupt handling.",
      "With a zero-trap architecture and verified execution paths, KeuOS provides the predictability required for hard real-time guarantees."
    ]
  },
  {
    id: "abstract",
    title: "Abstract",
    subtitle: "A Formal Approach to Memory Invariants",
    content: [
      "In modern systems engineering, the 'Security Tax'—the aggregate computational overhead of syscall traps, context switches, and runtime bounds checks—is a significant bottleneck.",
      "KeuOS proposes a verified alternative. By formalizing memory invariants at compile-time using SMT-backed verification, we demonstrate that runtime defensive heuristics can be entirely elided without compromising system integrity.",
      "This approach transitions security from an expensive runtime concern to a rigorous compile-time obligation."
    ],
    metric: { label: "System Latency", value: 2000, unit: "cycles" }
  },
  {
    id: "iron-triangle",
    title: "The Systems Trilemma",
    subtitle: "Fast, Secure, Ergonomic: Pick Two",
    content: [
      "The classic 'Iron Triangle' of systems engineering posits a fundamental trilemma: Fast, Secure, and Ergonomic (Robust). Historically, we've been forced to pick two.",
      "In the context of Salt and Lattice, we operate under the thesis that this trilemma is a byproduct of outdated compiler architectures.",
      "Salt is specifically designed to be the exception to this rule."
    ]
  },
  {
    id: "salt-tradeoffs",
    title: "Breaking the Trilemma",
    subtitle: "Shifting the Burden to Compile-Time",
    content: [
      "To break the Iron Triangle, Salt accepts a different set of trade-offs, moving complexity entirely out of the execution path.",
      "1. The Proof Burden: The Z3 theorem prover ensures O(1) runtime at the expense of significantly longer compile times.",
      "2. Explicit Axioms: Developers must adopt a mathematical 'proving' mental model using strict contracts (requires/ensures).",
      "3. Static Ecosystem: To maintain proof integrity, dynamic linking and JIT compilation are eschewed in favor of absolute AOT verification."
    ]
  },
  {
    id: "incremental-verification",
    title: "Mitigating the Proof Burden",
    subtitle: "Keeping the Developer Loop Tight",
    content: [
      "While formal verification provides O(1) runtime, it shifts the computational cost to compile-time. Exhaustive proofs can, in theory, take minutes.",
      "To maintain developer ergonomics, Salt employs Incremental Verification. Unchanged modules are confirmed via a rigorous Dependency DAG Analysis.",
      "We utilize Cryptographic Proof Caching (hashing verified invariants) and Function-level Scoping to ensure Z3 only re-evaluates the exact logic being modified."
    ]
  },
  {
    id: "static-ecosystem",
    title: "The Static Ecosystem",
    subtitle: "Immutable, Verified Artifacts",
    content: [
      "Eschewing dynamic linking means no runtime patching. Security updates require replacing the entire verified binary.",
      "However, in a zero-trap microkernel architecture, atomic binary replacement is safer and more predictable than runtime patch management.",
      "KeuOS treats deployments as immutable, verified artifacts. When a patch is required, the system is re-proven and atomically swapped, eliminating 'DLL hell' entirely."
    ]
  },
  {
    id: "principled-foundation",
    title: "A Principled Foundation",
    subtitle: "Verification as a First Principle",
    content: [
      "We’re operating under a simple premise: if we can prove a property once at build time, we shouldn't have to check it a billion times at runtime.",
      "We're choosing a different path for systems engineering—one that moves the complexity entirely out of the execution path. We choose to do the hard work of verification up front, so the machine doesn't have to do it every time it processes a packet.",
      "By building a kernel where boundaries are enforced by mathematical proofs rather than just hardware traps, we aren't just making things faster. We're making them more certain.",
      "In this architecture, performance and security are no longer at odds—they are the same thing."
    ]
  },
  {
    id: "posix-overhead",
    title: "The Context-Switch Penalty",
    subtitle: "Quantifying the Legacy Tax",
    content: [
      "Donald Knuth famously noted that we should forget about small efficiencies 97% of the time, but we must not pass up opportunities in the 'critical 3%'.",
      "The kernel trap—a 1,000-cycle context switch—is the ultimate critical path for modern IO.",
      "This 'cold start' introduces a jitter profile that is fundamentally incompatible with deterministic, high-frequency distributed workloads."
    ],
    code: {
      before: "// Linux x86_64 syscall path (abridged)\nmov rax, 1          ; write syscall\nmov rdi, 1          ; stdout\nsyscall             ; <-- 1000 cycle penalty starts here\n; ... kernel trap handler ...",
      language: "asm"
    },
    metric: { label: "POSIX Trap Cost", value: 1000, unit: "cycles" },
    axiom: 1
  },
  {
    id: "microkernel-dichotomy",
    title: "The Microkernel Dichotomy",
    subtitle: "Safety vs. Latency Trade-offs",
    content: [
      "Microkernels offer superior isolation by moving subsystems into Ring 3, yet they have historically suffered from a performance penalty due to frequent Inter-Process Communication (IPC).",
      "Traditional IPC architectures rely on the MMU and kernel-mediated context switches, which effectively double the security tax observed in monolithic kernels."
    ],
    metric: { label: "Standard IPC", value: 3500, unit: "cycles" }
  },
  {
    id: "sync-point-1",
    title: "Sync Point 1: The Bureaucracy of POSIX",
    subtitle: "Taking a breath...",
    content: [
      "**The Summary:** The kernel trap is a 1,000-cycle context switch that acts as a fundamental speed limit on modern IO.",
      "**The Analogy:** POSIX IPC is like trying to have a rapid-fire brainstorming session with the engineer sitting next to you, but company policy dictates you must route every single sentence as a certified letter through the HR department.",
      "**The Joke:** Knock, knock. ... Who's there? ... (Pause for 1,000 cycles, flush the TLB, consult the Virtual File System, verify permissions)... Syscall."
    ]
  },
  {
    id: "lang-dichotomy",
    title: "The False Choice",
    subtitle: "Safety vs. Speed",
    content: [
      "For 40 years, systems programming has been a zero-sum game. You can choose raw performance, or you can choose safety. Never both.",
      "C/C++: Raw metal performance and 'Mechanical Sympathy', but plagued by buffer overflows, Use-After-Free, and the persistent threat of memory corruption.",
      "Java/Go/Python: Managed safety and high-level ergonomics, but burdened by the Garbage Collector 'Tax' and non-deterministic latency spikes."
    ]
  },
  {
    id: "safety-types",
    title: "The Dimensions of Safety",
    subtitle: "Beyond the Memory Buffer",
    content: [
      "True system integrity requires a multi-dimensional approach to safety that extends beyond just avoiding segmentation faults.",
      "• Memory Safety: No Use-After-Free, double-free, or out-of-bounds access.",
      "• Temporal Safety: Ensuring objects exist exactly as long as they are referenced.",
      "• Type Safety: Invariants hold across abstraction boundaries (no 'hidden' casts).",
      "• Formal Safety: Proving that the physical implementation matches the mathematical intent."
    ]
  },
  {
    id: "rust-cool",
    title: "The Rust Breakthrough",
    subtitle: "Moving Safety to Compile-Time",
    content: [
      "Rust proved that we can have safety without a Garbage Collector by using Ownership, Borrowing, and Linear Types.",
      "It is the gold standard for memory safety today, but it introduces a significant 'Complexity Tax'.",
      "Developers often 'fight the borrow checker' for complex data structures, and the compiler still emits hidden runtime bounds checks to maintain its safety guarantees."
    ]
  },
  {
    id: "salt-evolution",
    title: "The Salt Evolution",
    subtitle: "Reducing the Complexity Tax",
    content: [
      "Salt aims for Rust-level safety with C-level simplicity. We believe safety shouldn't require a PhD in Type Theory.",
      "• Arena Memory: Instead of a global borrow checker, we use explicit Arena allocation with compile-time escape analysis.",
      "• SMT Verification: We use the Z3 theorem prover to prove invariants, allowing us to elide runtime checks that even Rust must keep.",
      "• Ergonomics First: High-level syntax that compiles to verified, zero-overhead machine code."
    ]
  },
  {
    id: "salt-magic",
    title: "Salt Magic",
    subtitle: "Ergonomics without the Overhead",
    content: [
      "Syntactic sugar in Salt is designed for 'Mechanical Sympathy' and readability, not just aesthetics.",
      "• Unix-style Pipes: Clean data flow using `|>` and the `_` placeholder.",
      "• Result Types: Canonical error codes and first-class error handling with `Result<T, E>`.",
      "• Arena Primitives: First-class support for linear allocation that matches hardware cache lines."
    ],
    code: {
      before: "fn process_data(input: StringView) -> Result<u64, Error> {\n    let arena = Arena::new(4096);\n    \n    return input \n        |> parse_hex(_)\n        |> validate_range(_, 0, 1000)\n        |> compute_hash(arena, _);\n}",
      language: "salt"
    }
  },
  {
    id: "literate-contracts",
    title: "Literate Verification",
    subtitle: "Programs as Mathematical Literature",
    content: [
      "Knuth's concept of Literate Programming dictates that we should write code as an essay explaining the logic to humans.",
      "Salt's formal contracts (requires and ensures) aren't just guards for the Z3 compiler—they are explicit mathematical documentation.",
      "By reading the invariant, a human engineer understands exactly *why* a function is safe without needing to run it in their head."
    ]
  },
  {
    id: "axiomatic-foundations",
    title: "Axiomatic Foundations",
    subtitle: "Salt: A Language with a Mathematical Shadow",
    content: [
      "Salt is an ahead-of-time compiled systems language designed to treat formal verification as a first-class citizen of the compilation pipeline.",
      "By embedding the Z3 theorem prover directly into the type-checking loop, we allow developers to define 'Axiomatic Contracts' using 'requires' and 'ensures' clauses."
    ],
    code: {
      before: "pub fn safe_divide(a: i32, b: i32) -> i32\n    requires b != 0\n    ensures result == a / b\n{\n    return a / b;\n}",
      language: "salt"
    },
    axiom: 2
  },
  {
    id: "contract-elision",
    title: "The Mathematics of Elision",
    subtitle: "Weakest Precondition (WP) Generation",
    content: [
      "The core innovation of the Salt compiler is its 'Contract Elision' engine. We employ Weakest Precondition generation to prove that a specific memory invariant holds across all possible paths.",
      "Once a property is proved as a tautology, the compiler is authorized to physically remove the corresponding branch instruction from the binary."
    ],
    code: {
      before: "fn access(arr: []u8, idx: usize) {\n    if (idx >= arr.len()) panic(); // Defensive\n    return arr[idx];\n}",
      after: "fn access(arr: []u8, idx: usize)\n    requires idx < arr.len() // Proved by Z3\n{\n    return arr[idx]; // No runtime check emitted\n}",
      language: "salt"
    },
    metric: { label: "Verified Branches", value: 0, unit: "cycles" }
  },
  {
    id: "zero-cost-safety",
    title: "Zero-Cost Safety",
    subtitle: "Visualizing Instruction Elimination",
    content: [
      "The physical removal of branches has a multiplicative effect on performance. By eliminating the necessity for branch prediction, we stabilize the pipeline.",
      "In Salt, defensive checks simply do not exist at runtime. We replace runtime heuristics with compile-time certainty."
    ],
    code: {
      before: "; Generated ARM64 with checks\ncmp w1, w2\nb.hs .Lpanic_handler\nldr  b0, [x0, x1]\nret",
      after: "; Generated ARM64 (Optimized)\nldr  b0, [x0, x1] ; Verified safe\nret              ; Single cycle result",
      language: "asm"
    },
    metric: { label: "Misprediction Rate", value: 0, unit: "%" }
  },
  {
    id: "mlir-intelligence",
    title: "Polyhedral Intelligence",
    subtitle: "Beyond the LLVM Optimization Ceiling",
    content: [
      "Salt utilizes the MLIR 'affine' dialect to perform polyhedral loop tiling, leveraging formal proofs of memory alignment.",
      "Because the compiler possesses formal proofs of alias-free pointers, it can perform aggressive vectorization that is impossible in 'unsafe' languages."
    ],
    code: {
      before: "for i in 0..N {\n    @affine(tile: 64)\n    for j in 0..M {\n        C[i, j] += A[i, k] * B[k, j];\n    }\n}",
      language: "salt"
    },
    metric: { label: "MatMul Speedup", value: 4.5, unit: "x" }
  },
  {
    id: "sync-point-2",
    title: "Sync Point 2: The Compile-Time Bouncer",
    subtitle: "Taking a breath...",
    content: [
      "**The Summary:** Salt shifts the entire cost of security and bounds-checking from runtime to compile-time using Z3.",
      "**The Analogy:** It's like having a hyper-strict bouncer check IDs days before the club opens. Once you're inside the zero-trap Ring, there are no security guards slowing down the dance floor.",
      "**The Joke:** A C dev, a Java dev, and a Rust dev walk into a bar. The C dev leaks memory, the Java dev pauses for 500ms to clean up, and the Rust dev spends 3 hours arguing with the bartender about who owns the coaster. Salt just mathematically proves you're sober before you even arrive."
    ]
  },
  {
    id: "verified-plane",
    title: "The Verified Plane",
    subtitle: "KeuOS Architecture Overview",
    content: [
      "KeuOS is the logical manifestation of the Salt philosophy. It is a verified microkernel where Ring 0 is reduced to a minimal Trusted Computing Base (TCB).",
      "The kernel manages only three core primitives: Physical Memory, Scheduling, and the IPC Arbiter. All other services—including the network stack—reside in Ring 3."
    ],
    code: {
      before: "[ RING 3: The Verified Plane ]\n+---------------+  +---------------+  +---------------+\n| Network Stack |  | LatticeStore  |  | User Apps     |\n| (NetD Daemon) |  | (Storage)     |  | (Basalt AI)   |\n+-------+-------+  +-------+-------+  +-------+-------+\n        |                  |                  |\n========|==================|==================|========\n        v                  v                  v\n[ RING 0: The Minimal TCB ]\n+-----------------------------------------------------+\n|                  IPC Arbiter (12-cycle)             |\n|    Physical Memory Mgmt     |     Thread Scheduler  |\n+-----------------------------------------------------+",
      language: "text"
    },
    axiom: 3
  },
  {
    id: "trap-dichotomy",
    title: "The Trap vs. The Ring",
    subtitle: "From Interrupts to Shared Memory",
    content: [
      "The 'Zero-Trap' architecture fundamentally changes how user space communicates with the kernel.",
      "• The Legacy Trap: A hardware exception (like syscall) that forces a Ring 3 -> Ring 0 context switch. It is a 'stop-the-world' event for the CPU pipeline.",
      "• The Zero-Trap Ring: A lock-free, shared-memory interface. Communication happens via memory writes, not hardware triggers.",
      "• Why it works: By bypassing the hardware exception handler, we eliminate the 1,000-cycle entrance fee. System integrity is maintained not by the trap, but by mathematical proofs."
    ],
    code: {
      before: "LEGACY TRAP (1000+ Cycles)\n[App] --(syscall)--> [CPU TRAP] --(context switch)--> [Kernel]\n\nZERO-TRAP RING (150 Cycles)\n[App] ========(SPSC Shared Memory Ring)========> [Daemon]\n      \\                                        /\n       \\--(O(1) Arbiter Validation via Hint)--/",
      language: "text"
    }
  },
  {
    id: "lock-free-spsc",
    title: "Lock-Free SPSC Rings",
    subtitle: "The Zero-Trap Data Plane",
    content: [
      "KeuOS replaces legacy 'read' and 'write' syscalls with Shared-Memory SPSC (Single-Producer, Single-Consumer) Rings.",
      "An application simply polls its ring for work, eliminating interrupt context switches and kernel traps entirely."
    ],
    code: {
      before: "fn poll_net_ring(ring: *SpscRing) {\n    while ring.has_work() {\n        let pkt = ring.pop_packet();\n        process_verified(pkt);\n    }\n}",
      language: "salt"
    },
    metric: { label: "Data Path Jitter", value: 1, unit: "ns" }
  },
  {
    id: "proof-carrying-ipc",
    title: "Proof-Carrying IPC",
    subtitle: "The Z3-Sealed Identity Token",
    content: [
      "To authorize shared memory access, the Salt compiler 'seals' a structural invariant into a 64-bit 'proof_hint', generated using a cryptographic seal with keys known only to the compiler and kernel.",
      "This allows the KeuOS arbiter to validate a userspace descriptor in a constant-time O(1) path without context switching."
    ],
    code: {
      before: "const K0: u64 = 0x4c61747469636521;\nconst K1: u64 = 0x536f76657265696e;\n\nlet seal = seal_invariant(K0, K1, desc_data);\n// Seal is embedded in the binary",
      language: "salt"
    }
  },
  {
    id: "arbiter-validation",
    title: "The 12-Cycle Arbiter",
    subtitle: "O(1) Validation in Ring 0",
    content: [
      "The KeuOS Arbiter performs a two-stage validation gate: an alignment gate and a cryptographic hint verification.",
      "The entire validation sequence consumes exactly 12 CPU cycles. We have replaced the security tax with a mathematical handshake."
    ],
    code: {
      before: "; Arbiter logic abridged\nand x2, x1, #0x3F    ; Alignment check\ncbnz x2, .Linvalid\nldr  x3, [x0, #hint] ; Load hint\ncmp  x3, x4          ; Compare with expected\nb.ne .Linvalid",
      language: "asm"
    },
    metric: { label: "Arbiter Path", value: 12, unit: "cycles" }
  },
  {
    id: "bench-null-syscall",
    title: "Benchmark: Null Syscall",
    subtitle: "The Baseline Overhead (Ring 3 \u2192 0 \u2192 3)",
    content: [
      "Context: The fundamental cost of crossing the hardware isolation boundary.",
      "Definition: A system call that performs no actual work, measuring only the trap latency.",
      "Caveats: Measured with KPTI and SWAPGS mitigations active; heavily dependent on CPU microarchitecture."
    ],
    html: `
<div class="bench-item">
  <div class="bench-val">102 cyc</div>
  <div class="bench-label">Null Syscall</div>
  <div class="bench-meta">Ring 3\u21920\u21923 \u00b7 <span class="highlight">7.4\u00d7 Linux</span></div>
</div>
`,
    metric: { label: "Null Syscall", value: 102, unit: "cycles" }
  },
  {
    id: "bench-arena-allocation",
    title: "Benchmark: Arena Allocation",
    subtitle: "O(1) Memory Management",
    content: [
      "Context: Salt's primary memory management model, eschewing the global heap.",
      "Definition: The time (59 cycles) to bump a pointer within a pre-allocated, thread-local arena block.",
      "Caveats: Requires the developer to statically prove (via Z3) that references do not escape the arena's lifetime."
    ],
    html: `
<div class="bench-item">
  <div class="bench-val">59 cyc</div>
  <div class="bench-label">Arena Allocation</div>
  <div class="bench-meta">vs glibc malloc (1,000-5,000) \u00b7 <span class="highlight">O(1) Bulk Free</span></div>
</div>
`,
    metric: { label: "Arena Alloc", value: 59, unit: "cycles" }
  },
  {
    id: "bench-socket-io",
    title: "Benchmark: Socket Data Plane",
    subtitle: "The Zero-Trap Network Path",
    content: [
      "Context: The Zero-Trap shared memory model in action.",
      "Definition: Total cost (136 cycles) for a 64B socket read and write operation via SPSC rings.",
      "Caveats: This bypasses traditional POSIX sockets and requires the Lattice NetD Ring 3 daemon."
    ],
    html: `
<div class="bench-item">
  <div class="bench-val">136 cyc</div>
  <div class="bench-label">Socket I/O</div>
  <div class="bench-meta">per 64B read+write \u00b7 <span class="highlight">Zero Traps</span></div>
</div>
`,
    metric: { label: "Socket I/O", value: 136, unit: "cycles" }
  },
  {
    id: "bench-context-switch",
    title: "Benchmark: Context Switching",
    subtitle: "16-Core SMP Scaling",
    content: [
      "Context: KeuOS thread scheduling and fiber migration.",
      "Definition: The time (487 cycles) to save full General Purpose Registers (GPR) and 512B of vector state (FXSAVE).",
      "Caveats: Benchmark represents a fiber-to-fiber zero-copy yield under load."
    ],
    html: `
<div class="bench-item">
  <div class="bench-val">487 cyc</div>
  <div class="bench-label">Ctx Switch</div>
  <div class="bench-meta">Full GPR + FXSAVE \u00b7 <span class="highlight">16-core SMP</span></div>
</div>
`,
    metric: { label: "Context Switch", value: 487, unit: "cycles" }
  },
  {
    id: "bench-netd-c10m",
    title: "Benchmark: NetD C10M",
    subtitle: "High-Density Networking",
    content: [
      "Context: Pushing the limits of high-throughput packet processing.",
      "Definition: 60M+ Packets Per Second (PPS) processed by the NetD Ring 3 bridge.",
      "Caveats: Achieving 6x the C10M target requires a NIC configured to DMA directly into userspace SPSC rings."
    ],
    html: `
<div class="bench-item">
  <div class="bench-val">60M+ PPS</div>
  <div class="bench-label">NetD Throughput</div>
  <div class="bench-meta">Ring 3 SPSC bridge \u00b7 <span class="highlight">6\u00d7 C10M Target</span></div>
</div>
`,
    metric: { label: "NetD Throughput", value: 60000000, unit: "pps" }
  },
  {
    id: "bench-lettuce",
    title: "Benchmark: LETTUCE",
    subtitle: "Validating the Application Layer",
    content: [
      "Context: A Redis-compatible in-memory data store written entirely in Salt.",
      "Definition: 234K ops/sec throughput for GET/SET workloads.",
      "Caveats: Built on a single-threaded event loop utilizing zero-copy RESP parsing; performance is strictly CPU-bound."
    ],
    html: `
<div class="benchmark-card">
  <div class="benchmark-header">
    <span class="title">LETTUCE</span>
    <span class="subtitle">Redis-compatible Store</span>
  </div>
  <div class="chart-container">
    <div class="stat-group">
      <div class="main-val">234K</div>
      <div class="unit">ops/sec</div>
    </div>
    <div class="comparison-bar">
      <div class="bar-wrapper">
        <div class="bar-label">Salt (LETTUCE)</div>
        <div class="bar salt-bar" style="width: 100%;"></div>
      </div>
      <div class="bar-wrapper">
        <div class="bar-label">Standard Redis</div>
        <div class="bar comparison-bar-inner" style="width: 50%;"></div>
      </div>
    </div>
    <div class="badge">2\u00d7 Throughput vs Redis</div>
  </div>
</div>
`,
    metric: { label: "Lettuce Ops", value: 234000, unit: "ops/sec" }
  },
  {
    id: "empirical-integrity",
    title: "Proved vs. Tried",
    subtitle: "The Limits of the Mathematical Shadow",
    content: [
      "'Beware of bugs in the above code; I have only proved it correct, not tried it.' \u2014 Donald Knuth",
      "A formal proof is only as strong as the assumptions mapping it to reality. Salt proves the logical model, but silicon can still fail.",
      "This is why our 60M PPS benchmarks are critical. We don't just verify the math; we must empirically 'try' the physical manifestation."
    ]
  },
  {
    id: "conclusion",
    title: "Thank You",
    subtitle: "The Future of Performance and Safety",
    content: [
      "We’ve reached the limits of what traditional runtime defenses can provide for high-performance workloads.",
      "By shifting the effort to compile-time verification, we can finally stop paying the security tax and let our hardware run at its true capacity.",
      "When the machine is proven safe, it is free to perform. And that's where the next generation of systems infrastructure begins.",
      "",
      "Project: github.com/bneb/lattice | Language: salt-lang.dev",
      "Contact: default.main.address@gmail.com",
      "",
      "Hexadecimal Bug Bounty: $2.56 for any reproducible runtime violation of a Z3-proven property."
    ],
    metric: { label: "Total Security Tax", value: 0, unit: "cycles" }
  },
  {
    id: "qa",
    title: "Q&A",
    subtitle: "Deep-Dive: MLIR vs. Hand-tuned Assembly",
    content: [
      "**The Core Debate:** Why use a high-level IR like MLIR instead of hand-writing critical loops in assembly?",
      "• **In C:** Achieving peak performance requires manual loop unrolling, SIMD intrinsics, and constant risk of buffer overflows. Correctness is a human obligation.",
      "• **In Salt:** Z3 proves memory alignment and alias-free pointers, allowing the MLIR 'affine' dialect to automatically apply polyhedral tiling and optimal vectorization.",
      "**Discussion:** How formal verification unlocks optimizations that humans are too afraid (or too slow) to write by hand."
    ],
    code: {
      before: "// Hand-tuned C (Abridged)\nvoid matmul(float* A, float* B, float* C) {\n  for (int i=0; i<N; i+=4) {\n    __m128 a = _mm_load_ps(&A[i]);\n    // ... manual SIMD ...\n  }\n}",
      after: "// Salt (Out-of-the-box)\n@affine(tile: 64)\nfor i in 0..N {\n    C[i] += A[i] * B[i]; // Verified safe, auto-vectorized\n}",
      language: "salt"
    }
  }
];
