// Flashcards Data by Topic
const flashcardsDataByTopic = {
    bigO: [
        {id: 1, question: "What does O(1) represent?", answer: "Constant Time Complexity", description: "Operations that take the same amount of time regardless of input size.", formula: "$$T(n) = c$$", example: "Accessing array element by index: arr[5], Hash table lookup"},
        {id: 2, question: "What is O(log n) complexity?", answer: "Logarithmic Time", description: "Time grows logarithmically with input size. Typical of divide-and-conquer algorithms.", formula: "$$T(n) = \\log n$$", example: "Binary search in sorted array, balanced BST operations"},
        {id: 3, question: "What does O(n) represent?", answer: "Linear Time Complexity", description: "Time grows linearly with input size. Each element processed once.", formula: "$$T(n) = n$$", example: "Simple loop through array: for(i=0; i<n; i++), Linear search"},
        {id: 4, question: "What is O(n log n) complexity called?", answer: "Linearithmic Time", description: "Combines linear and logarithmic complexity. Common in efficient sorting.", formula: "$$T(n) = n \\cdot \\log n$$", example: "Merge Sort, Quick Sort (average case), Heap Sort"},
        {id: 5, question: "What does O(n²) represent?", answer: "Quadratic Time Complexity", description: "Time grows quadratically. Typically nested loops over the entire input.", formula: "$$T(n) = n^2$$", example: "Bubble Sort, Selection Sort, nested loop: for(i=0; i<n; i++) for(j=0; j<n; j++)"},
        {id: 6, question: "What is O(n³) complexity?", answer: "Cubic Time Complexity", description: "Time grows cubically. Three nested loops processing input.", formula: "$$T(n) = n^3$$", example: "Triple nested loop, matrix multiplication (naive), 3D traversal"},
        {id: 7, question: "What does O(2ⁿ) represent?", answer: "Exponential Time Complexity", description: "Time doubles with each increment of input size. Very slow for large inputs.", formula: "$$T(n) = 2^n$$", example: "Recursive fibonacci without memoization: fib(n) = fib(n-1) + fib(n-2)"},
        {id: 8, question: "What is O(n!) complexity?", answer: "Factorial Time Complexity", description: "Time grows factorially. One of the worst complexities possible.", formula: "$$T(n) = n!$$", example: "Generating all permutations of a set, brute force traveling salesman"},
        {id: 9, question: "What does O(√n) represent?", answer: "Square Root Time Complexity", description: "Time grows with the square root of input size.", formula: "$$T(n) = \\sqrt{n}$$", example: "Checking if number is prime (trial division up to √n)"},
        {id: 10, question: "How do you analyze O(n + m)?", answer: "Linear Composite Complexity", description: "Sum of two linear operations on different inputs. Used for sequential operations.", formula: "$$T(n, m) = n + m$$", example: "Traversing two separate arrays sequentially one after another"},
        {id: 11, question: "What does O(n × m) represent?", answer: "Quadratic Composite Complexity", description: "Operations on two different dimensional inputs with nested loops.", formula: "$$T(n, m) = n \\cdot m$$", example: "Nested loop through matrix (n rows, m columns)"},
        {id: 12, question: "What is O(log n + log m)?", answer: "Logarithmic Composite", description: "Sum of logarithmic operations on different sequences performed sequentially.", formula: "$$T(n, m) = \\log n + \\log m$$", example: "Binary search in two separate sorted arrays"},
    ],
    eea: [
        {id: 1, question: "What is the Extended Euclidean Algorithm?", answer: "EEA - Extended GCD Algorithm", description: "Extends the Euclidean algorithm to find integers x and y such that ax + by = gcd(a,b).", formula: "$$ax + by = \\gcd(a, b)$$", example: "For a=35, b=15: 35(-2) + 15(5) = 5"},
        {id: 2, question: "What are the inputs for EEA?", answer: "Two Integers", description: "Takes two positive integers as input to find their GCD and coefficients.", formula: "$$\\text{EEA}(a, b)$$", example: "EEA(48, 18) finds gcd and coefficients"},
        {id: 3, question: "What are the outputs of EEA?", answer: "GCD and Coefficients", description: "Returns gcd(a,b) and two integers x and y satisfying the Bézout identity.", formula: "$$(d, x, y) \\text{ where } d = \\gcd(a,b)$$", example: "Returns (gcd, x coefficient, y coefficient)"},
        {id: 4, question: "State the base case for EEA.", answer: "When b = 0", description: "EEA terminates when the second number becomes 0.", formula: "$$\\text{If } b = 0: \\gcd(a,b) = a, x = 1, y = 0$$", example: "EEA(5, 0) returns (5, 1, 0)"},
        {id: 5, question: "Describe the recursive step of EEA.", answer: "Recursive Relation", description: "Uses the relationship: gcd(a,b) = gcd(b, a mod b)", formula: "$$\\text{EEA}(a, b) = \\text{EEA}(b, a \\bmod b)$$", example: "EEA(48, 18) becomes EEA(18, 12)"},
        {id: 6, question: "How do you find gcd(48, 18)?", answer: "Step-by-step GCD", description: "Apply Euclidean algorithm: 48 = 18×2 + 12, 18 = 12×1 + 6, 12 = 6×2 + 0", formula: "$$\\gcd(48, 18) = 6$$", example: "Final non-zero remainder is the GCD"},
        {id: 7, question: "What is backward substitution?", answer: "Coefficient Calculation", description: "Working backwards through the divisions to find x and y coefficients.", formula: "$$x = x_1 - q \\cdot x_0, \\quad y = y_1 - q \\cdot y_0$$", example: "Extract coefficients from division steps"},
        {id: 8, question: "How is EEA used for modular inverse?", answer: "Finding Multiplicative Inverse", description: "EEA finds a⁻¹ mod m when gcd(a,m) = 1 using Bézout coefficients.", formula: "$$a \\cdot a^{-1} \\equiv 1 \\pmod{m}$$", example: "Find 3⁻¹ mod 7 using EEA(3,7)"},
        {id: 9, question: "Example: Find 1 = 35×(-2) + 15×5 coefficients.", answer: "Coefficients for 35 and 15", description: "Working backwards: 35×(-2) + 15×5 = 1 (gcd of 35 and 15)", formula: "$$x = -2, y = 5$$", example: "Verification: 35(-2) + 15(5) = -70 + 75 = 5"},
        {id: 10, question: "What is the time complexity of EEA?", answer: "Logarithmic Complexity", description: "EEA runs in O(log min(a,b)) iterations.", formula: "$$O(\\log \\min(a, b))$$", example: "Similar to Euclidean algorithm complexity"},
        {id: 11, question: "When do you use EEA vs regular Euclidean?", answer: "When Coefficients Needed", description: "Use EEA when you need the Bézout coefficients, not just the GCD.", formula: "$$\\text{EEA: } ax + by = \\gcd(a,b) \\text{ vs Euclidean: } \\gcd(a,b)$$", example: "Modular inverse requires coefficients"},
        {id: 12, question: "Why is EEA important in cryptography?", answer: "Cryptographic Applications", description: "Essential for RSA encryption, finding modular inverses, and solving linear congruences.", formula: "$$a \\cdot x \\equiv b \\pmod{m} \\text{ solution}$$", example: "Used in RSA key generation and decryption"},
    ],
    mmi: [
        {id: 1, question: "What is modular multiplicative inverse?", answer: "Modular Inverse Definition", description: "For integers a and m, the inverse a⁻¹ is a number such that a×a⁻¹ ≡ 1 (mod m).", formula: "$$a \\cdot a^{-1} \\equiv 1 \\pmod{m}$$", example: "3×5 ≡ 1 (mod 7), so 3⁻¹ ≡ 5 (mod 7)"},
        {id: 2, question: "What must be true of a and m for inverse to exist?", answer: "Coprimality Condition", description: "The modular inverse of a exists if and only if gcd(a, m) = 1.", formula: "$$\\gcd(a, m) = 1$$", example: "gcd(3, 7) = 1, so 3⁻¹ mod 7 exists"},
        {id: 3, question: "What notation is used for modular inverse?", answer: "Modular Inverse Notation", description: "The inverse of a modulo m is written as a⁻¹ mod m or a⁻¹ ≡ x (mod m).", formula: "$$a^{-1} \\pmod{m} \\text{ or } a^{-1} \\equiv x \\pmod{m}$$", example: "3⁻¹ ≡ 5 (mod 7)"},
        {id: 4, question: "Method 1: Extended Euclidean Algorithm approach?", answer: "Finding Inverse via EEA", description: "Find x,y where ax + my = 1 using EEA, then x is the inverse.", formula: "$$ax + my = 1 \\Rightarrow ax \\equiv 1 \\pmod{m}$$", example: "EEA(3,7) gives 3×5 + 7×(-2) = 1, so 3⁻¹ ≡ 5"},
        {id: 5, question: "Method 2: Fermat's Little Theorem approach?", answer: "Using Fermat's Little Theorem", description: "If m is prime and gcd(a,m)=1, then a⁻¹ ≡ a^(m-2) (mod m).", formula: "$$a^{-1} \\equiv a^{p-2} \\pmod{p}$$ (p is prime)", example: "3⁻¹ mod 7 = 3^5 mod 7 = 243 mod 7 = 5"},
        {id: 6, question: "Find 3⁻¹ mod 7 using Fermat.", answer: "Example: 3⁻¹ mod 7", description: "Apply a^(p-2): 3^(7-2) = 3^5 = 243 ≡ 5 (mod 7)", formula: "$$3^5 \\bmod 7 = 5$$", example: "Verify: 3×5 = 15 ≡ 1 (mod 7) ✓"},
        {id: 7, question: "Find 5⁻¹ mod 11 using EEA.", answer: "Example: 5⁻¹ mod 11", description: "Find 5x + 11y = 1; Result: 5×9 + 11×(-4) = 1, so x = 9", formula: "$$5 \\cdot 9 \\equiv 1 \\pmod{11}$$", example: "Verify: 5×9 = 45 = 44+1 ≡ 1 (mod 11) ✓"},
        {id: 8, question: "What properties does modular inverse have?", answer: "Properties of Inverse", description: "(a⁻¹)⁻¹ ≡ a (mod m) and (a×b)⁻¹ ≡ a⁻¹×b⁻¹ (mod m)", formula: "$$(a^{-1})^{-1} \\equiv a, \\ (ab)^{-1} \\equiv a^{-1}b^{-1}$$", example: "(3⁻¹)⁻¹ ≡ 3 (mod 7)"},
        {id: 9, question: "How do you verify the inverse is correct?", answer: "Verification Method", description: "Multiply a by its inverse and check if result ≡ 1 (mod m).", formula: "$$a \\cdot a^{-1} \\bmod m = 1$$", example: "3×5 mod 7 = 15 mod 7 = 1 ✓"},
        {id: 10, question: "What happens if gcd(a, m) ≠ 1?", answer: "No Inverse Exists", description: "If a and m are not coprime, then a has no multiplicative inverse modulo m.", formula: "$$\\gcd(a, m) \\neq 1 \\Rightarrow a^{-1} \\text{ doesn't exist}$$", example: "gcd(4, 6) = 2, so 4⁻¹ mod 6 doesn't exist"},
        {id: 11, question: "Where is modular inverse used?", answer: "Cryptography Applications", description: "Used in RSA encryption, solving linear congruences, and cryptographic protocols.", formula: "$$a \\cdot x \\equiv b \\pmod{m} \\Rightarrow x \\equiv b \\cdot a^{-1}$$", example: "Solving 3x ≡ 5 (mod 7): x ≡ 5×5 ≡ 25 ≡ 4"},
        {id: 12, question: "Solve 7x ≡ 3 (mod 11).", answer: "Linear Congruence Solution", description: "Find 7⁻¹ mod 11 = 8, then x ≡ 3×8 ≡ 24 ≡ 2 (mod 11)", formula: "$$x \\equiv 3 \\cdot 8 \\equiv 2 \\pmod{11}$$", example: "Verify: 7×2 = 14 ≡ 3 (mod 11) ✓"},
    ],
    bases: [
        {id: 1, question: "What is number base conversion?", answer: "Base Conversion Definition", description: "Converting numbers from one base (radix) to another, like decimal to binary.", formula: "$$N_{\\text{base a}} = N_{\\text{base b}}$$", example: "25₁₀ = 11001₂"},
        {id: 2, question: "How to convert decimal to binary?", answer: "Decimal to Binary", description: "Repeatedly divide by 2 and collect remainders from bottom to top.", formula: "$$N = \\sum_{i=0}^{n} b_i \\cdot 2^i, \\ b_i \\in \\{0,1\\}$$", example: "25 ÷ 2 = 12R1, 12 ÷ 2 = 6R0, ... = 11001"},
        {id: 3, question: "How to convert binary to decimal?", answer: "Binary to Decimal", description: "Multiply each bit by its power of 2 and sum all values.", formula: "$$N = \\sum_{i=0}^{n} b_i \\cdot 2^i$$", example: "11001₂ = 1×16 + 1×8 + 0×4 + 0×2 + 1×1 = 25"},
        {id: 4, question: "How to convert decimal to hexadecimal?", answer: "Decimal to Hexadecimal", description: "Repeatedly divide by 16 and collect remainders (10-15 are A-F).", formula: "$$N = \\sum_{i=0}^{n} d_i \\cdot 16^i, \\ d_i \\in \\{0,...,9,A,...,F\\}$$", example: "255 ÷ 16 = 15R15 → FF₁₆"},
        {id: 5, question: "How to convert hexadecimal to decimal?", answer: "Hexadecimal to Decimal", description: "Multiply each hex digit by its power of 16 and sum (A=10, B=11, etc).", formula: "$$N = \\sum_{i=0}^{n} d_i \\cdot 16^i$$", example: "FF₁₆ = 15×16 + 15×1 = 255"},
        {id: 6, question: "How to convert binary to hexadecimal?", answer: "Binary to Hex Shortcut", description: "Group binary digits in sets of 4 from right, convert each to one hex digit.", formula: "$$4 \\text{ binary digits} = 1 \\text{ hex digit}$$", example: "11001₂ = 0001 1001₂ = 1×16 + 9 = 19₁₆"},
        {id: 7, question: "How to convert hexadecimal to binary?", answer: "Hex to Binary Shortcut", description: "Convert each hex digit to 4 binary digits.", formula: "$$1 \\text{ hex digit} = 4 \\text{ binary digits}$$", example: "FF₁₆ = 1111 1111₂"},
        {id: 8, question: "General formula for base conversion?", answer: "General Base Formula", description: "To convert N from base a to base b: convert base a → decimal, then decimal → base b.", formula: "$$N_b = \\sum_{i=0}^{n} d_i \\cdot b^i$$", example: "Convert 101₂ to base 5: 101₂ = 5₁₀ = 10₅"},
        {id: 9, question: "Convert 25 to binary.", answer: "Example: 25₁₀ to Binary", description: "25 = 16 + 8 + 1 = 2⁴ + 2³ + 2⁰ = 11001₂", formula: "$$25 = 2^4 + 2^3 + 2^0$$", example: "25₁₀ = 11001₂"},
        {id: 10, question: "Convert 10101₂ to decimal.", answer: "Example: 10101₂ to Decimal", description: "10101₂ = 1×16 + 0×8 + 1×4 + 0×2 + 1×1 = 21₁₀", formula: "$$1 \\cdot 2^4 + 1 \\cdot 2^2 + 1 = 21$$", example: "10101₂ = 21₁₀"},
        {id: 11, question: "Convert 255 to hexadecimal.", answer: "Example: 255₁₀ to Hex", description: "255 = 15×16 + 15 = F×16 + F = FF₁₆", formula: "$$255 = 15 \\cdot 16^1 + 15 \\cdot 16^0$$", example: "255₁₀ = FF₁₆"},
        {id: 12, question: "What are the common bases used?", answer: "Common Number Bases", description: "Binary (2), Octal (8), Decimal (10), Hexadecimal (16) used in computing.", formula: "$$\\text{Binary: 0,1 | Octal: 0-7 | Hex: 0-9,A-F}$$", example: "Binary for processors, Hex for memory addresses"},
    ],
    squaring: [
        {id: 1, question: "What is successive squaring?", answer: "Successive Squaring Definition", description: "Method to compute a^n mod m efficiently by repeatedly squaring and multiplying.", formula: "$$a^n \\equiv a^{\\sum b_i 2^i} \\pmod{m}$$", example: "Computing 2^13 mod 11 efficiently"},
        {id: 2, question: "Alternative name for successive squaring?", answer: "Binary Exponentiation", description: "Also called binary exponentiation, exponentiation by squaring, or fast exponentiation.", formula: "$$\\text{O}(\\log n) \\text{ algorithm}$$", example: "Computes modular exponentiation in log n multiplications"},
        {id: 3, question: "Why use successive squaring over naive?", answer: "Efficiency Advantage", description: "Naive: a^1000 requires 999 multiplications; Successive squaring only ~10 multiplications.", formula: "$$\\text{Naive: } O(n), \\text{ Successive: } O(\\log n)$$", example: "2^1000 mod 11 computed in ~10 steps, not 1000"},
        {id: 4, question: "What is the basic principle?", answer: "Binary Representation Principle", description: "Write exponent n in binary, then use: a^n = ∏(a^(2^i)) where bit i = 1", formula: "$$a^n = a^{\\sum_{i} b_i 2^i} = \\prod_{b_i=1} a^{2^i}$$", example: "2^13 = 2^(8+4+1) = 2^8 × 2^4 × 2^1"},
        {id: 5, question: "State the algorithm for modular exponentiation.", answer: "Successive Squaring Algorithm", description: "1) Convert n to binary, 2) Square and multiply: for each bit, square result, if bit=1 multiply by a", formula: "$$\\text{result} = a^n \\bmod m$$", example: "Build up powers: a^2, a^4, a^8, ... (mod m)"},
        {id: 6, question: "Compute 2^7 mod 11 step by step.", answer: "Example: 2^7 mod 11", description: "7 = 111₂: Compute 2^1, 2^2, 2^4 mod 11; multiply: 2×4×8 = 64 ≡ 64 mod 11 = 9", formula: "$$2^7 = 2^4 \\cdot 2^2 \\cdot 2^1 \\pmod{11}$$", example: "8 × 4 × 2 = 64 ≡ 9 (mod 11)"},
        {id: 7, question: "Compute 3^100 mod 7.", answer: "Example: 3^100 mod 7", description: "100 = 1100100₂ = 64+32+4; Compute powers: 3^1, 3^2, 3^4, 3^32, 3^64, multiply those needed", formula: "$$3^{100} \\equiv 3^{64} \\cdot 3^{32} \\cdot 3^4 \\pmod{7}$$", example: "Result: 3^100 ≡ 1 (mod 7) by Fermat"},
        {id: 8, question: "Why is algorithm efficient for cryptography?", answer: "Cryptographic Efficiency", description: "Enables fast computation of a^d mod n needed for RSA decryption with large exponents.", formula: "$$\\text{O}(\\log d) \\text{ multiplications for exponent d}$$", example: "RSA uses exponents ~2048 bits: ~2048 multiplications"},
        {id: 9, question: "Complexity analysis of successive squaring?", answer: "Time Complexity", description: "O(log n) multiplications and O(log n) squarings for computing a^n mod m.", formula: "$$\\text{Multiplications: } O(\\log n)$$", example: "Computing 2^1000000 requires ~20 steps"},
        {id: 10, question: "Connection to binary representation?", answer: "Binary Exponentiation", description: "Exponent binary representation determines which powers of 2 to multiply together.", formula: "$$\\text{If } n = (b_k...b_1b_0)_2, \\text{ multiply } a^{2^i} \\text{ for each } b_i = 1$$", example: "13 = 1101₂, so multiply a^8, a^4, a^1"},
        {id: 11, question: "Relationship to Fermat's Little Theorem?", answer: "Fermat Connection", description: "Fermat's Little Theorem: a^(p-1) ≡ 1 (mod p); Used with successive squaring for order finding.", formula: "$$a^{p-1} \\equiv 1 \\pmod{p}$$", example: "3^6 ≡ 1 (mod 7), reduces 3^100 to 3^4"},
        {id: 12, question: "What cryptographic protocols use it?", answer: "Cryptographic Applications", description: "Used in RSA encryption/decryption, Diffie-Hellman key exchange, digital signatures.", formula: "$$C = M^e \\bmod n, \\ M = C^d \\bmod n$$", example: "RSA: Compute message^privateKey mod n efficiently"},
    ],
};

