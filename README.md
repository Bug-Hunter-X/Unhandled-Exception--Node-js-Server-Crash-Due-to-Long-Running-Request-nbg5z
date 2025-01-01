# Node.js Server Crash Due to Long-Running Request

This repository demonstrates a common issue in Node.js servers where a long-running request can block the event loop, leading to crashes or unresponsiveness. The `bug.js` file contains the problematic code, while `bugSolution.js` provides a solution.

## Problem

The server in `bug.js` simulates a long-running request by keeping the CPU busy for 5 seconds. During this time, the event loop is blocked, preventing other requests from being processed.  If a request takes too long to process, and the request event listener is not removed, the server may eventually crash.

## Solution

The `bugSolution.js` file demonstrates how to handle long-running requests gracefully. By using request timeouts and removing event listeners, the server prevents being blocked by long-running operations, improving the overall stability and responsiveness.  Implementing timeouts and proper listener removal is essential in building robust Node.js applications.

## How to run

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js` to see the problematic behavior. 
4. Run `node bugSolution.js` to see the improved behavior.
