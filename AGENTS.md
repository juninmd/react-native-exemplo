# AGENTS.md - Guidelines for AI Coding Agents

These guidelines are designed to ensure code quality, maintainability, and efficient development within the AGENTS repository. Adherence to these principles is mandatory for all AI coding agents.

## 1. DRY (Don't Repeat Yourself)

*   All functions, classes, and modules should have single, well-defined purposes.
*   Avoid duplication of logic across multiple files.
*   Utilize helper functions and libraries to encapsulate common functionalities.
*   Refactor any duplicated code into reusable components.

## 2. KISS (Keep It Simple, Stupid)

*   Prioritize clarity and readability above all else.
*   Keep functions and classes short and focused.
*   Use meaningful variable and function names.
*   Avoid overly complex logic.  Strive for simplicity in design.

## 3. SOLID Principles

*   **Single Responsibility Principle:** Each class/module should have one primary responsibility.
*   **Open/Closed Principle:**  The system should be extensible through provided interfaces, without modifying the existing code.
*   **Liskov Substitution Principle:**  Subclasses must be substitutable for their base classes without altering the correctness of the program.
*   **Interface Segregation Principle:** Clients should not be forced to bound to methods they do not use.
*   **Dependency Inversion Principle:** Dependencies should be replaced with abstractions.

## 4. YAGNI (You Aren't Gonna Need It)

*   Only implement functionality that is currently required.
*   Avoid adding features or code without a clear need.
*   Focus on delivering working functionality first.
*   Refactor and simplify code as necessary, but avoid adding new features unnecessarily.

## 5. Code Structure & Formatting

*   **File Size Limit:** Each file should not exceed 180 lines of code.
*   **Comments:** Provide concise, relevant comments where necessary.  Do not assume the reader understands the code.
*   **Naming Conventions:** Follow consistent naming conventions (e.g., camelCase for functions, PascalCase for classes).
*   **Whitespace:** Use consistent whitespace to improve readability.
*   **Indentation:**  Maintain consistent indentation (2 spaces).
*   **Line Length:** Keep lines approximately 80-120 characters.

## 6. Testing

*   **All Development Must Be Productive:** Development must always prioritize functionality.
*   **Unit Tests:** All functions and classes should be thoroughly unit tested.
*   **Test Coverage:**  Achieve a minimum of 80% code coverage via automated tests.
*   **Test Data:** Test data should be isolated and clearly defined.
*   **Mocking:** Mocking will ONLY be used for tests.  No integration testing.
*   **Test Execution:** Tests must run automatically and report results consistently.

## 7.  Specific Requirements (Example - Adapt to your specific project)

*   **Data Handling:**  All data manipulation should be handled within functions.
*   **Error Handling:** Implement robust error handling and logging.
*   **Configuration:** Configuration should be handled through external files or modules.
*   **API Design:**  Follow documented API design principles.

## 8.  Code Style Guide (Example - Adjust as needed)

*   **Docstrings:**  All functions, classes, and modules should have comprehensive docstrings explaining their purpose, inputs, and outputs.
*   **Error Handling:** Log errors to a standardized format for debugging.
*   **Version Control:** Utilize Git for version control.

## 9.  Reporting

*   Maintain a log of all development progress, including code commits and test results.
*   Generate a weekly report summarizing code coverage and any identified issues.

By adhering to these guidelines, we aim to ensure the AGENTS repository remains a robust, maintainable, and efficient platform for developing AI coding agents.