// Exercises Data by Topic
const exercisesDataByTopic = {
    bigO: [
        {id: 1, question: "Find the complexity: $$\\text{for}(i=0; i<n; i++)$$", solution: "$$O(n)$$", hint: "Single loop through n elements"},
        {id: 2, question: "Find the complexity: $$\\text{for}(i=0; i<n; i++) \\text{ for}(j=0; j<n; j++)$$", solution: "$$O(n^2)$$", hint: "Two nested loops, each running n times"},
        {id: 3, question: "Perform binary search on a sorted array. Max comparisons for $$n=1000$$?", solution: "$$\\log_2(1000) \\approx 10$$", hint: "Binary search has $$O(\\log n)$$ complexity"},
        {id: 4, question: "Simplify: $$5n^3 + 3n^2 + 2n + 1$$", solution: "$$O(n^3)$$", hint: "Drop lower-order terms and constants"},
        {id: 5, question: "Order from fastest to slowest: $$O(2^n), O(n \\log n), O(n^2), O(n), O(1)$$", solution: "$$O(1) < O(n) < O(n \\log n) < O(n^2) < O(2^n)$$", hint: "Constant < Linear < Linearithmic < Quadratic < Exponential"},
    ],
    eea: [
        {id: 1, question: "Find $$x, y$$ where $$35x + 10y = \\gcd(35, 10)$$", solution: "$$\\gcd(35,10) = 5; \\ x = 1, \\ y = -3$$", hint: "Verify: $$35(1) + 10(-3) = 5$$"},
        {id: 2, question: "Find coefficients for $$21x + 14y = \\gcd(21, 14)$$", solution: "$$\\gcd(21,14) = 7; \\ x = 1, \\ y = -1$$", hint: "Verify: $$21(1) + 14(-1) = 7$$"},
        {id: 3, question: "Solve using EEA: $$17x + 5y = \\gcd(17, 5)$$", solution: "$$\\gcd(17,5) = 1; \\ x = 3, \\ y = -10$$", hint: "Verify: $$17(3) + 5(-10) = 1$$"},
        {id: 4, question: "Find $$48x + 18y = \\gcd(48, 18)$$", solution: "$$\\gcd(48,18) = 6; \\ x = -1, \\ y = 3$$", hint: "Verify: $$48(-1) + 18(3) = 6$$"},
        {id: 5, question: "Solve: $$100x + 35y = \\gcd(100, 35)$$", solution: "$$\\gcd(100,35) = 5; \\ x = 3, \\ y = -8$$", hint: "Verify: $$100(3) + 35(-8) = 20$$"},
    ],
    mmi: [
        {id: 1, question: "Find $$3^{-1} \\pmod{11}$$", solution: "$$3^{-1} \\equiv 4 \\pmod{11}$$", hint: "Verify: $$3 \\times 4 = 12 \\equiv 1 \\pmod{11}$$"},
        {id: 2, question: "Find the multiplicative inverse: $$7^{-1} \\pmod{13}$$", solution: "$$7^{-1} \\equiv 2 \\pmod{13}$$", hint: "Verify: $$7 \\times 2 = 14 \\equiv 1 \\pmod{13}$$"},
        {id: 3, question: "Does $$6^{-1} \\pmod{9}$$ exist? Explain.", solution: "No, because $$\\gcd(6, 9) = 3 \\neq 1$$", hint: "Inverse exists only if $$\\gcd(a,m) = 1$$"},
        {id: 4, question: "Find $$5^{-1} \\pmod{12}$$", solution: "$$5^{-1} \\equiv 5 \\pmod{12}$$", hint: "Verify: $$5 \\times 5 = 25 \\equiv 1 \\pmod{12}$$"},
        {id: 5, question: "Find $$9^{-1} \\pmod{26}$$", solution: "$$9^{-1} \\equiv 3 \\pmod{26}$$", hint: "Verify: $$9 \\times 3 = 27 \\equiv 1 \\pmod{26}$$"},
    ],
    bases: [
        {id: 1, question: "Convert $$45_{10}$$ to binary", solution: "$$45_{10} = 101101_2$$", hint: "$$45 = 32 + 8 + 4 + 1 = 2^5 + 2^3 + 2^2 + 2^0$$"},
        {id: 2, question: "Convert $$1A3_{16}$$ (hex) to decimal", solution: "$$1A3_{16} = 419_{10}$$", hint: "$$1 \\times 16^2 + 10 \\times 16^1 + 3 \\times 16^0 = 256 + 160 + 3$$"},
        {id: 3, question: "Convert $$10110_2$$ (binary) to decimal", solution: "$$10110_2 = 22_{10}$$", hint: "$$1 \\times 2^4 + 0 \\times 2^3 + 1 \\times 2^2 + 1 \\times 2^1 + 0$$"},
        {id: 4, question: "Convert $$31_{10}$$ to base 5", solution: "$$31_{10} = 111_5$$", hint: "$$1 \\times 5^2 + 1 \\times 5^1 + 1 \\times 5^0 = 25 + 5 + 1$$"},
        {id: 5, question: "Convert $$255_{10}$$ to hexadecimal", solution: "$$255_{10} = \\text{FF}_{16}$$", hint: "$$255 = 15 \\times 16 + 15$$, and $$15 = \\text{F}$$ in hex"},
    ],
    squaring: [
        {id: 1, question: "Calculate $$2^{10} \\bmod 7$$ using successive squaring", solution: "$$2^{10} \\equiv 2 \\pmod{7}$$", hint: "$$10 = 8 + 2$$; compute $$2^2, 2^4, 2^8 \\bmod 7$$"},
        {id: 2, question: "Find $$3^7 \\bmod 5$$ using successive squaring", solution: "$$3^7 \\equiv 2 \\pmod{5}$$", hint: "$$7 = 4 + 2 + 1$$; compute powers $$3^i \\bmod 5$$"},
        {id: 3, question: "Calculate $$5^9 \\bmod 11$$ using successive squaring", solution: "$$5^9 \\equiv 1 \\pmod{11}$$", hint: "$$9 = 8 + 1$$; compute $$5^1, 5^2, 5^4, 5^8 \\bmod 11$$"},
        {id: 4, question: "Compute $$2^{15} \\bmod 13$$ using successive squaring", solution: "$$2^{15} \\equiv 9 \\pmod{13}$$", hint: "$$15 = 8 + 4 + 2 + 1$$; compute powers $$2^i \\bmod 13$$"},
        {id: 5, question: "Find $$7^4 \\bmod 9$$ using successive squaring", solution: "$$7^4 \\equiv 4 \\pmod{9}$$", hint: "$$7^2 \\equiv 4 \\pmod{9}$$, so $$7^4 = (7^2)^2 \\equiv 4^2 \\equiv 16 \\equiv 7$$"},
    ],
};

// Topic Overview Data
const topicOverviews = {
    bigO: {
        title: "Big O Notation",
        icon: "functions",
        text: "Big O Notation is a mathematical framework for analyzing algorithm efficiency by describing how runtime or space requirements grow with input size. From $$O(1)$$ constant time operations like array lookups to $$O(n!)$$ factorial complexities like permutation generation, understanding these classifications is essential. Common complexities progress as: $$O(1) < O(\\log n) < O(n) < O(n \\log n) < O(n^2) < O(n^3) < O(2^n) < O(n!)$$. Mastering Big O guides optimization decisions and separates performant solutions from slow ones."
    },
    eea: {
        title: "Extended Euclidean Algorithm",
        icon: "calculate",
        text: "The Extended Euclidean Algorithm finds the greatest common divisor while computing Bézout coefficients. For integers $$a$$ and $$b$$, it solves: $$ax + by = \\gcd(a,b)$$. These coefficients enable solutions to linear Diophantine equations. Beyond pure mathematics, EEA is foundational for cryptography, particularly in computing modular multiplicative inverses needed for RSA encryption. Its recursive elegance with $$O(\\log \\min(a,b))$$ efficiency and deep connection to number theory make it indispensable in cryptographic applications."
    },
    mmi: {
        title: "Modular Multiplicative Inverse",
        icon: "key",
        text: "The Modular Multiplicative Inverse of $$a$$ modulo $$m$$ is a number $$a^{-1}$$ satisfying: $$a \\cdot a^{-1} \\equiv 1 \\pmod{m}$$. This inverse exists if and only if $$\\gcd(a, m) = 1$$ (coprimality). Crucial for solving linear congruences of the form $$ax \\equiv b \\pmod{m}$$, it forms the backbone of RSA cryptography's encryption/decryption: $$C = M^e \\bmod n$$ and $$M = C^d \\bmod n$$. Whether computed via Extended Euclidean Algorithm or Fermat's Little Theorem $$a^{-1} \\equiv a^{p-2} \\pmod{p}$$, modular inverses enable secure digital communication."
    },
    bases: {
        title: "Number Bases & Conversion",
        icon: "settings_input_component",
        text: "Number bases represent values using different radixes: binary (base 2), octal (base 8), decimal (base 10), and hexadecimal (base 16). The fundamental conversion formula is: $$N = \\sum_{i=0}^{n} d_i \\cdot b^i$$ where $$b$$ is the base and $$d_i$$ are digits. Converting decimal to base $$b$$ uses repeated division: divide by $$b$$ and collect remainders. Binary-to-hex conversion uses: $$4 \\text{ binary digits} = 1 \\text{ hex digit}$$. Mastering base conversion is essential for low-level programming, memory addressing, and understanding data representation."
    },
    squaring: {
        title: "Successive Squaring (Binary Exponentiation)",
        icon: "power",
        text: "Successive Squaring computes $$a^n \\bmod m$$ in $$O(\\log n)$$ time instead of naive $$O(n)$$ multiplication. The algorithm converts exponent $$n$$ to binary and uses: $$a^n = a^{\\sum b_i 2^i} = \\prod_{b_i=1} a^{2^i}$$. This elegant technique enables computing $$a^{1000000} \\bmod m$$ in ~20 operations. Essential for RSA cryptography, it securely computes: $$C = M^e \\bmod n$$ for encryption. Binary exponentiation demonstrates how mathematical insight transforms computational complexity from impractical to lightning-fast."
    },
    bigoAnalysis: {
        title: "Big O Analysis Reference",
        icon: "trending_up",
        text: "This comprehensive reference catalogs common algorithms and their complexities. The complexity hierarchy is: $$O(1) < O(\\log n) < O(n) < O(n \\log n) < O(n^2) < O(n^3) < O(2^n) < O(n!)$$. Key algorithms: binary search $$O(\\log n)$$, merge sort $$O(n \\log n)$$, bubble sort $$O(n^2)$$, matrix multiplication $$O(n^3)$$, and recursive Fibonacci $$O(2^n)$$. Use this reference when analyzing code, comparing algorithms, or predicting how code scales. Understanding these patterns helps make informed architecture and optimization decisions."
    }
};

// Current active topic
let currentTopic = 'bigO';

// Storage Management
class StorageManager {
    constructor() {
        this.storageKey = "flashcardsData";
        this.cookieNameBase = "flashcards";
        this.initStorage();
    }

    initStorage() {
        const stored = this.getFromStorage();
        if (!stored) {
            const initialData = {
                score: 0,
                scored: {}
            };
            Object.keys(flashcardsDataByTopic).forEach(topic => {
                initialData[topic] = {
                    viewed: [],
                    lastUpdated: new Date().toISOString()
                };
                initialData.scored[topic] = [];
            });
            this.saveToStorage(initialData);
        } else if (!stored.score || !stored.scored) {
            // Add score field to existing storage
            stored.score = stored.score || 0;
            stored.scored = stored.scored || {};
            Object.keys(flashcardsDataByTopic).forEach(topic => {
                stored.scored[topic] = [];
            });
            this.saveToStorage(stored);
        }
    }

    getFromStorage() {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : null;
    }

    saveToStorage(data) {
        localStorage.setItem(this.storageKey, JSON.stringify(data));
        this.setCookie();
    }

    addViewed(cardId, topic = currentTopic) {
        const data = this.getFromStorage();
        if (!data[topic]) data[topic] = { viewed: [], lastUpdated: new Date().toISOString() };
        if (!data[topic].viewed.includes(cardId)) {
            data[topic].viewed.push(cardId);
            data[topic].lastUpdated = new Date().toISOString();
            this.saveToStorage(data);
        }
    }

    isViewed(cardId, topic = currentTopic) {
        const data = this.getFromStorage();
        return data[topic] && data[topic].viewed.includes(cardId);
    }

    getViewedCount(topic = currentTopic) {
        const data = this.getFromStorage();
        return data[topic] ? data[topic].viewed.length : 0;
    }

    getScore() {
        const data = this.getFromStorage();
        return data && data.score !== undefined ? data.score : 0;
    }

    isCardScored(cardId, topic = currentTopic) {
        const data = this.getFromStorage();
        if (!data || !data.scored) return false;
        return data.scored[topic] && data.scored[topic].includes(cardId);
    }

    markCardScored(cardId, topic = currentTopic) {
        const data = this.getFromStorage();
        if (!data) return false;
        if (!data.scored) data.scored = {};
        if (!data.scored[topic]) data.scored[topic] = [];
        if (!data.scored[topic].includes(cardId)) {
            data.scored[topic].push(cardId);
            this.saveToStorage(data);
            return true;
        }
        return false;
    }

    updateScore(delta) {
        const data = this.getFromStorage();
        if (!data) return;
        data.score = (data.score || 0) + delta;
        this.saveToStorage(data);
        updateScoreDisplay();
    }

    resetProgress() {
        const initialData = {
            score: 0,
            scored: {}
        };
        Object.keys(flashcardsDataByTopic).forEach(topic => {
            initialData[topic] = {
                viewed: [],
                lastUpdated: new Date().toISOString()
            };
            initialData.scored[topic] = [];
        });
        this.saveToStorage(initialData);
        updateScoreDisplay();
        this.deleteCookie();
    }

    setCookie() {
        const data = this.getFromStorage();
        const cookieValue = JSON.stringify(data);
        document.cookie = `${this.cookieNameBase}=${encodeURIComponent(cookieValue)}; path=/; max-age=${30*24*60*60}`;
    }

    deleteCookie() {
        document.cookie = `${this.cookieNameBase}=; path=/; max-age=0`;
    }
}

const storageManager = new StorageManager();
let currentCardIndex = 0;  // Track which card is currently displayed

// Toggle Sidebar on Mobile
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (sidebar) {
        sidebar.classList.toggle('active');
    }
    if (overlay) {
        overlay.classList.toggle('active');
    }
}

// Close sidebar when a link is clicked
document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebarOverlay');
            if (window.innerWidth <= 768) {
                if (sidebar) sidebar.classList.remove('active');
                if (overlay) overlay.classList.remove('active');
            }
        });
    });
});

// Render Topic Overview
function renderTopicOverview(topic) {
    const overview = topicOverviews[topic];
    if (!overview) return;
    
    const overviewPanel = document.getElementById('topicOverview');
    const overviewIcon = document.getElementById('overviewIcon');
    const overviewTitle = document.getElementById('overviewTitle');
    const overviewText = document.getElementById('overviewText');
    
    if (overviewIcon) {
        overviewIcon.innerHTML = `<span class="material-icons">${overview.icon}</span>`;
    }
    if (overviewTitle) {
        overviewTitle.textContent = overview.title;
    }
    if (overviewText) {
        overviewText.innerHTML = overview.text;
    }
    
    if (overviewPanel) {
        // Hide for Big O Analysis as it has an iframe
        if (topic === 'bigoAnalysis') {
            overviewPanel.style.display = 'none';
        } else {
            overviewPanel.style.display = 'block';
        }
    }
    
    // Render MathJax for formulas in overview
    if (window.MathJax) {
        setTimeout(() => {
            MathJax.typesetPromise().catch(err => console.log('MathJax error:', err));
        }, 10);
    }
}

// Switch topic
function switchTopic(topic) {
    currentTopic = topic;
    currentCardIndex = 0;  // Reset to first card when switching topics
    document.querySelectorAll('.sidebar-link').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.sidebar-link[data-topic="${topic}"]`).classList.add('active');
    
    // Render topic overview
    renderTopicOverview(topic);
    
    // Get sections
    const flashcardsContainer = document.getElementById('flashcardsContainer');
    const controls = document.querySelector('.controls');
    const exercisesSection = document.getElementById('exercisesSection');
    const refSection = document.getElementById('referenceSection');
    const eeaExampleSection = document.getElementById('eeaExampleSection');
    const bigoAnalysisSection = document.getElementById('bigoAnalysisSection');
    const infoBar = document.querySelector('.info-bar');
    const progressContainer = document.querySelector('.progress-container');
    
    // Reset all inline styles to let CSS handle display
    if (flashcardsContainer) flashcardsContainer.style.display = '';
    if (controls) controls.style.display = '';
    if (exercisesSection) exercisesSection.style.display = '';
    if (refSection) refSection.style.display = 'none';
    if (eeaExampleSection) eeaExampleSection.style.display = 'none';
    if (bigoAnalysisSection) bigoAnalysisSection.style.display = 'none';
    if (infoBar) infoBar.style.display = '';
    if (progressContainer) progressContainer.style.display = '';
    
    // Handle Big O Analysis tab
    if (topic === 'bigoAnalysis') {
        if (flashcardsContainer) flashcardsContainer.style.display = 'none';
        if (controls) controls.style.display = 'none';
        if (exercisesSection) exercisesSection.style.display = 'none';
        if (infoBar) infoBar.style.display = 'none';
        if (progressContainer) progressContainer.style.display = 'none';
        if (bigoAnalysisSection) bigoAnalysisSection.style.display = 'block';
        return;
    }
    
    // Show reference section for Big O only
    if (topic === 'bigO') {
        if (refSection) refSection.style.display = 'block';
        // Render table formulas when showing
        if (window.MathJax) {
            setTimeout(() => {
                MathJax.typesetPromise().catch(err => console.log('MathJax error:', err));
            }, 100);
        }
    }
    
    // Show EEA example panel for EEA topic only
    if (topic === 'eea') {
        if (eeaExampleSection) eeaExampleSection.style.display = 'block';
        if (window.MathJax) {
            setTimeout(() => {
                MathJax.typesetPromise().catch(err => console.log('MathJax error:', err));
            }, 100);
        }
    }
    
    renderFlashcards();
    renderExercises();
    updateProgress();
}

// Render Flashcards
function renderFlashcards() {
    const container = document.getElementById('flashcardsContainer');
    const flashcards = flashcardsDataByTopic[currentTopic];
    
    // If no flashcards for this topic, return early
    if (!flashcards || !Array.isArray(flashcards)) {
        container.innerHTML = '';
        return;
    }
    
    container.innerHTML = '';

    flashcards.forEach((card, index) => {
        const isViewed = storageManager.isViewed(card.id);
        const cardElement = createFlashcardElement(card, index, isViewed);
        // Mark the first card as active
        if (index === currentCardIndex) {
            cardElement.classList.add('active');
        }
        container.appendChild(cardElement);
    });

    if (window.MathJax) {
        MathJax.typesetPromise().catch(err => console.log('MathJax error:', err));
    }

    updateProgress();
    updateButtonStates();
}

function createFlashcardElement(card, index, isViewed) {
    const div = document.createElement('div');
    div.className = `flashcard ${isViewed ? 'viewed' : ''}`;
    div.style.setProperty('--index', index);
    div.onclick = (e) => {
        if (!e.target.classList.contains('score-btn')) {
            toggleFlip(e.currentTarget, card.id);
        }
    };

    div.innerHTML = `
        <div class="flashcard-inner">
            <div class="flashcard-front">
                <div class="question-label">Question</div>
                <h2>${escapeHtml(card.question)}</h2>
                <div class="click-hint">Click to reveal answer</div>
            </div>
            <div class="flashcard-back">
                <div class="answer-label">Answer</div>
                <h3>${escapeHtml(card.answer)}</h3>
                <div class="description">${escapeHtml(card.description)}</div>
                <div class="formula">${card.formula}</div>
                <div class="example"><strong>Example:</strong> ${escapeHtml(card.example)}</div>
                <div class="score-buttons">
                    <button class="score-btn easy-btn" onclick="handleScoreClick(event, ${card.id}, 1)">Easy</button>
                    <button class="score-btn hard-btn" onclick="handleScoreClick(event, ${card.id}, -1)">Hard</button>
                </div>
            </div>
        </div>
    `;

    // Set disabled state after element is created
    if (storageManager.isCardScored(card.id)) {
        const buttons = div.querySelectorAll('.score-btn');
        buttons.forEach(btn => {
            btn.disabled = true;
            btn.style.opacity = '0.5';
            btn.style.cursor = 'not-allowed';
        });
    }

    return div;
}

function toggleFlip(cardElement, cardId) {
    cardElement.classList.toggle('flipped');
    
    if (cardElement.classList.contains('flipped')) {
        storageManager.addViewed(cardId);
        if (!cardElement.classList.contains('viewed')) {
            cardElement.classList.add('viewed');
        }
        updateProgress();
    }
}

function handleScoreClick(event, cardId, delta) {
    event.stopPropagation();
    
    // Check if card has already been scored
    if (storageManager.isCardScored(cardId)) {
        // Already scored, prevent duplicate
        return;
    }
    
    // Mark card as scored and update score
    storageManager.markCardScored(cardId);
    storageManager.updateScore(delta);
    
    // Disable both buttons for this card
    const card = event.target.closest('.flashcard');
    if (card) {
        const buttons = card.querySelectorAll('.score-btn');
        buttons.forEach(btn => {
            btn.disabled = true;
            btn.style.opacity = '0.5';
            btn.style.cursor = 'not-allowed';
        });
    }
}

function updateScoreDisplay() {
    const score = storageManager.getScore();
    const scoreElement = document.getElementById('scoreValue');
    if (scoreElement) {
        scoreElement.textContent = score;
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function updateProgress() {
    const flashcards = flashcardsDataByTopic[currentTopic];
    const viewedCount = storageManager.getViewedCount();
    const totalCards = flashcards.length;
    const percentage = (viewedCount / totalCards) * 100;

    document.getElementById('viewedCount').textContent = viewedCount;
    document.getElementById('totalCards').textContent = totalCards;
    document.getElementById('totalCardsNav').textContent = totalCards;
    document.getElementById('currentCard').textContent = currentCardIndex + 1;  // Show 1-based index
    document.getElementById('progressBar').style.width = percentage + '%';

    const remaining = totalCards - viewedCount;
    if (remaining > 0) {
        document.getElementById('infoText').textContent = `${remaining} card${remaining !== 1 ? 's' : ''} remaining • ${Math.round(percentage)}% progress`;
    } else {
        document.getElementById('infoText').textContent = '🎉 All cards reviewed for this topic!';
    }
}

function nextCard() {
    const flashcards = flashcardsDataByTopic[currentTopic];
    if (currentCardIndex < flashcards.length - 1) {
        // Remove active class from current card
        document.querySelector('.flashcard.active')?.classList.remove('active');
        // Move to next card
        currentCardIndex++;
        // Add active class to new card
        const allCards = document.querySelectorAll('.flashcard');
        allCards[currentCardIndex].classList.add('active');
        // Unflip the new card
        allCards[currentCardIndex].classList.remove('flipped');
        updateProgress();
        updateButtonStates();
    }
}

function previousCard() {
    if (currentCardIndex > 0) {
        // Remove active class from current card
        document.querySelector('.flashcard.active')?.classList.remove('active');
        // Move to previous card
        currentCardIndex--;
        // Add active class to new card
        const allCards = document.querySelectorAll('.flashcard');
        allCards[currentCardIndex].classList.add('active');
        // Unflip the new card
        allCards[currentCardIndex].classList.remove('flipped');
        updateProgress();
        updateButtonStates();
    }
}

function updateButtonStates() {
    const flashcards = flashcardsDataByTopic[currentTopic];
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (prevBtn) {
        prevBtn.disabled = currentCardIndex === 0;
        prevBtn.style.opacity = currentCardIndex === 0 ? '0.5' : '1';
        prevBtn.style.cursor = currentCardIndex === 0 ? 'not-allowed' : 'pointer';
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentCardIndex === flashcards.length - 1;
        nextBtn.style.opacity = currentCardIndex === flashcards.length - 1 ? '0.5' : '1';
        nextBtn.style.cursor = currentCardIndex === flashcards.length - 1 ? 'not-allowed' : 'pointer';
    }
}

function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        storageManager.resetProgress();
        currentCardIndex = 0;  // Reset to first card
        document.querySelectorAll('.flashcard').forEach(card => {
            card.classList.remove('flipped', 'viewed', 'active');
            // Re-enable score buttons
            card.querySelectorAll('.score-btn').forEach(btn => {
                btn.disabled = false;
                btn.style.opacity = '1';
                btn.style.cursor = 'pointer';
            });
        });
        // Mark first card as active
        const firstCard = document.querySelector('.flashcard');
        if (firstCard) {
            firstCard.classList.add('active');
        }
        updateProgress();
    }
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        const flashcards = Array.from(document.querySelectorAll('.flashcard'));
        const first = flashcards.find(card => !card.classList.contains('flipped'));
        if (first) {
            first.classList.add('flipped');
            const cardTitle = first.querySelector('.flashcard-front h2').textContent;
            const card = flashcardsDataByTopic[currentTopic].find(c => c.question === cardTitle);
            if (card) {
                storageManager.addViewed(card.id);
                if (!first.classList.contains('viewed')) {
                    first.classList.add('viewed');
                }
                updateProgress();
            }
        }
    } else if (e.code === 'ArrowRight') {
        nextCard();
    } else if (e.code === 'ArrowLeft') {
        previousCard();
    }
});

// Render Exercises
function renderExercises() {
    const container = document.getElementById('exercisesContainer');
    const exercises = exercisesDataByTopic[currentTopic];
    
    // If no exercises for this topic, return early
    if (!exercises || !Array.isArray(exercises)) {
        container.innerHTML = '';
        return;
    }
    
    container.innerHTML = '';

    exercises.forEach((exercise) => {
        const exerciseElement = createExerciseElement(exercise);
        container.appendChild(exerciseElement);
    });

    if (window.MathJax) {
        MathJax.typesetPromise().catch(err => console.log('MathJax error:', err));
    }
}

function createExerciseElement(exercise) {
    const div = document.createElement('div');
    div.className = 'exercise-item';
    
    // Create HTML structure without dynamic content first
    div.innerHTML = `
        <div class="exercise-header" onclick="toggleExerciseExpand(this.parentElement)">
            <div style="display: flex; align-items: center; flex: 1;">
                <div class="exercise-number-badge"></div>
                <div class="exercise-question"></div>
            </div>
            <div class="exercise-toggle">▼</div>
        </div>
        <div class="exercise-content">
            <div class="exercise-body">
                <div class="exercise-solution">
                    <div class="exercise-solution-label">Solution</div>
                    <div class="exercise-solution-text"></div>
                </div>
                <div class="exercise-hint"></div>
            </div>
        </div>
    `;

    // Set content using textContent to preserve special characters and LaTeX
    div.querySelector('.exercise-number-badge').textContent = exercise.id;
    div.querySelector('.exercise-question').textContent = exercise.question;
    div.querySelector('.exercise-solution-text').textContent = exercise.solution;
    div.querySelector('.exercise-hint').textContent = exercise.hint;

    return div;
}

function toggleExerciseExpand(exerciseElement) {
    exerciseElement.classList.toggle('expanded');
    
    // Re-render MathJax when expanding to ensure formulas render
    if (exerciseElement.classList.contains('expanded') && window.MathJax) {
        setTimeout(() => {
            MathJax.typesetPromise().catch(err => console.log('MathJax error:', err));
        }, 10);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderTopicOverview(currentTopic);
    renderFlashcards();
    renderExercises();
    updateScoreDisplay();
    
    // Show reference section for Big O (default topic)
    const refSection = document.getElementById('referenceSection');
    if (refSection && currentTopic === 'bigO') {
        refSection.style.display = 'block';
    }
    
    // Render MathJax for table formulas
    if (window.MathJax) {
        MathJax.typesetPromise().catch(err => console.log('MathJax error:', err));
    }
    
    console.log('Progress Cookie:', storageManager.getCookie ? storageManager.getCookie() : 'N/A');
    console.log('Local Storage:', storageManager.getFromStorage());
});

setInterval(() => {
    storageManager.setCookie();
}, 5000);
